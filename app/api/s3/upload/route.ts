import { NextResponse } from "next/server";
import { z } from "zod";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "@/lib/env";
import { v4 as uuidv4 } from "uuid";
import { S3 } from "@/lib/S3Client";

export const fileUploadSchema = z.object({
  fileName: z.string().min(1, { error: "File name is required" }),
  contentType: z.string().min(1, { error: "Content type is required" }),
  size: z.number().min(1, { error: "Size is required" }),
  isImage: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validation = fileUploadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid Request Body" },
        { status: 400 }
      );
    }

    const { fileName, contentType, size } = validation.data;
    const uniqueKey = `${uuidv4()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
      Key: uniqueKey,
      ContentType: contentType,
      ChecksumAlgorithm: undefined as any,
    });

    const presignedUrl = await getSignedUrl(S3, command, {
      expiresIn: 360, // url expires in 6 minutes
    });

    const res = {
      presignedUrl,
      key: uniqueKey,
    };

    return NextResponse.json(res);
  } catch {
    return NextResponse.json(
      {
        error: "Failed to generate presigned URL",
      },
      { status: 500 }
    );
  }
}
