import Image from "next/image"
export default function List() {
  let 작품1 = ['차드립기','찻잔1','무유 차항아리1','접시2','무유 차항아리4','화려한도자기']
  let 작품이미지1=['/차 드립기1.jpg','/찻잔1.jpg','/무유3.png','접시2.jpg','/무유4.png','화려한도자기.jpg']


  let 작품2 = ['달항아리','접시2','무유5','찻잔4','차드립기2']
  let 작품이미지2=['/달항아리1.jpeg','/무유5.png','/다구3.jpeg','/찻잔4.jpg','차_드립기2.jpg']


  let 작품3 = ['무유 차항아리3','다도구1','찻잔2','무유 차항아리 단체사진','다도구2','무유 차항아리5']
  let 작품이미지3=['/무유2.png','다구1.jpeg','/찻잔2.jpeg','/무유단체.png','다구2.jpeg','/무유1.png']
    return (
      <div>
        <h4 className="title">작품목록</h4>
        <div className="container">
        <div className="images">
        <div className="imageFlex1">
          {
            작품1.map((num,i)=>{
                return(
                    <div className="artwork1" key={i}>
                        <img src={작품이미지1[i]} className="sub_img"/>
                    </div>
                )
            })
          }
        </div>
      </div>
      <div className="images">
        <div className="imageFlex2">
        {
            작품2.map((num,i)=>{
                return(
                    <div className="artwork2" key={i}>
                        <img src={작품이미지2[i]} className="sub_img"/>
                    </div>
                )
            })
          }
        </div>
      </div>
      <div className="images">
        <div className="imageFlex3">{
            작품3.map((num,i)=>{
                return(
                    <div className="artwork3" key={i}>
                        <img src={작품이미지3[i]} className="sub_img"/>
                    </div>
                  )
                })
              }
            </div>
          </div>
      
        </div>
      </div>
    )
  }
  