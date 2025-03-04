import React from 'react';
import "../subcss/About.css";
import { GiRadarDish, GiEarthCrack } from "react-icons/gi";
import { WiVolcano, WiDayCloudyWindy, WiNightAltCloudyWindy } from "react-icons/wi";
import { RiPresentationFill, RiUserHeartLine } from "react-icons/ri";
import { LiaCloudMeatballSolid } from "react-icons/lia";

function About1(props) {

    const directorTypes = [
        { name: "이미선", position:"청장", rank:"고위공무원", period: "2025. 01. 01. ~ 현재" },
        { name: "신동현", position:"청장", rank:"고위공무원", period: "2021. 12. 16. ~ 2024. 12. 31" },
        { name: "신도식", position:"청장", rank:"고위공무원", period: "2021. 05. 24. ~ 2021. 12. 15" },
        { name: "윤기한", position:"청장 직무대리", rank:"기술서기관", period: "2021. 04. 26. ~ 2021. 05. 23" },
        { name: "김성균", position:"청장", rank:"고위공무원", period: "2018. 05. 01. ~ 2021. 04. 25" },
        { name: "전준모", position:"청장", rank:"고위공무원", period: "2017. 01. 16. ~ 2018. 04. 30" },
        { name: "양진관", position:"청장", rank:"고위공무원", period: "2016. 06. 20. ~ 2017. 01. 15" },
        { name: "전재목", position:"청장 직무대리", rank:"기술서기관", period: "2016. 05. 10. ~ 2016. 06. 19" },
        { name: "남재철", position:"청장", rank:"고위공무원", period: "2015. 01. 22. ~ 2016. 05. 09" }
    ];  


  return (
        <div className="about1Box">
            <div className="intro">
                <h5>기관장 인사말</h5>
                <div className="introInner">
                    <div className='introInfo'>
                        <p>안녕하십니까? 수도권기상청 홈페이지 방문을 진심으로 환영합니다.</p>
                        <p>최근 기후변화로 인해 지구촌 곳곳이 이상기상으로 몸살을 앓고 있으며,
                        이에 따라, 정확한 기상과 기후예측에 대한 중요성이 날로 더해가고 있습니다.</p>
                        <p>수도권기상청은 서울, 인천, 경기지역의 수도권 2500만 시민의 생명과 재산을 보호하기 위해
                        정확한 기상예보를 제공함은 물론, 방재ㆍ산업ㆍ레저 등 다양한 분야에서
                        특화된 기상서비스를 제공하고, 우리 생활에 와 닿는
                        질 높은 맞춤형 서비스를 적시적소에 전달하기 위해 최선의 노력을 다할 것입니다.</p>
                        <p><span>‘하늘을 친구처럼, 국민을 하늘처럼’</span>의 마음가짐으로
                        국민과 함께 하는 수도권기상청이 되겠습니다.
                        감사합니다.</p>
                        <p>수도권기상청장 <span>이미선</span></p>
                    </div>
                    <div className='introImg'>
                        <img src={require('../images/about/about1.jpg')} alt='' />
                    </div>


                </div>
            </div>

            <div className="profile"> 
                <h5>기관장 약력</h5>
                <div className='profileInner'> 
                    <ul>
                        <li className='profileLIst'>
                            <span><WiDayCloudyWindy className='profileIco1'/></span>
                            <p>
                            수도권<span>기상청장</span> <span>2025.01</span>
                            </p>
                        </li>
                        <li className='profileLIst'>
                            <span><LiaCloudMeatballSolid className='profileIco1'/></span>
                            <p>
                            기후과학국 <span>기후과학국장</span><span>2021.01</span>
                            </p>
                        </li>
                        <li className='profileLIst'>
                            <span><WiNightAltCloudyWindy className='profileIco1'/></span>
                            <p>
                            광주지방<span>기상청장</span><span>2020.01</span>
                            </p>
                        </li>
                        <li className='profileLIst'>
                            <span><RiUserHeartLine className='profileIco2'/></span>
                            <p>
                            국가공무원 <span>인재개발원 파견</span><span>2019.02</span>
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li className='profileLIst'>
                            <span><GiEarthCrack className='profileIco2'/></span>
                            <p>
                            지진화산국 <span>지진화산국장</span><span>2018.03</span>
                            </p>
                        </li>
                        <li className='profileLIst'>
                            <span><WiVolcano className='profileIco3'/></span>
                            <p>
                            지진화산센터 <span>지진화산센터장</span><span>2017.01</span>
                            </p>
                        </li>
                        <li className='profileLIst'>
                            <span><GiRadarDish className='profileIco2'/></span>
                            <p>
                            관측기반국 <span>관측기반국장</span><span>2016.03</span>
                            </p>
                        </li>
                        <li className='profileLIst'>
                            <span><RiPresentationFill className='profileIco1'/></span>
                            <p>
                            예보국 <span>예보정책과장</span><span>2013.05</span>
                            </p>
                        </li>
                    </ul>
                </div>
                 
        
            </div>

            <div className="directors"> 
                <h5>역대 기관장</h5>

                <table className="directorList">
                    <thead>
                        <tr>
                            <th className='directorName'>성명</th>
                            <th>직위</th>
                            <th>직급</th>
                            <th>재직기간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {directorTypes.map((item, index) => (
                        <tr key={`director-${index}`}>
                            <td className='directorName'>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.rank}</td>
                            <td>{item.period}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
  );
}

export default About1;