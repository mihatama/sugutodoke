// This is a placeholder for the app/actions.ts file.
// Since there was no existing code, I'm creating a basic structure
// and incorporating the update.

export async function submitForm(formData: FormData) {
  // Simulate form submission and processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // 成功メッセージを「3営業日以内」に変更します
  return {
    success: true,
    message: "お問い合わせを受け付けました。担当者が内容を確認し、3営業日以内にご連絡いたします。",
  }
}
