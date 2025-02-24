import React, {useState , useEffect} from 'react';
import { Link } from 'react-scroll';
import "../subcss/About.css";
import { BsSnow2 } from "react-icons/bs";


function About2() {
    const [upDown, setUpDown] = useState(false); //false(위)/true(아래)

    const handleScroll = () => {
       //console.log(window.scrollY);
       if (window.scrollY > 300){
          setUpDown(true);
       }else{
          setUpDown(false);
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




  return (
    <div className="about2Box">
        <div className={'menu '+( upDown ? 'down' : 'up' )}>
            <Link to="year1" spy={true} smooth={true} duration={3000} offset={-80}>
                <span>2000s-</span>
            </Link>
            <Link to="year2" spy={true} smooth={true} offset={-80}>
                <span>1990s</span>
            </Link>
            <Link to="year3" spy={false} smooth={true} offset={-80}>
                <span>1960-70s</span>
            </Link>
        </div>


        <div className='timeBox'>
            <h5></h5>
            
            <div className='timeline'>
                <BsSnow2 className='icoSnow'/><span></span>
                <BsSnow2 className='icoSnow'/><span></span>
                <BsSnow2 className='icoSnow'/><span></span><BsSnow2 className='icoSnow'/>
            </div>
            
            
            <div className='imgBox20'>
                <p>2000s-</p>
            </div>
            
            <div id="year1" className='timeTxt20'>
                <ul>
                    <li>
                        <span>2019. 05.</span>
                        <p>신청사 설립 후 본·별관 통합</p>
                    </li>
                
                    <li>
                        <span>2015. 06. 26</span>
                        <p>2차 조직개편 : (구)수원·이천·동두천·파주기상대 관할</p>
                    </li>
                
                    <li>
                        <span>01. 22</span>
                        <p>수도권기상청 신설, 1차 조직개편 : 예보광역화·관측효율화</p>
                    </li>
                
                    <li>
                        <span>2003. 11. 06</span>
                        <p>국가농업기상센터 설립</p>
                    </li>
                </ul>
            </div>
            
                
            <div id="year2" className='timeTxt90'>
                <ul>
                    <li>
                        <p>수원기상대 신청사 준공</p>
                        <span>1996. 11. 21</span>
                    </li>
                
                    <li>
                        <p>이천기상관측소 청사 신축 이전</p>
                        <span>1994. 06. 23</span>
                    </li>
                
                    <li>
                        <p>수원기상대로 개칭</p>
                        <span>1992. 03. 13</span>
                    </li>
                
                    <li>
                        <p>양평기상관측소 청사 신축 이전</p>
                        <span>1991. 12. 20</span>
                    </li>
                
                    <li>
                        <p>대전지방기상대 수원관측소로 직제 변경</p>
                        <span>12. 15</span>
                    </li>
                </ul>
            </div>
           
            
            <div className='imgBox90'>
                <p>1990s</p>
            </div>
            
            
            <div className='imgBox70'>
                
                <p>1960-70s</p>
            </div>
            
            <div id="year3" className='timeTxt70'>
                <ul>
                    <li>
                        <span>1978. 04. 15</span>
                        <p>농업기상분실 2소 패쇄(화성, 안성)</p>
                    </li>
                
                    <li>
                        <span>1971. 01. 01</span>
                        <p>종관관측 시작</p>
                    </li>
                
                    <li>
                        <span>1970. 07. 18</span>
                        <p>강화, 양평, 이천, 화성, 안성 농업분실 신설</p>
                    </li>
                
                    <li>
                        <span>1964. 01.</span>
                        <p>기상관측업무 개시 (경기도 수원시 서둔동 208-16)</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  );
}

export default About2;
