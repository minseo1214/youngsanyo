import Link from "next/link"
export default function Home() {
  let 작품 = ['몽탄의 달','1','Coconut']
  let 작품이미지=['/물고기.jpeg','/찻잔.jpeg','/장인_1.jpeg']
  return (
    <div>
      <div class='scroll'>
      <div className="header">
      <img src={ '/헤더.jpg'} className="img_size"/>
      <img src={ '/영산요_도예연구소.png'} className="header_text_size"/>
      </div>

      <div className="body">
      <img src={ '/박정규.png'} className="body_name"/>
      <img src={ '/장인_1.jpeg'} className="body_picture1"/>
      <img src={ '/불.png'} className="fire"/>
      <img src={ '/경력.png'} className="body_picture2"/>
      
          </div>      
          </div>
    </div>
  )
}
