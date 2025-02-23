// import { useEffect, useRef } from "react";
// import "../subcss/About.css";

// const options = {
//   center: new window.kakao.maps.LatLng(37.47108703595132, 126.62986651115207),
//   level: 3,
// };

// function About3() {
//   const container = useRef(null);
//     useEffect(() => {
//       const map = new window.kakao.maps.Map(container.current, options);
//       const markerPosition = options.center;
//       const marker = new window.kakao.maps.Marker({ position: markerPosition });
//       marker.setMap(map);
  
//       return () => {};
//     }, []);
  
//     return (
//       <div>
//           <div style={{width:'100%', height:'500px'}} ref={container}></div>
//       </div>
//     );
//   }

// export default About3;
