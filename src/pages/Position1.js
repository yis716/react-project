import React from 'react';
import * as S from "../Styled";
import '../subcss/Position.css'

function Position1() {
    return (
        <div className='position'>
            <h3 className='hidden'>관측 업무</h3>
            <div className='commonTit'>
                <p>주요 업무</p>
                <p>관할지역의 기상감시·관측, 기상관측장비의 운영</p>
            </div>
            <div className='conInner'>
                <div className='eqCon1 con'>
                    <h4>기상관측장비별 소개</h4>
                    <p>
                        수도권기상청은 서울·인천·경기도의 지상기상관측을 비롯하여 고층·해양·지진 등 분류별 기상관측을 수행하고 있다.<br/> 
                        지상관측은 260개소(종관기상관측장비 ASOS 9개소, 방재기상관측장비 AWS 101개소)의 지상기상관측장비와 황사기상관측장비 7개소, 레이저식적설장비 107개소,<br/> 
                        안개기상관측장비 43개소를 운영하고 있으며, 고층기상관측장비는 5개소로 레윈존데 2개소, 연직바람관측장비 3개소이다.<br/> 
                        해양기상관측장비는 41개소로 해양기상부이 3개소, 파고부이 5개소, 선박기상관측장비 8개소, 등표기상관측장비 1개소를 운영하고 있으며 지진기상관측장비는<br/>
                        시추형, 지표형 등 42개소가 운영되고 있다.
                    </p>
                    <div className='conInimg'>
                        <img src={require("../images/position/po_img1.jpg")} alt="" />
                    </div>
                </div>
                <div className='eqCon2 con'>
                    <h5>지상기상관측장비</h5>
                    <p>- 종관기상관측장비(ASOS) 9개소와 자동기상관측장비(AWS) 101개소를 통해 지상기상관측업무를 수행하고 있다.</p>
                    <p>
                        - ASOS는 수원을 비롯한 서울기상관측소, 백령도기상관측소 등에 설치되어 기상현상 관측 및 국제전문을 통한 자료 공유 등의 관측업무를 수행하며,
                        AWS는 산악지역이나 섬처럼 사람이 관측하기 어려운 곳에 설치하여 집중호우, 우박, 뇌우, 돌풍 등과 같은 국지적인 위험기상 현상을 실시간으로 감시하고 있다.
                    </p>
                    <p>
                        - AWS는 기온, 풍향, 풍속, 강수량, 강수유무를 기본 관측요소로 하며, AWS 중 동네예보 편집지점에는 기압과 습도를 선택하여 관측하고 있다.
                        ASOS는 AWS 관측요소에 일조, 일사, 초상온도, 지면온도, 지중온도 등의 요소를 추가로 관측하고 있다.
                    </p>
                    <div className='conInimg'>
                        <img src={require("../images/position/po_img2.jpg")} alt="" />
                        <img src={require("../images/position/po_img3.jpg")} alt="" />
                    </div>
                </div>
                <div className='eqCon3 con'>
                    <h5>고층기상관측장비</h5>
                    <p>- 레윈존데 2개소와 연직바람관측장비 3개소를 통해 고층기상관측업무를 수행하고 있다.</p>
                    <p>
                        - 레윈존데는 백령도와 덕적도에 설치된 장비로 정확한 일기예보와 대기 상태를 이해하기 위해서는 지상뿐만 아니라 상층의 기상 상태까지 파악해야 하며,
                        지상으로부터 30km이상 상공까지의 기압, 기온, 습도, 풍향, 풍속을 하루 2회에서 4회(오전 9시 ~ 오후 9시) 관측하고 있다.<br/>
                        또한 태풍, 집중호우 등 위험기상 예상시에도 하루 2회에서 4회로 특별관측을 실시하기도 한다.
                    </p>
                    <p>
                        - 연직바람관측장비는 백령도, 파주, 덕적도에 설치되어 VHF대(30~300㎒)와 UHF(300~3,000㎒) 전파를 대기중으로 발사하고 대기 난류에 의해 후방 산란된 전파를 수신하여
                        지상에서 최대 고도 9.5km까지 바람 및 대기상태를 측정하는 장비이다. 수도권기상청에서는 고층 바람관측의 시간 및 공간분해능 향상을 위해 연직바람관측장비를 운영하고 있다.
                    </p>
                    <div className='conInimg'>
                        <img src={require("../images/position/po_img4.jpg")} alt="" />
                        <img src={require("../images/position/po_img5.jpg")} alt="" />
                    </div>
                </div>
                <div className='eqCon4 con'>
                    <h5>해양기상관측장비</h5>
                    <p>
                        - 해양기상정보의 수요가 급증하면서 해양기상정보가 중요해지고 있다. 수도권기상청은 인천경기앞바다와 서해중부먼바다의 해상관측을 위해 해양기상부이 3개소, 파고부이 5개소,
                        선박기상관측장비 8개소, 등표기상관측장비 1개소, 해양안개관측장비 24개소를 운영하고 있다.
                    </p>
                    <p>
                        - 해양기상부이는 덕적도, 인천, 풍도 해상에 설치되어 해수면에서의 해양기상 현상을 관측하고, 위성을 이용하여 관측자료를 전송하는 원반형(3m) 해양기상부이로
                        풍향, 풍속, 기압, 기온, 습도, 파고, 파주기, 수온 등을 관측하며 3개소를 운영하고 있다.
                    </p>
                    <p>
                        - 파고부이는 해양기상부이보다 근해에 설치하여, 연안바다의 복잡한 지형에 의해 국지적으로 서로 달리 나타나는 파고를 관측하여 LTE로 자료를 전송하는 장비이다.<br/>
                        파고부이는 직경 약 70cm의 소형으로 파고, 파주기, 수온 등을 관측하며 5개소를 운영하고 있다.
                    </p>
                    <p>
                        - 선박기상관측장비는 넓은 해역에서 해양기상 실황을 효과적으로 감시하고, 해상 안전사고 감소에 기여하기 위하여 서해중부먼바다의 해역을 운항하고 있는
                        유관기관 선박에 설치한 기상관측장비이다. 선박기상관측장비를 이용해 관측하는 요소는 풍향, 풍속, 기온, 습도, 기압, 수온이다.<br/>
                        수도권기상청은 해양경찰청의 3,000톤급 경비함정과 국제여객선에 자동기상관측장비를 설치하여 8개소를 운영하고 있다.
                    </p>
                    <div className='con4In'>
                        <p> - 등표기상관측장비</p>
                        <span>
                            등표에 자동기상관측장비를 설치하여 풍향, 풍속, 기압, 기온 관측한 자료를
                            위성으로 전송하는 장비로 수도권기상청에서는 서수도에 1개소를 운영하고 있다.
                        </span>
                        <div className='conInimg'>
                            <img src={require("../images/position/po_img6.jpg")} alt="" />
                            <img src={require("../images/position/po_img7.jpg")} alt="" />
                            <img src={require("../images/position/po_img8.jpg")} alt="" />
                            <img src={require("../images/position/po_img9.jpg")} alt="" />
                        </div>
                    </div>
                    <div className='con4In'>
                        <p> - 해양안개관측장비</p>
                        <span>
                            인천·경기 해상에서 선박의 길목이나 안개다발해역에서의 주요 등대, 등표 등 해양구조물에
                            시정계와 영상촬영장비를 설치하여 해상정보를 수집 운영하고 있다.
                        </span>
                        <div className='conInimg'>
                            {/* <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt=""> */}
                        </div>
                    </div>
                </div>
                <div className='eqCon5 con'>
                    <h5>지진관측장비</h5>
                    <p>
                        수도권기상청은 지진관측을 위해 43개소의 지진기상관측장비를 운영하고 있으며, 지진 관측시 유관기관, 언론사 등에게 신속하게 지진정보를 통보하고 있다.<br/>
                        지진장비는 지진의 규모와 위치 등을 분석하기 위해 사용 목적에 따라 그 역할이 조금씩 다르며 지진관측 센서는 지반의 진동 속도를 측정하기 위한<br/>
                        속도계와 진동의 크기를 측정하기 위한 가속도계로 구분된다.
                    </p>
                    <div className='conInimg'>
                            <img src={require("../images/position/po_img10.jpg")} alt="" />
                            <img src={require("../images/position/po_img11.jpg")} alt="" />
                            <img src={require("../images/position/po_img12.jpg")} alt="" />
                    </div>
                </div>
                <div className='eqCon6 con'>
                    <h5>기상관측차량</h5>
                    <p>
                        수도권기상청은 태풍, 호우, 대설 등 위험기상의 대응 강화 및 취약지역의 실시간 관측자료 확보를 위해, 산불 등 재난 발생 현장의 기상관측 지원,<br/>
                        폭염·해무 등 집중관측 및 비교관측 등을 위해 기상관측차량을 도입(`21.1.) 운영하고 있다.
                    </p>
                    <p>기상관측차량은 차량에 기상관측장비를 부착하여 지상관측, 고층관측, 노면관측 등 현장관측을 통한 현장브리핑 지원을 통해 수도권의 위험기상 감시를 선도적으로 수행하고자 한다.</p>
                    <div className='conInimg'>
                        {/* <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt=""> */}
                    </div>
                </div>
            </div>
            <p className='bottom'>담당관리 : 수도권기상청</p>
        </div>  
    );
}

export default Position1;