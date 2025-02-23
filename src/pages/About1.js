import React from 'react';
import "../subcss/About.css";

function About1(props) {
  return (
        <div className="about1Box">
            <div className="intro">
                <h4>기관장 인사말</h4>
                <div className="introInner">
                    <div>
                        <span>
                            정확한 기상예보<br/>
                            특화된 기상서비스<br/>
                            질 높은 맞춤형 서비스<br/>
                        </span>
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
                    <img src={require('../images/about/about1.jpg')} alt='' />
                </div>
            </div>

            <div className="profile"> 
                <h4>기관장 약력</h4>

            </div>

            <div className="directors"> 
                <h4>역대 기관장</h4>

            </div>
        </div>
  );
}

export default About1;
