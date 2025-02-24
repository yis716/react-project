import React from 'react';
import * as S from "../Styled";
import '../subcss/Position.css'


function Position3() {

    const inforMationOffer = [
        { title: "기후특성", period: "연초, 연월", type: "수도권의 기온 및 강수량 등 연, 월, 계절별 기후특성 분석", method: "언론사 배포 및 홈페이지 게시 (알림소식 > 보도자료)" },
        { title: "계절기후정보", period: "매 계절 시작 전 달의 말경", type: "수도권의 시군별 평년값, 기후변화 현황과 전망" , method: "지자체 문자 발송" },
        { title: "기후자료집", period: "연 1회(7월경)", type: "수도권의 지점별 기온 및 강수량 상세분석", method: "지자체 문서 발송 및 홈페이지 게시" },
        { title: "기상가뭄정보", period: "봄, 가을 보통가뭄 이상 예상되거나 진행될 때 (주1회)", type: "기상가뭄 및 강수량 현황, 가뭄 예보/경보 등", method: "지자체 문서 발송 및 수도권 기상청 홈페이지 페이스북 게시" }      
    ];

    return (
        <div className='position'>           
            <h3 className='hidden'>기후서비스</h3>
            <div className='commonTit'>
                <p>주요 업무</p>
            </div>    
            <div className='offerInner'>
                <div className='offerHead'>
                    <h4>수도권 기후변화 분석·정보 제공</h4>
                    <p>- 서울·인천·경기도의 기후 통계·분석을 통해 지역 기후변화 현황과 분석정보 제공</p>
                </div>

                <table className="offer">
                    <thead>
                        <tr>
                            <th></th>
                            <th>제공주기</th>
                            <th>내용</th>
                            <th>방법</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inforMationOffer.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.period}</td>
                                <td>{item.type}</td>
                                <td>{item.method}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='offerMid'>
                    <div className='midCon1 con'>
                        <h4>기후예측</h4>
                        <p>- 1개월전망(매주 목요일) 및 3개월전망(매월 23일) 발표</p>
                        <p>- 지자체 등 방재 관계기관, 언론, 대국민 통보</p>
                    </div>
                    <div className='midCon2 con'>
                        <h4>수도권 탄소중립·기후위기 적응대책 수립 지원</h4>
                        <div className='midTxt'>
                            <p>- 수도권 '지자체 기후위기 적응대책 수입 지원'을 위한 선제적 정책 자문과 지원</p>
                            <span>※ 수도권 광역(3곳), 지자체(66곳) 대상 기후위기 적응대책 기본계획 자문 지원</span>
                            <span>※ 기후위기 적응대책 수립 지자체 지원 간담회 개최, 실무자용 매뉴얼 제공 등</span>
                        </div>
                        <p>- 수도권 '지자체 탄소중립녹색성장위원회 정책 자문' 지원 등</p>
                    </div>
                    <div className='midCon3 con'>
                        <h4>수요 맞춤형 지역기상융합서비스</h4>
                        <p>
                            - 기상과 다른 분야를 융합하여 고품질의 기상정보를 제공하는 서비스로써, 환경, 보건, 안전, 농·임업, 도시 등
                            다양한 분야와 융합한 수도권 지역 특성에 최적화한 개발을 통해
                            국민 삶의 질 향상에 기여하고 지자체 등 유관기관 정책 수립을 지원
                        </p>
                        <div className='midTxt'>
                            <p>개발현황</p>
                            <span>(환경) 도시환경기초시설 배출오염물질 영향정보 기상융합 기술 개발('24 ~)</span>
                            <span>(4차산업) 스마트 드론 윈드길 및 도시 열정보 생산 기술 개발('21 ~ '23)</span>
                            <span>(보건) 기상자료 기반 수도권 모기 활동지수 개발('18 ~ '20)</span>
                            <span>(도시) 수도권 상세 기상정보 생산 기술 개선 연구('19)</span>
                        </div>
                    </div>
                    <div className='midCon4 con'>
                        <h4>기후변화과학 이해확산</h4>
                        <p>- 지역 맞춤형 기후변화과학 이해확산 교육 지원(수도권 지역 학생 및 취약계층 대상)</p>
                        <p>- 시민 참여형 프로그램 '우리동네 열지도 그리기' 운영</p>
                        <p>- 지역 축제와 함께하는 기상기후변화 홍보 및 체험부스 운영</p>
                        <p>- 온·오프라인 기상·기후사진 전시회 운영</p>
                    </div>
                    <div className='midCon5 con'>
                        <h4>기후변화과학 이해확산</h4>
                        <p>
                            - 방문, 우편, 전화, 온라인 등 다양한 방법으로 민원을 접수하여 기상청이 보유하고 있는 국내 관측 및 통계자료를 통해
                            기상정보를 제공하거나 특정 지점의 과거 기상사실을 타 기관에 제출할 수 있는 증빙 자료로 활용할 수 있도록
                            기상현상증명을 발급하는 등 맞춤형 민원서비스 제공
                        </p>
                        <div className='midTxt'>
                            <p>온라인 안내</p>
                            <a href='https://minwon.kma.go.kr/main/main.do' target='_blank' title='기상청전자민원 사이트 새 창에 열림'>
                                <span>기상현상증명 : 기상청 전자민원(minwon.kma.go.kr)</span>
                            </a>
                            <a href='https://data.kma.go.kr/cmmn/main.do' target='_blank' title='기상자료개발포털 사이트 새 창에 열림'>
                                <span>기상정보제공 : 기상자료개발포털(data.kma.go.kr)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='bottom'>담당관리 : 수도권기상청</p>
        </div>
    
    );
  }

export default Position3;