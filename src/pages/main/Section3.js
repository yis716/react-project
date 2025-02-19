import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { HiChevronRight } from "react-icons/hi";
import pic1 from '../../images/main/sec3-img1.jpg'
import pic2 from '../../images/main/sec3-img2.jpg'
import pic3 from '../../images/main/sec3-img3.jpg'
import '../../css/Section3.css';

// Swiper에 Navigation 기능을 추가
SwiperCore.use([Navigation]);

function Section3() {
    // 상태를 관리하여 각 슬라이드에 대한 내용 변경
    const [slideContent, setSlideContent] = useState(0);

    const contentList = [
        {
            title: "관측",
            description: "기상청은 지상기상관측을 비롯하여 고층, 해양, 레이더, 항공, 지진 등 분류별 기상 관측을 수행하여, 신속한 정보제공을 통해 관련 재난으로부터 국민의 생명과 재산을 지키는데 최선을 다하고 있습니다."
        },
        {
            title: "예보",
            description: "기상예보에는 초단기, 단기, 중기, 장기예보 등 일기예보와 주의보, 경보 등 기상특보가 있으며, 기상청에서 발표하는 각종 기상정보는 언론기관과 중앙재난안전대책본부 등 방재관련 유관기관에 FAX, 이메일, SMS, 스마트 통보 등을 통해 실시간으로 제공하고 있습니다."
        },
        {
            title: "기후서비스",
            description: "지역 기후자료의 통계 및 관리, 지역 장기예보 생산 및 제공을 하며, 지역 기후변화 및 기후정보의 생산과 보급 및 기상지식을 보급하고, 기상정보를 맞춤형으로 제공하는 것을 넘어 지역기상기후정보를 타 분야 정보와 연계하여 융합정보를 개발합니다."
        }
    ];

    // 슬라이드 변경 시 호출될 함수
    const handleSlideChange = (swiper) => {
        // 현재 active index에 맞게 상태를 업데이트하기
        setSlideContent(swiper.activeIndex); 
    };

    return (
        <section className='section3'>
            <div className='secInner'>
                <div className='innerTxt'>
                    <div className='secTitle'>
                        <h3 className='hidden'>주요업무</h3>
                        <span>대한민국 기상청이 제공하는</span>
                        <p>기상·기후서비스</p>
                    </div>
                    <ul className='innerList'>
                        <li className='list'>
                            <dl>
                                <dt>{contentList[slideContent % contentList.length].title}</dt>  {/* length(방 개수) */}
                                <dd>{contentList[slideContent % contentList.length].description}</dd>
                            </dl>
                            <a href='/'>
                                <span>자세히보기
                                    <span><HiChevronRight className='chevronRight' /></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="secSwip">
                    <Swiper
                        slidesPerView={2}
                        breakpoints={{
                            1024:{
                                slidesPerView:2             
                            },
                            768:{
                                slidesPerView:2                 
                            },
                            640:{
                                slidesPerView:1             
                            },
                            480:{
                                slidesPerView:1             
                            },
                            320:{
                                slidesPerView:1             
                            }
                        }}    
                        spaceBetween={20}
                        loop={true} 
                        navigation={{ clickable: true }}
                        onSlideChange={handleSlideChange} // 슬라이드 변경 시 핸들러 호출
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={pic1} alt='image1' /></SwiperSlide>
                        <SwiperSlide><img src={pic2} alt='image2' /></SwiperSlide>
                        <SwiperSlide><img src={pic3} alt='image3' /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Section3;
