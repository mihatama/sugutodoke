export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "みはたま株式会社",
    url: "https://sugutodoke.com",
    logo: "https://sugutodoke.com/loot-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "050-5806-6093",
      contactType: "customer service",
      availableLanguage: "Japanese",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      postalCode: "444-3261",
      addressRegion: "愛知県",
      addressLocality: "豊田市",
      streetAddress: "東大林町岩本29-3",
    },
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "スグとどけ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      availability: "https://schema.org/OnlineOnly",
    },
    description: "AIを活用した配送ルート最適化サービス。古紙回収から始まり、今ではあらゆる業種に対応。",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
    </>
  )
}
