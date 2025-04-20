export async function submitForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "お問い合わせを受け付けました。担当者が内容を確認し、3営業日以内にご連絡いたします。",
  }
}
