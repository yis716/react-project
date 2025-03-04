import { useEffect, useState, useRef } from 'react';
// import { useEffect, useState } from 'react';
import '../../css/Section2.css';
import img from '../../images/main/sec2_1.png';


// 카운터 동작
function Count({end,start,duration}) {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;  //1초 -> 1000
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
      let currentNumber = start;  // 0
      const counter = setInterval(() => {
        const progress = ++currentNumber / totalFrame;  //최종값 까지 증가하면
        setCount(Math.round(end * progress));

        if (progress === 1) {
          clearInterval(counter);
        }
      }, frameRate);
    }, [end, frameRate, start, totalFrame]);

  return (
      <span>{count}</span>
  );
}


// function Service() {

//  const [upDown, setUpDown] = useState(false); //false(위)/true(아래)
//  let offsetTop; //박스의 위쪽 거리
//  const divRef = useRef(null);

//  const handleScroll = () => {
//     //console.log(offsetTop);
//     if (window.scrollY >= offsetTop-600){
//        setUpDown(true);
//     }else{
//        setUpDown(false);
//     } 
//   };

// useEffect(() => {
//   // window에 scroll 이벤트를 넣는다.
//   window.addEventListener('scroll', handleScroll);
//   // 페이지를 벗어날 때 이벤트를 제거한다.
//   if (divRef.current) {
//     offsetTop = divRef.current.offsetTop;
//     console.log(offsetTop);
//   }

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

//   return (
//       <div className="service">
//         <h2>Service</h2> 
//         <div style={{width:'100%', height:'700px', background:'green'}}>
//              콘텐츠
//         </div>
//         <div ref={divRef} style={{height:'500px', background:'pink', display:'flex', gap:'30px'}}>
//             <p style={{'fontSize':'3rem', 'color':'#000'}}>{upDown ? <Count end="100" start="0" duration="2000" /> : 0}</p>
//             <p style={{'fontSize':'3rem', 'color':'#000'}}>{upDown ? <Count end="300" start="0" duration="2000" /> : 0}</p>
//             <p style={{'fontSize':'3rem', 'color':'#000'}}>0.0{upDown ? <Count end="417" start="0" duration="3000" /> : 0}</p>
//         </div>
//       </div>
//   );
// }




// api, json 불러오기
function Section2() {
  const [tasks, setTasks] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const load = () => {
    //const url = "http://openAPI.seoul.go.kr:8088/737977415470737431303067715a4841/json/ListAirQualityByDistrictService/1/25/";
    const url = "./dust.json";

    fetch(url)
      .then(result => result.json())
      .then(response => {
        // console.log(response.ListAirQualityByDistrictService.row);
        setTasks(response.ListAirQualityByDistrictService.row);
      })
      .catch(() => {
        alert('데이터서버와의 연결이 끊겼습니다.');
      });
  };

  
  // const loadDistrictData = () => {
  //   const districtUrls = {
  //     'Mapo': 'https://www.dustrank.com/air/air_dong_detail.php?addcode=11470102',
  //     'Jongno': 'https://www.dustrank.com/air/air_dong_detail.php?addcode=11470101',
  //     'Yangcheon': 'https://www.dustrank.com/air/air_dong_detail.php?addcode=11470103'
  //   };

  //   Promise.all(Object.entries(districtUrls).map(([district, url]) =>
  //     fetch(url)
  //       .then(response => response.text())
  //       .then(data => {
  //         const pm25 = data.match(/PM-2.5<\/td><td>(\d+)<\/td>/)[1];
  //         const pm10 = data.match(/PM-10<\/td><td>(\d+)<\/td>/)[1];
  //         return { district, pm25, pm10 };
  //       })
  //   )).then(data => {
  //     const districtData = data.reduce((acc, { district, pm25, pm10 }) => {
  //       acc[district] = { pm25, pm10 };
  //       return acc;
  //     }, {});
  //     setDistrictData(districtData);
  //   });
  // };

  
  useEffect(() => {
    load();  // 처음 페이지 로드 시 db에서 데이터 가져오기 
  }, []);





  const [upDown, setUpDown] = useState(false); //false(위)/true(아래)
  let offsetTop; //박스의 위쪽 거리
  const divRef = useRef(null);

 const handleScroll = () => {
    // console.log(offsetTop);
    if (window.scrollY >= offsetTop-400){
       setUpDown(true);
    }else{
       setUpDown(false);
    } 
  };
   

  useEffect(() => {
  // window에 scroll 이벤트를 넣는다.
  window.addEventListener('scroll', handleScroll);
  // 페이지를 벗어날 때 이벤트를 제거한다.
  if (divRef.current) {
    offsetTop = divRef.current.offsetTop;
    console.log(offsetTop);
  }
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  const taskDisplay = tasks.length > 0 ? (
          <ul>
            <li>
              <dl>
                <dt>초미세먼지<br/>(PM-2.5)</dt>
                <dd><strong>
                {upDown ? <Count end={tasks[0].PM25} start="0" duration="1200" /> : 0}
                  {/* {tasks[0].PM25}  */}
                </strong></dd>
                <dd>㎍/㎥</dd>
              </dl>
              <img src={require('../../images/main/sec2_2.png')} alt="기상청 마스코트1"/>
            </li>
            <li>
              <dl>
                <dt>미세먼지<br/>(PM-10)</dt>
                <dd><strong>
                {upDown ? <Count end= {tasks[0].PM10} start="0" duration="1200" /> : 0}
                  {/* {tasks[0].PM10} */}
                </strong></dd>
                <dd>㎍/㎥</dd>
              </dl>
              <img src={require('../../images/main/sec2_3.png')} alt="기상청 마스코트2"/>
            </li>
            <li>
              <dl>
                <dt>오존<br/>(O3)</dt>
                <dd><strong>0.0
                {upDown ? <Count end="41" start="0" duration="1200" /> : 0}
                  {/* {tasks[0].OZONE} */}
                </strong></dd>
                <dd>㎍/㎥</dd>
              </dl>
              <img src={require('../../images/main/sec2_4.png')} alt="기상청 마스코트3"/>
            </li>
        {/* <li>
          {Object.entries(districtData).map(([district, data]) => (
            <div key={district}>
              <h5>{district}</h5>
              <p>초미세먼지 (PM-2.5): {data.pm25} ㎍/㎥</p>
              <p>미세먼지 (PM-10): {data.pm10} ㎍/㎥</p>
            </div>
          ))}
        </li> */}
      </ul>
  
  ) : <p>데이터를 불러오는 중...</p>;

  const districtPositions = {
    '종로구': { left: '47%', top: '40%' },
    '중구': { left: '52%', top: '50%' },
    '용산구': { left: '49%', top: '60%' },
    '성동구': { left: '63%', top: '53%' },
    '광진구': { left: '74%', top: '55%' },
    '동대문구': { left: '65%', top: '42%' },
    '중랑구': { left: '75%', top: '37%' },
    '성북구': { left: '57%', top: '35%' },
    '강북구': { left: '56%', top: '21%' },
    '도봉구': { left: '61.5%', top: '11%' },
    '노원구': { left: '71%', top: '15%' },
    '은평구': { left: '35%', top: '28%' },
    '서대문구': { left: '37%', top: '44%' },
    '마포구': { left: '32%', top: '52%' },
    '양천구': { left: '19%', top: '64%' },
    '강서구': { left: '10%', top: '48%' },
    '구로구': { left: '19%', top: '72%' },
    '금천구': { left: '30%', top: '86%' },
    '영등포구': { left: '30%', top: '64%' },
    '동작구': { left: '41%', top: '70%' },
    '관악구': { left: '41%', top: '84%' },
    '서초구': { left: '56%', top: '78%' },
    '강남구': { left: '68%', top: '75%' },
    '송파구': { left: '81%', top: '70%' },
    '강동구': { left: '86%', top: '55%' },

    // 필요한 만큼 추가
  };

  return (
    <section className='section2'>
      <div className='con_left'>
      <img src={img} alt="서울시 지도" className='map-image' />
        {tasks.map((task, index) => (
          <div 
          key={index} 
          className={`tooltip ${selectedDistrict === task.MSRSTENAME ? 'active' : ''}`}
          style={{
            left: districtPositions[task.MSRSTENAME]?.left || `${index * 50 + 100}px`,
            top: districtPositions[task.MSRSTENAME]?.top || `${index * 20 + 50}px`,
            // backgroundColor: selectedDistrict === task.MSRSTENAME ? 'red' : 'rgba(0, 0, 0, 0.7)' // 개별 스타일 추가
          }}
          onMouseEnter={() => setSelectedDistrict(task.MSRSTENAME)}
            onMouseLeave={() => setSelectedDistrict(null)}
            onClick={() => setSelectedDistrict(prev => prev === task.MSRSTENAME ? null : task.MSRSTENAME)}
          >
            <h5>{task.MSRSTENAME}</h5>
            {selectedDistrict === task.MSRSTENAME && (
              <div className="tooltip-content">
                <p>{task.PM25} | {task.PM10}</p>
                {/* <p></p>
                <p> {task.OZONE}</p> */}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='con_right' ref={divRef}>
        <div className='con_title' data-aos="zoom-in-left" data-aos-duration="700">
          <p>대한민국 기상청에서 만나보는</p>
          <h3>미세먼지 정보 현황</h3>
          <a href='#'>자세히 보기 {">"}</a>
        </div>
        <div className='count'>
          {taskDisplay}
        </div>
      </div>
    </section>
  );
}



export default Section2;








// function Section2() {
//   const [tasks, setTasks] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState(null);

//   const load = () => {
//     //const url = "http://openAPI.seoul.go.kr:8088/737977415470737431303067715a4841/json/ListAirQualityByDistrictService/1/25/";
//     const url = "./dust.json";

//     fetch(url)
//       .then(result => result.json())
//       .then(response => {
//         console.log(response.ListAirQualityByDistrictService.row);
//         setTasks(response.ListAirQualityByDistrictService.row);
//       })
//       .catch(() => {
//         alert('데이터서버와의 연결이 끊겼습니다.');
//       });
//   };

  
//   // const loadDistrictData = () => {
//   //   const districtUrls = {
//   //     'Mapo': 'https://www.dustrank.com/air/air_dong_detail.php?addcode=11470102',
//   //     'Jongno': 'https://www.dustrank.com/air/air_dong_detail.php?addcode=11470101',
//   //     'Yangcheon': 'https://www.dustrank.com/air/air_dong_detail.php?addcode=11470103'
//   //   };

//   //   Promise.all(Object.entries(districtUrls).map(([district, url]) =>
//   //     fetch(url)
//   //       .then(response => response.text())
//   //       .then(data => {
//   //         const pm25 = data.match(/PM-2.5<\/td><td>(\d+)<\/td>/)[1];
//   //         const pm10 = data.match(/PM-10<\/td><td>(\d+)<\/td>/)[1];
//   //         return { district, pm25, pm10 };
//   //       })
//   //   )).then(data => {
//   //     const districtData = data.reduce((acc, { district, pm25, pm10 }) => {
//   //       acc[district] = { pm25, pm10 };
//   //       return acc;
//   //     }, {});
//   //     setDistrictData(districtData);
//   //   });
//   // };

//   useEffect(() => {
//     load();  // 처음 페이지 로드 시 db에서 데이터 가져오기 
//   }, []);

  
//   const taskDisplay = tasks.length > 0 ? (
//           <ul>
//         <li>
//           <dl>
//             <dt>초미세먼지<br/>(PM-2.5)</dt>
//             <dd><strong>
//               {tasks[0].PM25} 
//             </strong></dd>
//             <dd>㎍/㎥</dd>
//           </dl>
//           <img src={require('../../images/main/sec2_2.png')} alt="기상청 마스코트1"/>
//         </li>
//         <li>
//           <dl>
//             <dt>미세먼지<br/>(PM-10)</dt>
//             <dd><strong>
//               {tasks[0].PM10}
//             </strong></dd>
//             <dd>㎍/㎥</dd>
//           </dl>
//           <img src={require('../../images/main/sec2_3.png')} alt="기상청 마스코트2"/>
//         </li>
//         <li>
//           <dl>
//             <dt>오존<br/>(O3)</dt>
//             <dd><strong>
//               {tasks[0].OZONE}
//             </strong></dd>
//             <dd>㎍/㎥</dd>
//           </dl>
//           <img src={require('../../images/main/sec2_4.png')} alt="기상청 마스코트3"/>
//         </li>
//         {/* <li>
//           {Object.entries(districtData).map(([district, data]) => (
//             <div key={district}>
//               <h5>{district}</h5>
//               <p>초미세먼지 (PM-2.5): {data.pm25} ㎍/㎥</p>
//               <p>미세먼지 (PM-10): {data.pm10} ㎍/㎥</p>
//             </div>
//           ))}
//         </li> */}
//       </ul>
  
//   ) : <p>데이터를 불러오는 중...</p>;

//   const districtPositions = {
//     '종로구': { left: '47%', top: '40%' },
//     '중구': { left: '52%', top: '50%' },
//     '용산구': { left: '49%', top: '60%' },
//     '성동구': { left: '63%', top: '53%' },
//     '광진구': { left: '74%', top: '55%' },
//     '동대문구': { left: '65%', top: '42%' },
//     '중랑구': { left: '75%', top: '37%' },
//     '성북구': { left: '57%', top: '35%' },
//     '강북구': { left: '56%', top: '21%' },
//     '도봉구': { left: '61.5%', top: '11%' },
//     '노원구': { left: '71%', top: '15%' },
//     '은평구': { left: '35%', top: '28%' },
//     '서대문구': { left: '37%', top: '44%' },
//     '마포구': { left: '32%', top: '52%' },
//     '양천구': { left: '19%', top: '64%' },
//     '강서구': { left: '10%', top: '48%' },
//     '구로구': { left: '19%', top: '72%' },
//     '금천구': { left: '30%', top: '86%' },
//     '영등포구': { left: '30%', top: '64%' },
//     '동작구': { left: '41%', top: '70%' },
//     '관악구': { left: '41%', top: '84%' },
//     '서초구': { left: '56%', top: '78%' },
//     '강남구': { left: '68%', top: '75%' },
//     '송파구': { left: '81%', top: '70%' },
//     '강동구': { left: '86%', top: '55%' },

//     // 필요한 만큼 추가
//   };

//   return (
//     <section className='section2'>
//       <div className='con_left'>
//       <img src={img} alt="서울시 지도" className='map-image' />
//         {tasks.map((task, index) => (
//           <div 
//           key={index} 
//           className={`tooltip ${selectedDistrict === task.MSRSTENAME ? 'active' : ''}`}
//           style={{
//             left: districtPositions[task.MSRSTENAME]?.left || `${index * 50 + 100}px`,
//             top: districtPositions[task.MSRSTENAME]?.top || `${index * 20 + 50}px`,
//             // backgroundColor: selectedDistrict === task.MSRSTENAME ? 'red' : 'rgba(0, 0, 0, 0.7)' // 개별 스타일 추가
//           }}
//           onMouseEnter={() => setSelectedDistrict(task.MSRSTENAME)}
//             onMouseLeave={() => setSelectedDistrict(null)}
//             onClick={() => setSelectedDistrict(prev => prev === task.MSRSTENAME ? null : task.MSRSTENAME)}
//           >
//             <h5>{task.MSRSTENAME}</h5>
//             {selectedDistrict === task.MSRSTENAME && (
//               <div className="tooltip-content">
//                 <p>{task.PM25} | {task.PM10}</p>
//                 {/* <p></p>
//                 <p> {task.OZONE}</p> */}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className='con_right'>
//         <div className='con_title'>
//           <p>대한민국 기상청에서 만나보는</p>
//           <h3>미세먼지 정보 현황</h3>
//           <a href='#'>자세히 보기 {">"}</a>
//         </div>
//         <div className='count'>
//           {taskDisplay}
//         </div>
//       </div>
//     </section>
//   );
// }
