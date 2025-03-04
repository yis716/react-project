import React, { useState } from 'react';
import styles from '../subcss/Service3.module.css';
// import img1 from "../images/service/1.jpg";

function Service3() {
    const subTabs = [
        { name: "사전준비", 
            content: (
                <div>
                    <div className={styles.prepHeader}>
                        <h5>황사 발생 전 <br/>
                        행동요령</h5>
                        <p>황사는 호흡기질환을 유발할 수 있으며, 심하면 사망에 이르게 할 수도 있습니다.
                        황사 피해가 최소화될 수 있도록 가족, 교직원, 지역 주민과 대처합니다.</p>
                    </div>
                    <div className={styles.infoBox}>
                        <ul>
                            <li>일반 가정에서는 황사가 실내로 들어오지 못하도록 창문 등을 점검합니다.</li>
                            <li>외출 시에는 필요한 보호안경, 마스크, 긴소매 의복, 위생용기 등을 준비합니다.</li>
                            <li>노약자, 호흡기 질환자의 경우는 실외활동을 자제합니다.</li>
                        </ul>
                    </div>

                    {/* <div className='imgContainer'>
                            <img src={require("../images/service/1.jpg")} alt="" />
                            <img src={require("../images/service/2.jpg")} alt="" />
                            <img src={require("../images/service/3.jpg")} alt="" />
                    </div> */}
                    <div className={styles.infoBox}>
                        <ul>
                            <li>학교 및 교육기관에서는 교직원과 함께 한파 대비 교육을 실시합니다.</li>
                            <li>기상예보를 청취, 지역 실정에 맞게 휴업 또는 단축수업을 검토합니다.</li>
                            <li>학생들의 비상연락망을 사전에 점검하고, 연락 체계를 유지해 둡니다.</li>
                            <li>학생과 학부모를 대상으로 황사 대비 행동요령을 지도·홍보합니다.</li>
                        </ul>
                        
                    </div>
                    {/* <div className='imgContainer'>
                        <img src={require("../images/service/4.jpg")} alt="" />
                        <img src={require("../images/service/5.jpg")} alt="" />
                    </div>  */}
                    <div className={styles.infoBox}>
                        <ul>
                            <li>축사·시설원예 등 농가에서는 방목장에 있는 가축을 대피시킬 수 있도록 준비합니다.</li>
                            <li>노지에 방치·야적된 사료용 볏짚 등에 비닐 등 피복물품을 준비합니다.</li>
                            <li>동력분무기 등 황사세척용 장비를 점검합니다.</li>
                            <li>비닐하우스, 온실 등 시설물의 출입문과 환기창을 점검합니다.</li>
                        </ul>
                    </div>
                </div>
            ) },
        { name: "발생 중", 
            content: (
                <div>
                    <div className={styles.prepHeader}>
                        <h5>황사 발생 시 <br/> 
                        행동요령</h5>
                        <p>TV, 라디오, 인터넷 등에서 황사가 예보된 때에는 최대한 야외활동을 자제하고 주변의 독거노인 등 건강이 염려되는 
                        분들의 지역 주민들과 함께 안부를 살펴봅니다.</p>
                    </div>
                    <div className={styles.infoBox}>
                        <ul>
                            <span>일반 가정에서는</span>
                            <li>창문을 닫고 가급적 외출을 삼가되, 외출시 보호안경, 마스크를 착용하고 귀가 후에는 손과 발 등을 깨끗이 씻어 줍니다.</li>
                            <li>황사에 노출된 채소, 과일 등 농수산물은 충분히 세척 후 섭취합니다.</li>
                            <li>식품가공·조리 시 손을 철저히 씻고 조리도구, 기구 등 위생관리로 오염되지 않도록 관리하여 주변 환경을 청결히 합니다.</li>
                            <li>노약자, 호흡기 질환자의 경우 실외활동을 금지합니다.</li>
                        </ul>
                    </div>
                    <div className={styles.infoBox}>
                        <ul>
                            <span>학교 등 교육기관에서는</span>
                            <li>어린이집과 각급학교의 실외활동 금지하고 수업 단축 또는 휴업을 합니다. </li>
                            <li>실외학습, 운동경기 등을 중지하거나 연기합니다.</li>
                        </ul>
                    </div>
                    <div className={styles.infoBox}>
                        <ul>
                            <span>축사ㆍ시설원예 등 농가에서는</span>
                            <li>방목장에 있는 가축은 축사 안으로 신속히 대피시켜 황사에 노출되지 않도록 합니다.</li>
                            <li>비닐하우스, 온실 및 축사의 출입문과 창문을 닫고 외부공기와의 접촉을 가능한 적게 합니다.</li>
                            <li>노지에 방치·야적된 사료용 건초, 볏짚 등을 비닐이나 천막으로 덮습니다.</li>
                        </ul>
                    </div>
                </div>
            ) },
        { name: "지난 후", 
            content: (
                <div>
                    <div className={styles.prepHeader}>
                        <h5>황사 지난 후 행동요령</h5>
                        <p>황사가 지나간 후 실내·외 청소를 실시하고 먼지를 제거합니다. 학교 등에서는 민감자(어린이·노인 등)를 귀가 
                        조치하고 축사·시설원예 시설은 소독을 실시합니다.</p>
                    </div>

                    <div className={styles.infoBox}>
                        <ul>
                            <span>일반 가정에서는 ~ 실내공기를 환기해 주고, 황사에 노출되어 오염된 물품은 충분히 세척 후 사용합니다.</span>
                            <span>학교 등 교육기관에서는 ~ 학교 실내외 방역 및 청소하고, 학생들의 건강을 살펴서 감기·안질환자 등은 쉬게 하거나 일찍 귀가시킵니다.</span>
                            <span>축사ㆍ시설원예 등 농가에서는
                                <li>축사, 방목자 사료조 및 가축과 접촉되는 기구류 등은 세척하거나 소독을 실시합니다.</li>
                                <li>황사에 노출된 가축은 몸에 묻은 황사를 털어낸 후 구연산 소독제 등으로 소독해 줍니다.</li>
                                <li>가축 질병의 발생 유무를 관찰하고, 병든 가축이 발견되면 즉시 신고합니다.</li>
                                <li>비닐하우스, 온실 등에 쌓인 황사를 제거해줍니다.</li>
                            </span>
                        </ul>
                    </div>
                </div>
            ) },
        { name: "상식", 
            content:(
                <div className={styles.infoBox}>
                    {/* <ul>
                        <li>황사 발생지
                            <span>우리나라에 영향을 미치는 황사의 주요 발원지는 고비사막·내몽골고원, 중국 북동 사막지역, 황토고원 등입니다. 이 중 서로 인접하는 고비사막·내몽골고원에서 발원하여 직접 우리나라로 이동하는 경우가 50%이며, 고비사막·내몽골고원에서 발원하기는 하지만 중국 북동 사막지역을 거쳐 이동하는 경우가 14%, 황토고원을 거쳐 이동하는 경우가 17%를 차지합니다. 즉, 고비사막·내몽골고원에서 발원하는 경우가 전체의 81%를 차지한다고 볼 수 있습니다. 그 외에 중국 북동 사막지대 및 황토고원에서 직접 발원하여 유입되는 경우가 각각 18%, 1% 정도입니다.</span>
                        </li>
                        <li>황사의 성분 및 영향
                            <span>황사는 토양에서 발생하기 때문에 주요 이온성분은 칼륨, 철분, 알루미늄, 마그네슘 등 토양성분입니다. 최근 미세입자에 의한 부정적 영향이 크게 부각되고 있지만 오염물질과 섞이지 않은 순수한 황사의 경우 알칼리성을 띠고 있어서 황사가 가라앉은 지역의 경우, 토양의 산성화를 예방하는 긍정적 효과도 있습니다.</span>
                        </li>
                    </ul> */}
                    <div>
                        <p>황사의 영향</p>
                        <table className={styles.infoTable}>
                            <thead>
                                <tr>
                                    <th>부정적 영향</th>
                                    <th>긍정적 영향</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <ul>
                                        <li>농작물, 활엽수의 숨쉬는 구멍을 막아 생육에 장애를 일으킴</li>
                                        <li>눈 질환 유발 및 호흡기관으로 깊숙이 침투함</li>
                                        <li>빨래, 음식물 등에 침강·부착</li>
                                        <li>항공기 엔진 손상 및 이·착륙시 시정악화로 인한 사고 발생 가능성</li>
                                        <li>반도체 등 정밀기계 손상 가능성</li>
                                        <li>태양 빛을 차단, 산란시킴(시정 악화)</li>
                                        <li>지구대기의 열 수지에 영향을 미침(복사열 흡수로 냉각효과)</li>
                                        <li>구름 생성을 위한 응결핵 증가</li>
                                    </ul>
                                </td>
                                <td>
                                   <ul>
                                        <li>주로 알카리성 성분이 많이 포함되어 있어 산성비 중화작용</li>
                                        <li>산과 호수에 알칼리성분을 공급하여 토양과 호수의 산성화 방지</li>
                                        <li>서해 등에 풍부한 미네랄 공급 및 정화 작용</li>
                                        <li>해양 플랑크톤에 무기염류 제공(생물학적 생산력 증대)</li>
                                        <li>토양 속 미생물에 의한 무기염 흡수 강화</li>
                                   </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p>황사와 미세먼지 비교</p>
                        <table className={styles.infoTable}>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>황사</th>
                                    <th>미세먼지</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>정의</td>
                                <td>
                                    <ul>
                                        <li>농작물, 활엽수의 숨쉬는 구멍을 막아 생육에 장애를 일으킴</li>
                                        <li>눈 질환 유발 및 호흡기관으로 깊숙이 침투함</li>
                                        <li>빨래, 음식물 등에 침강·부착</li>
                                        <li>항공기 엔진 손상 및 이·착륙시 시정악화로 인한 사고 발생 가능성</li>
                                        <li>반도체 등 정밀기계 손상 가능성</li>
                                        <li>태양 빛을 차단, 산란시킴(시정 악화)</li>
                                        <li>지구대기의 열 수지에 영향을 미침(복사열 흡수로 냉각효과)</li>
                                        <li>구름 생성을 위한 응결핵 증가</li>
                                    </ul>
                                </td>
                                <td>
                                   <ul>
                                        <li>주로 알카리성 성분이 많이 포함되어 있어 산성비 중화작용</li>
                                        <li>산과 호수에 알칼리성분을 공급하여 토양과 호수의 산성화 방지</li>
                                        <li>서해 등에 풍부한 미네랄 공급 및 정화 작용</li>
                                        <li>해양 플랑크톤에 무기염류 제공(생물학적 생산력 증대)</li>
                                        <li>토양 속 미생물에 의한 무기염 흡수 강화</li>
                                   </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>성분</td>
                                <td>
                                    <ul>
                                        <li>중국, 몽골의 사막지대 등에서 불어오는 흙먼지</li>
                                        <li>입자크기에 대한 기준은 없으나 우리나라에 영향을 미치는 황사의 경우 통상 1~10㎛</li>
                                    </ul>
                                </td>
                                <td>
                                   <ul>
                                        <li>직경이 10㎛이하인 먼지로서 10㎛ 이하인 PM-10과 2.5㎛ 이하인 PM-2.5로 구분</li>
                                   </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>영향</td>
                                <td>
                                    <ul>
                                        <li>농작물 등의 생육방해, 반도체 공장 등 조업방해 등의 부정적 영향과 토양의 산성화 예방이라는 긍정적 영향 병존</li>
                                        
                                    </ul>
                                </td>
                                <td>
                                   <ul>
                                        <li>코 점막을 통해 걸러지지 않고 흡입시 폐포까지 직접 침투하여 천식이나 폐질환 유병률, 조기사망률 등을 증가</li>
                                   </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>예보제</td>
                                <td>
                                    <ul>
                                        <li>황사경보 실시</li>
                                    </ul>
                                </td>
                                <td>
                                   <ul>
                                        <li>PM-10, PM-2.5에 대한 농도를 4등급(좋음, 보통, 나쁨, 매우나쁨)으로 예보</li>
                                        <li>미세먼지(PM-10, PM-2.5)에 대한 경보(주의보, 경보) 실시</li>
                                   </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>소관부처</td>
                                <td>
                                    <ul>
                                        <li>기상청</li>
                                    </ul>
                                </td>
                                <td>
                                   <ul>
                                        <li>환경부</li>
                                   </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )}
    ];

    const [selectedSubIndex, setSelectedSubIndex] = useState(0);

    const handleSubTabClick = (index, e) => {
        e.preventDefault();
        setSelectedSubIndex(index);
    };

    return (
        <div className={styles.Service3Container}>
            {/* <h4>한파 행동요령</h4> */}
            <ul className={styles.subTabMenu}>
                {subTabs.map((subItem, index) => (
                    <li key={index}>
                        <button href="#" 
                           className={selectedSubIndex === index ? styles.active : null} 
                           onClick={(e) => handleSubTabClick(index, e)}>
                            {subItem.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>
                <p>{subTabs[selectedSubIndex].content}</p>
            </div>
        </div>
    );
}

export default Service3;
