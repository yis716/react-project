import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import img1 from "../images/logo.png";
//import { FaBars } from "react-icons/fa";

function Header() {

    const [scroll, setScroll] = useState(0);   //스크롤 거리
    const smh = 200; // 비주얼 이미지 높이 (예제에서는 900px)
    const [headHeight, setHeadHeight] = useState();  //헤더의 높이
    const [width, setWidth] = useState(window.innerWidth); //스크린의 가로해상도
 
    const [isSwitched, setIsSwitced] = useState(false); //햄버거 메뉴 열림(true->show)/닫힘(false ->hide)
    const [isSwitched2, setIsSwitced2] = useState(false);

    const navHandler = (e) => {
      e.preventDefault();
      setIsSwitced(!isSwitched);  //메뉴 토글
      setIsSwitced2(!isSwitched2);
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


    const navCloseHandler = () => {
      setIsSwitced(false);  //메뉴 토글
      setIsSwitced2(false);
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
    <>
    <div id="skipNav">
    <a href="#content">본문 바로가기</a>
    <a href="#nav">글로벌 네비게이션 바로가기</a>
    </div>
    <header
      id="headerArea"
      style={{
        borderBottom: scroll > smh - 150 ? "1px solid #ccc" : "none",
        height: headHeight,
        transition: "all 0.3s ease-in-out",
        background: "#fff",
      }}>
      <div className={`header_inner ${scroll > smh - 150 ? "ch" : ""}`}>
        <h1>
          <NavLink to="/">
            <img src={img1} alt="기상청 로고" /> <span className='hidden'>기상청</span>
          </NavLink>
        </h1>
          <nav id='gnb' className={isSwitched ? "show" : "hide"} onClick={navCloseHandler}>
            <h2 className='hidden'>글로벌네비게이션</h2>
            <ul>
              <li><h3><NavLink to="/About">기관소개</NavLink></h3></li>
              <li><h3><NavLink to="/Position">주요업무</NavLink></h3></li>
              <li><h3><NavLink to="/Data">기상정보</NavLink></h3></li>
              <li><h3><NavLink to="/Notice">기상연구</NavLink></h3></li>
              <li> <h3>
                <NavLink
                  to="/Letter"
                  className={({ isActive, isPending, isTransitioning }) => {
                    const path = window.location.pathname;
                    const isLetterRoute =
                      path === "/Letter" || path === "/Letter2" || path === "/Letter3";

                    return isLetterRoute ? "active" : "";
                  }}>
                  국민참여
                </NavLink> </h3>
              </li>
              <li><h3>
                <NavLink to="/Service">행동요령</NavLink></h3>
              </li>
            </ul>
          </nav>
      </div>
      <button className={isSwitched2 ? "mn_open" : ""} onClick={navHandler}>
        <span className="hidden">메뉴열기</span>
        <span></span>
      </button>
    </header>
    </>
  );
}

export default Header;
