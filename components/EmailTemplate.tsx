interface EmailTemplateProps {
  otp?: string;
  email?: string;
}

const EmailTemplate = ({ otp, email }: EmailTemplateProps): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Verify your email - Learnova</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 30px; border-radius: 8px; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #2563eb; font-size: 28px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -0.5px;">
              Learnova
            </h1>
            <p style="color: #6b7280; font-size: 16px; margin: 0;">
              Learning Platform
            </p>
          </div>

          <!-- Main Content -->
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="color: #111827; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">
              Verify your email address
            </h2>
            
            <p style="color: #4b5563; font-size: 16px; margin: 0 0 30px 0; line-height: 1.5;">
              Hi there! Please use the verification code below to verify your email address and complete your account setup.
            </p>

            <!-- OTP Code -->
            <div style="background-color: #f8fafc; border: 2px dashed #e5e7eb; border-radius: 8px; padding: 30px 20px; margin: 30px 0; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
                Your verification code
              </p>
              <div style="font-size: 36px; font-weight: 700; color: #2563eb; letter-spacing: 8px; font-family: Monaco, Consolas, 'Lucida Console', monospace; margin: 0;">
                ${otp || 'XXXXXX'}
              </div>
            </div>

            <p style="color: #6b7280; font-size: 14px; margin: 20px 0; line-height: 1.4;">
              This code will expire in <strong>10 minutes</strong>. If you didn't request this verification, please ignore this email.
            </p>
          </div>

          <!-- Instructions -->
          <div style="background-color: #f0f9ff; border: 1px solid #e0f2fe; border-radius: 6px; padding: 20px; margin: 30px 0;">
            <h3 style="color: #0369a1; font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">
              What's next?
            </h3>
            <p style="color: #0c4a6e; font-size: 14px; margin: 0; line-height: 1.4;">
              Enter this code in the verification form to complete your email verification and start using Learnova.
            </p>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 30px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0 0 10px 0; line-height: 1.4;">
              This email was sent to <strong>${email || 'your email address'}</strong>
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.4;">
              © 2025 Learnova. All rights reserved.
            </p>
          </div>
        </div>

        <!-- Footer outside main container -->
        <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 11px;">
          <p style="margin: 0;">
            If you have any questions, please contact our support team.
          </p>
        </div>
      </body>
    </html>
  `;
};

export default EmailTemplate;