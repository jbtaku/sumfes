import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'サマーフェスティバルHAKUSAN 2023',
  description: 'サマーフェスティバル HAKUSAN 2023 8月20日（日）松任総合運動公園にて開催！',
  keywords: ["KARA旨グランプリ", "松任まつり", "北陸グルメ", "松任", "石川県"],
  openGraph: {
    title: "サマーフェスティバル HAKUSAN 2023 8月20日（日）松任総合運動公園にて開催！",
    description: "『KARA旨グランプリ』や、サマフェスキッズランドなどの楽しいイベントが盛り沢山！是非お越しください！",
    type: "website",
    url: "http://summerfestival.info/",
    siteName: "サマーフェスティバル HAKUSAN 2023",
    images: "/images/ogp.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
