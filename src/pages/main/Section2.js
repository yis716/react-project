import React, { useState, useEffect } from 'react';
import '../../css/Section2.css';
import img from '../../images/main/sec2_1.png';

function Section2() {
  const [tasks, setTasks] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const load = () => {
    //const url = "http://openAPI.seoul.go.kr:8088/737977415470737431303067715a4841/json/ListAirQualityByDistrictService/1/25/";
    const url = "./dust.json";

    fetch(url)
      .then(result => result.json())
      .then(response => {
        console.log(response.ListAirQualityByDistrictService.row);
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

  
  const taskDisplay = tasks.length > 0 ? (
    <li>
      <ul>
        <li>
          <dl>
            <dt>초미세먼지<br/>(PM-2.5)</dt>
            <dd><strong>{tasks[0].PM25}</strong></dd>
            <dd>㎍/㎥</dd>
          </dl>
          <img src={require('../../images/main/sec2_2.png')} alt="기상청 마스코트1"/>
        </li>
        <li>
          <dl>
            <dt>미세먼지<br/>(PM-10)</dt>
            <dd><strong>{tasks[0].PM10}</strong></dd>
            <dd>㎍/㎥</dd>
          </dl>
          <img src={require('../../images/main/sec2_3.png')} alt="기상청 마스코트2"/>
        </li>
        <li>
          <dl>
            <dt>오존<br/>(O3)</dt>
            <dd><strong>{tasks[0].OZONE}</strong></dd>
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
    </li>
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
      <div className='con_right'>
        <div className='con_title'>
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
