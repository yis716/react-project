import React, {useState , useEffect} from 'react';
import img1 from "../images/logo.png";
import { IoAddCircleOutline } from "react-icons/io5";


function Footer() {

  const [isSwitched, setIsSwitced] = useState(false);
  const [upDown, setUpDown] = useState(false); //false(위)/true(아래)
 
 
  const familyHandler = () => {
    setIsSwitced(!isSwitched);
  };
  const closeFamilyMenu = () => {
    setIsSwitced(false);
 }

 const handleScroll = () => {
      //console.log(window.scrollY);
      //window.scrollY -> 스크롤 탑 y축의 거리
      if (window.scrollY > 300){
         setUpDown(true); //down(보인다)
      }else{
         setUpDown(false); //up(안보인다)
      } 
    };

   useEffect(() => {
      // window에 scroll 이벤트를 넣는다.
      window.addEventListener('scroll', handleScroll);
      // 페이지를 벗어날 때 이벤트를 제거한다.
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   const topHandler = (e) => {
      e.preventDefault();
      window.scroll({top:0 , behavior:'smooth'}); //자바스크립트 -> TOP 위치로 부드럽게 이동시키는 코드
    };




  return (
    <footer>
      <div className="F_top">
      <img src={img1} alt="기상청 로고" />
        <div className="dropup-center" onMouseLeave={closeFamilyMenu}>
          <button type="button" onClick={familyHandler}>
            Family Site <span><IoAddCircleOutline /></span>
          </button>
          <ul className={isSwitched ? "show" : "hide"}>
            <li>
              <a href="https://www.ndmi.go.kr/home/main.do" target='_blank' title='새창으로 열림'>국립재난안전연구원</a>
            </li>
            <li>
              <a href="https://119.seoul.go.kr/asims/main.do" target='_blank' title='새창으로 열림'>서울종합방재센터</a>
            </li>
            <li>
              <a href="https://www.kmiti.or.kr/" target='_blank' title='새창으로 열림'>한국기상산업기술원</a>
            </li>
          </ul>
          <p>기상청 <br/> 고객센터 131 (유료)</p>
        </div>
      </div>
     
      <div className="F_bottom">
      <ul>
        <li>
            <a href="/">개인정보 처리방침</a>
          </li>
          <li>
            <a href="/">이용안내</a>
          </li>
          <li>
            <a href="/">저작권보호 및 정책</a>
          </li>
          <li>
            <a href="/">웹접근성정책</a>
          </li>
        </ul>
      <p>
          대전 (35208) 대전광역시 서구 청사로 189 정부대전청사 1동 11~14층 <br />
          서울 (07062) 서울특별시 동작구 여의대방로16길 61 <br />
          전화 02-2181-0900 , 042-481-7500 | 전자우편(웹사이트 관련 문의): webmasterkma@korea.kr{" "}
          <br />
          기상청 업무에 관한 문의는 국민신문고를 이용해주시기 바랍니다.
          {/* 본 누리집에 게시된 전자우편 주소가 자동 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 처벌됨을 유념하시기
          바랍니다.  */}
          <br />
          <span>Copyright © 2022 KMA. All Rights RESERVE</span>
          
        </p>
      </div>
      
        <a className={'top_move '+( upDown ? 'down' : 'up' )} href="#" onClick={topHandler}><span>TOP</span></a>
    </footer>
  );
}

export default Footer;
