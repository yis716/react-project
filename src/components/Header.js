import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import img1 from "../images/logo.png";
import { FaBars } from "react-icons/fa";

function Header() {

    const [scroll, setScroll] = useState(0);   //스크롤 거리
    const smh = 900; // 비주얼 이미지 높이 (예제에서는 900px)
    const [headHeight, setHeadHeight] = useState();  //헤더의 높이
    const [width, setWidth] = useState(window.innerWidth); //스크린의 가로해상도
 
    const [isSwitched, setIsSwitced] = useState(false); //햄버거 메뉴 열림(true->show)/닫힘(false ->hide)

    const navHandler = (e) => {
      e.preventDefault();
      setIsSwitced(!isSwitched);  //메뉴 토글
    };

    let isMobile = width <= 1024;  //테블릿 이하면...
    let header_height;

    const load = () => {
      if(isMobile){   //1024이하
        //console.log('테블릿');
         header_height = '60px';
      }else{  //pc이상
        // console.log('pc이상');
        header_height =  '130px';
      }
      setHeadHeight(header_height);
    };


    const handleScroll = () => {   //스크롤 이벤트
      const scrollTop = window.scrollY;
      let win_width = window.innerWidth;
      setScroll(scrollTop);
      
      if(win_width>1024){ //pc이상에서만..
        if (scrollTop > smh - 150) {  //내려오면
          setHeadHeight('60px');
        }else{  //스크롤이 
          setHeadHeight('130px');  //올라가면
        }
      }
    };
  
    const handleResize = () => {
      let win_width = window.innerWidth;
      //isMobile = width <= 1024; 
      if(win_width<=1024){
         header_height = '60px';
      }else{
        header_height = '130px';
      }
      setHeadHeight(header_height);  //
      setWidth(win_width);
    };


    useEffect(() => {
      load();
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize); // cleanup
      }
    }, []);
  
  
  return (
    <header id='headerArea'
   
    style={{
      borderBottom: scroll > smh - 150 ? '1px solid #ccc' : 'none',
      height: headHeight,
      transition: 'all 0.3s ease-in-out',
      background:'#fff'
    }}>
      <div className={`header_inner ${scroll > smh - 150 ? 'ch' : ''}`}>
      <h1>
        <NavLink to="/">
          <img src={img1} alt="기상청 로고" />
        </NavLink>
      </h1>
      <nav  className={ isSwitched ? 'show' : 'hide' }>
        <ul>
          <li>
            <NavLink to="/About">기관소개</NavLink>
          </li>
          <li>
            <NavLink to="/Position">주요업무</NavLink>
          </li>
          <li>
            <NavLink to="/Data">정보공개</NavLink>
          </li>
          <li>
            <NavLink to="/Notice">알람 및 소식</NavLink>
          </li>
          <li>
            <NavLink to="/Letter">국민참여</NavLink>
          </li>
          <li>
            <NavLink to="/Service">행동요령</NavLink>
          </li>
        </ul>
      </nav>
      </div> 
      <button onClick={navHandler}><span className='hidden'>메뉴열기</span><FaBars className="ico" /></button>
    </header>
  );
}

export default Header;
