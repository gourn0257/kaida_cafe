import Link from 'next/link'
import Image from 'next/image'


import './globals.css'


import {ClubMember} from './library/board.jsx'
import kaidan_cover from '/public/kaidan_cover.png'

export default function RootLayout({ children }) {
  // console.log(kaidan_cover)
  return (
    <html lang="en">
      <body>

        {/* 헤더 */}
        <header>
          <nav>
            <Link href='/' legacyBehavior><a>홈</a></Link>
            <Link href='/cover_room' legacyBehavior><a>표지 보러가기</a></Link>
            <Link href='/board' legacyBehavior><a>게시판</a></Link>
            <Link href='/write/boardWrite' legacyBehavior><a>글쓰기</a></Link>
          </nav>
          <div id='login'>
            <Link href='/login' legacyBehavior><a>Login</a></Link>
          </div>
        </header>

        
        {/* 메인 */}
        <main>
          <div id='logo'>
            <Link href='/'>
              <Image src={kaidan_cover} className='full' alt='괴담 동아리 표지'/>
              <Image src={kaidan_cover} className='full' alt='괴담 동아리 표지'/>
              <Image src={kaidan_cover} className='full' alt='괴담 동아리 표지'/>
              <Image src={kaidan_cover} className='full' alt='괴담 동아리 표지'/>
              <Image src={kaidan_cover} className='full' alt='괴담 동아리 표지'/>
            </Link>
          </div>

          <div id='main'>
            {children}
          </div>
        </main>


        {/* 풋터 */}
        <footer>
          <div>
            <p>괴담동아리 비공식 팬카페</p>
            <a href='https://page.kakao.com/content/54701995' className='origin-a' target='_blank'>괴담 동아리 보러가기</a>
          </div>
        </footer>

      </body>
    </html>
  )
}
