import { useEffect, useRef,useState } from "react";
import "../subcss/About.css";

const options = {
  center: new window.kakao.maps.LatLng(37.2575101, 126.981907),
  level: 3, //지도 확대비율
};

function About3() {
  
  
  const container = useRef(null);
  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options);
    const markerPosition = options.center;
    const marker = new window.kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

    return () => {};
  }, []);


  return (
    <div className="about3Box">
        


        <p>찾아오시는 길</p>

        <div className="meteormapOuter">
        <div className="meteorMap" style={{width:'100%', height:'500px'}} ref={container}></div>
        </div>
        
        <div className="mapInfo">
          <div className="address">
            <h5>연락처</h5>
            <p>031-8025-5051</p>
            <h5>주소</h5>
            <p>경기도 수원시 권선구 권선로 276 수도권기상청</p>
          </div>
          
          <div className="transport">
            <h5>교통편</h5>
            <div>
              <p><span>수원역</span> → <span>마을</span> 27-2, 27-7 → 수도권 기상청</p>
              <p>수원역 하차 → 수원역 환승센터 → 27-2번, 27-7번 버스승차 → 수원종합공구단지입구 하차 → 횡단보도를 건넌후 우측으로 300m 오시면 수도권기상청이 있습니다.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About3;
