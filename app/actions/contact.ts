"use server"

import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  company: z.string().min(1, "会社名は必須です"),
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().optional(),
  inquiryType: z.string(),
  message: z.string().min(1, "メッセージは必須です"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      company: formData.get("company") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      inquiryType: formData.get("inquiryType") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // In a real implementation, you would use an email service like SendGrid, Mailgun, etc.
    // For this example, we'll log the data and simulate sending an email
    console.log("Sending email to info@mihatama.com with data:", validatedData)

    // Simulate API call to email service
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically make an API call to your email service
    // Example with SendGrid (commented out as it's just for reference):
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'info@mihatama.com' }],
            subject: `お問い合わせ: ${validatedData.inquiryType}`,
          },
        ],
        from: { email: 'noreply@yourdomain.com', name: 'スグとどけ' },
        reply_to: { email: validatedData.email, name: validatedData.name },
        content: [
          {
            type: 'text/plain',
            value: `
              会社名: ${validatedData.company}
              お名前: ${validatedData.name}
              メールアドレス: ${validatedData.email}
              電話番号: ${validatedData.phone || 'なし'}
              お問い合わせ内容: ${validatedData.inquiryType}
              メッセージ: ${validatedData.message}
            `,
          },
        ],
      }),
    })
    */

    return {
      success: true,
      message: "お問い合わせありがとうございます。担当者が内容を確認し、1営業日以内にご連絡いたします。",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "入力内容に問題があります。もう一度ご確認ください。",
        errors: error.errors,
      }
    }
    return { success: false, message: "エラーが発生しました。後ほど再度お試しください。" }
  }
}
