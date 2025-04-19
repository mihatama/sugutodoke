"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        setSuccessMessage(result.message)
        setSubmitted(true)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("エラーが発生しました。後ほど再度お試しください。")
      console.error("Form submission error:", err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
        <div className="rounded-full bg-primary-100 p-3">
          <CheckCircle className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold">お問い合わせありがとうございます</h3>
        <p className="text-gray-500 max-w-md">{successMessage}</p>
        <Button onClick={() => setSubmitted(false)} className="mt-4 bg-primary-600 hover:bg-primary-700">
          新しいお問い合わせ
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start gap-2">
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">会社名</Label>
          <Input
            id="company"
            name="company"
            placeholder="株式会社〇〇"
            required
            className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">お名前</Label>
          <Input
            id="name"
            name="name"
            placeholder="山田 太郎"
            required
            className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@company.com"
            required
            className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">電話番号</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="03-1234-5678"
            className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label>お問い合わせ内容</Label>
        <RadioGroup defaultValue="info" name="inquiryType" className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="info" id="info" className="text-primary-600" />
            <Label htmlFor="info" className="font-normal">
              サービスについての詳細情報
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="demo" id="demo" className="text-primary-600" />
            <Label htmlFor="demo" className="font-normal">
              デモのリクエスト
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="api" id="api" className="text-primary-600" />
            <Label htmlFor="api" className="font-normal">
              API連携について
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom" className="text-primary-600" />
            <Label htmlFor="custom" className="font-normal">
              カスタマイズについて
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" className="text-primary-600" />
            <Label htmlFor="other" className="font-normal">
              その他
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">メッセージ</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="お問い合わせ内容の詳細をご記入ください"
          className="min-h-[120px] border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" disabled={loading}>
        {loading ? "送信中..." : "送信する"}
      </Button>
    </form>
  )
}
