import React from "react";
import '../../css/Section1.css';
// import wea from '../../images/main/sec1-img1.png'
import WeatherDashboard from "./Weatherdashboard";


function Section1() {


    
    return (
        <section className='section1'>
            <div className='secInner'>
                <h3 className='hidden'>한 주의 날씨</h3>
                <div className='innerTxt'>
                    <p data-aos="fade-up" data-aos-duration="700">하늘을 친구처럼, 국민을 하늘처럼</p>
                    <span data-aos="fade-up" data-aos-duration="700">
                        안전은 더하고 재해는 줄여 행복을 나누는 사람들.<br />
                        국민의 일상이 더 행복해질 수 있도록 국민과 동행하는 대한민국 기상청입니다.
                    </span>
                </div>
                
                    
                {/* <figure>
                    <img src={wea} alt='image1' />
                    
                </figure> */}
            </div>
            <WeatherDashboard></WeatherDashboard>
            
        </section>
    );
}



export default Section1;
