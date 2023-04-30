import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div class='scroll'>
        <div className="navbar">
          <Link href="/">영산요</Link>

          <Link href="/list">작품</Link>
          <Link href="https://smartstore.naver.com/assemb001">작가 작품 구매하기</Link>
          <Link href="https://www.facebook.com/profile.php?id=100003359691768&mibextid=ZbWKwL">페이스북</Link>
          <Link href="https://instagram.com/joenggyu_park?igshid=YmMyMTA2M2Y=">개인_인스타그램</Link>
          <Link href="https://instagram.com/assemblage_001?igshid=ZDdkNTZiNTM=">작가활동_인스타그램</Link>
          <Link href="https://www.youtube.com/@assemblage001">작가활동_유튜브</Link>
       </div>
      {children}
      </div>
      </body>
    </html>
  )
}
