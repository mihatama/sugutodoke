import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src="/loot-logo.png" alt="スグとどけ ロゴ" width={32} height={32} />
                <span className="text-xl font-bold text-primary-600">スグとどけ</span>
              </div>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600">
            <ArrowLeft className="h-4 w-4" />
            <span>トップページに戻る</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">プライバシーポリシー</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">1. 基本方針</h2>
            <p className="text-gray-700">
              みはたま株式会社（以下「当社」といいます）は、配送ルート最適化サービス「スグとどけ」（以下「本サービス」といいます）の提供に際し、利用者（以下「ユーザー」といいます）の個人情報の保護を重要な責務と認識し、個人情報の適正な取扱いおよび安全管理に努めます。本プライバシーポリシーは、本サービスにおけるユーザーの個人情報の収集、利用、管理および第三者提供に関する基本方針を定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. 個人情報の定義</h2>
            <p className="text-gray-700">
              本ポリシーにおける「個人情報」とは、氏名、住所、電話番号、メールアドレス、会社名、配送先情報、車両情報、位置情報、その他、特定の個人を識別できる情報（他の情報と照合することで個人が特定できる情報を含む）をいいます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. 個人情報の収集および利用目的</h2>
            <p className="text-gray-700">当社は、以下の目的のためにユーザーの個人情報を収集・利用いたします。</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>
                <strong>サービス提供のため：</strong>{" "}
                本サービスの会員登録、認証、配送ルート最適化、位置情報の分析、各種通知（メール、SMS等）の送信
              </li>
              <li>
                <strong>カスタマーサポートおよび問い合わせ対応のため：</strong>{" "}
                ユーザーからのお問い合わせ対応、サポートの提供、サービス改善のためのアンケート調査
              </li>
              <li>
                <strong>決済業務のため：</strong> サブスクリプション料金の決済、請求書の発行、決済に関する連絡
              </li>
              <li>
                <strong>法令に基づく対応のため：</strong> 税務、会計、法令・規制への対応のための情報保存および開示対応
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. 個人情報の収集方法</h2>
            <p className="text-gray-700">
              当社は、ユーザーが本サービスに登録する際、またはサービス利用中に各種フォーム（お問い合わせフォーム、登録フォーム等）を通じて、必要な個人情報を直接ご提供いただく方法で収集いたします。また、クッキー（Cookie）等の技術を用いて利用状況（アクセスログ、利用履歴等）を収集する場合がありますが、これらの情報は個人が特定できない形で管理いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. 個人情報の第三者提供について</h2>
            <p className="text-gray-700">
              当社は、次の場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合、または公的機関からの正式な要請があった場合</li>
              <li>
                サービスの運営・改善、決済業務等に必要な場合で、かつ提供先において厳重な管理がなされることを条件とする場合（この場合、提供先との間で機密保持契約等を締結します）
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. 個人情報の安全管理措置</h2>
            <p className="text-gray-700">
              当社は、個人情報の漏洩、滅失、毀損等を防止するため、合理的かつ適切な安全管理措置（技術的・組織的対策）を講じます。また、社員等に対して個人情報保護の重要性を周知し、定期的な教育・研修を実施しております。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. 個人情報の保存期間および利用停止・削除</h2>
            <p className="text-gray-700">
              当社は、利用目的に必要な期間、または法令に定める保存期間内に限り個人情報を保有します。目的が達成された場合、またはユーザーからの削除・利用停止の要請があった場合は、速やかに対応いたします。ただし、法令により保存義務がある場合はその限りではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. ユーザーの権利</h2>
            <p className="text-gray-700">
              ユーザーは、当社が保有する自己の個人情報について、開示、訂正、利用停止、削除等を求める権利があります。これらのご請求は、当社所定の方法によりお申し出ください。合理的な期間内に対応させていただきます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. クッキー（Cookie）の利用について</h2>
            <p className="text-gray-700">
              当社は、サービス向上および利用状況の分析のためにクッキーを使用することがあります。クッキーはユーザーのブラウザに一時的に保存される情報であり、個人を特定するものではありません。ユーザーは、ブラウザの設定によりクッキーの受け入れを拒否することができますが、その場合、本サービスの一部機能が正常に動作しない可能性があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. プライバシーポリシーの変更</h2>
            <p className="text-gray-700">
              本プライバシーポリシーは、法令改正やサービス内容の変更に伴い、随時改定することがあります。改定内容は本ウェブサイト上に掲載し、掲載後にユーザーが本サービスを利用した場合は、改定後のポリシーに同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">11. お問い合わせ先</h2>
            <div className="text-gray-700 space-y-1">
              <p>
                <strong>会社名：</strong>みはたま株式会社
              </p>
              <p>
                <strong>所在地：</strong>〒444-3261 愛知県豊田市東大林町岩本29-3
              </p>
              <p>
                <strong>電話番号：</strong>050-5806-6093（平日 9:00～17:00）
              </p>
              <p>
                <strong>メールアドレス：</strong>info@mihatama.com
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Image src="/loot-logo.png" alt="スグとどけ ロゴ" width={32} height={32} />
            <span className="text-xl font-bold text-primary-600">スグとどけ</span>
          </div>
          <div className="text-sm text-gray-500">© 2025　みはたま</div>
        </div>
      </footer>
    </div>
  )
}
