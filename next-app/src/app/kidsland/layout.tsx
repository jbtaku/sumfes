import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'サマフェスキッズランド｜サマーフェスティバルHAKUSAN 2023',
  description: 'サマフェスキッズランドで大人の仕事を体験しよう！サマーフェスティバルHAKUSAN2023 8月20日（日）松任総合運動公園にて開催！',
  keywords: ["KARA旨グランプリ", "松任まつり", "北陸グルメ", "松任", "石川県"],
  openGraph: {
      title: "サマーフェスティバル HAKUSAN 2023 8月20日（日）松任総合運動公園にて開催！",
      description: "『KARA旨グランプリ』や、サマフェスキッズランドなどの楽しいイベントが盛り沢山！是非お越しください！",
      type: "website",
      url: "http://summerfestival.info/kids-land/",
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
    <div className={inter.className + " bg-gradient-to-br from-green-400 via-blue-200 to-green-500 min-h-screen lg:w-[70%] mx-auto"}>
      {children}
    </div>
  )
}