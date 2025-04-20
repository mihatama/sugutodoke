"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!e.currentTarget.checkValidity()) {
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <form action="https://formsubmit.co/info@mihatama.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="【スグとどけ】お問い合わせがありました" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://sugutodoke.com/thanks" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input
        type="hidden"
        name="_autoresponse"
        value="お問い合わせありがとうございます。担当者が内容を確認し、3営業日以内にご連絡いたします。"
      />

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
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            送信中...
          </>
        ) : (
          "送信する"
        )}
      </Button>
    </form>
  )
}
