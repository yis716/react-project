import React, { useEffect, useState } from 'react';
import * as S from "../Styled";
import '../subcss/Position.css';


function Position2() {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        // 오늘 날짜 갖고오기
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        // const hour = ('0' + date.getHours()).slice(-2);
        // const minute = ('0' + date.getMinutes()).slice(-2);
        const initDate = `${year}${month}${day}`;
        // console.log(initDate);

        // API 호출 및 데이터 처리
        fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=F%2FxNYoL7HoS1DnF0VAGQlfFQTdbiGdiRVBmIlzwbzUYNjFLjEzGKdIx5oEkP5NX5vdMxEIV6h0uYfiQKyvnlQg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${initDate}&base_time=0500&nx=55&ny=127`)
            .then(response => response.json())
            .then(data => {
                const items = data.response.body.items.item;
                const skyValues = {};
                const popValues = {};
                const rehValues = {};
                const tmxValues = {};
                const tmnValues = {};

                // 데이터를 날짜별로 분류
                for (const item of items) {
                    const category = item.category;
                    const fcstValue = item.fcstValue;
                    const fcstTime = item.fcstTime;
                    const fcstDate = item.fcstDate;
          
                    const datetime = fcstDate + fcstTime;

                    switch (category) {
                        case 'SKY':
                          skyValues[datetime] = getSkyDescription(fcstValue);
                          break;
                        case 'POP':
                          popValues[datetime] = fcstValue;
                          break;
                        case 'REH':
                          rehValues[datetime] = fcstValue;
                          break;
                        case 'TMX':
                          tmxValues[datetime] = fcstValue;
                          break;
                        case 'TMN':
                          tmnValues[datetime] = fcstValue;
                          break;
                        default:
                          break;
                    }
                
                    // if (category === 'SKY') {
                    //     const datetime = fcstDate + fcstTime;
                    //     skyValues[datetime] = getSkyDescription(fcstValue);
                    // } else if (category === 'POP') {
                    //     const datetime = fcstDate + fcstTime;
                    //     popValues[datetime] = fcstValue;
                    // } else if (category === 'REH') {
                    //     const datetime = fcstDate + fcstTime;
                    //     rehValues[datetime] = fcstValue;
                    // } else if (category === 'TMX') {
                    //     const datetime = fcstDate + fcstTime;
                    //     tmxValues[datetime] = fcstValue;
                    // } else if (category === 'TMN') {
                    //     const datetime = fcstDate + fcstTime;
                    //     tmnValues[datetime] = fcstValue;
                    // }
                }


                //날짜별 날씨 정보 맵핑
                const dateInfoMap = {};

                for (const datetime in skyValues) {
                    if (datetime.endsWith("0600") || datetime.endsWith("1200") || datetime.endsWith("1800")) {
                      const monthVal = datetime.slice(4, 6);
                      const dayVal = datetime.slice(6, 8);
                      const timeVal = datetime.slice(8, 10);
          
                      const datePart = `${monthVal}월 ${dayVal}일`;
                      const skyInfo = `${timeVal}시 - SKY: ${skyValues[datetime]}`;
                      const popInfo = `강수확률: ${popValues[datetime]}%`;
                      const rehInfo = `습도: ${rehValues[datetime]}%`;
                      const tmxInfo = `최고기온: ${tmxValues[datetime]}°C`;
                      const tmnInfo = `최저기온: ${tmnValues[datetime]}°C`;

                    if (!dateInfoMap[datePart]) {
                        dateInfoMap[datePart] = [];
                    }

                    // dateInfoMap[datePart].push(skyInfo);
                    // dateInfoMap[datePart].push(popInfo);
                    // dateInfoMap[datePart].push(rehInfo);
                    // dateInfoMap[datePart].push(tmxInfo);
                    // dateInfoMap[datePart].push(tmnInfo);
                    dateInfoMap[datePart].push(skyInfo, popInfo, rehInfo, tmxInfo, tmnInfo);

                  }
                }

                //state로 날씨 데이터 저장.
                setWeatherData(dateInfoMap);
                // console.log(dateInfoMap);
            });
    }, []); // 빈 배열은 컴포넌트가 로드될 때 한 번만 실행

    function getSkyDescription(skyValue) {
        switch (skyValue) {
          case "1":
            return "맑음";
          case "3":
            return "구름많음";
          case "4":
            return "흐림";
          default:
            return "알 수 없음";
        }
    };

  const wideArea = [
    { name: "서울 / 인천 / 경기도", local: "서울특별시, 인천광역시(서해5도 제외) 및 경기도 지역", center: "수도권기상청" },
    { name: "서해 5도", local: "인천광역시 중 옹진군 백력동 / 대청도 / 소청도 / 연평도, 강화군 우도", center: "수도권기상청" }
  ];   
  
  const localArea = [
    { name: "서울 동남권", local: "강동구, 송파구, 강남구, 서초구", center: "수도권기상청" },
    { name: "서울 서남권", local: "강서구, 양천구, 구로구, 영등포구, 동작구, 관악구, 금천구", center: "수도권기상청" },
    { name: "서울 서북권", local: "은평구, 종로구, 마포구, 서대문구, 중구, 용산구", center: "수도권기상청" },
    { name: "서울 동북권", local: "도봉구, 노원구, 강북구, 성북구, 동대문구, 중랑구, 성동구, 광진구", center: "수도권기상청" },
    { name: "수원시", local: "경기도 수원시", center: "수도권기상청" },
    { name: "용인시", local: "경기도 용인시", center: "수도권기상청" },
    { name: "안성시", local: "경기도 안성시", center: "수도권기상청" },
    { name: "화성시", local: "경기도 화성시", center: "수도권기상청" },
    { name: "오산시", local: "경기도 오산시", center: "수도권기상청" },
    { name: "평택시", local: "경기도 평택시", center: "수도권기상청" },
    { name: "과천시", local: "경기도 과천시", center: "수도권기상청" },
    { name: "군포시", local: "경기도 군포시", center: "수도권기상청" },
    { name: "안양시", local: "경기도 안양시", center: "수도권기상청" },
    { name: "의왕시", local: "경기도 의왕시", center: "수도권기상청" },
    { name: "안산시", local: "경기도 안산시", center: "수도권기상청" },
    { name: "성남시", local: "경기도 성남시", center: "수도권기상청" },
    { name: "광명시", local: "경기도 광명시", center: "수도권기상청" },
    { name: "시흥시", local: "경기도 시흥시", center: "수도권기상청" },
    { name: "김포시", local: "경기도 김포시", center: "수도권기상청" },
    { name: "부천시", local: "경기도 부천시", center: "수도권기상청" },
    { name: "이천시", local: "경기도 이천시", center: "수도권기상청" },
    { name: "여주시", local: "경기도 여주시", center: "수도권기상청" },
    { name: "광주시", local: "경기도 광주시", center: "수도권기상청" },
    { name: "양평군", local: "경기도 양평군", center: "수도권기상청" },
    { name: "하남시", local: "경기도 하남시", center: "수도권기상청" },
    { name: "파주시", local: "경기도 파주시", center: "수도권기상청" },
    { name: "고양시", local: "경기도 고양시", center: "수도권기상청" },
    { name: "양주시", local: "경기도 양주시", center: "수도권기상청" },
    { name: "의정부시", local: "경기도 의정부시", center: "수도권기상청" },
    { name: "동두천시", local: "경기도 동두천시", center: "수도권기상청" },
    { name: "포천시", local: "경기도 포천시", center: "수도권기상청" },
    { name: "연천군", local: "경기도 연천군", center: "수도권기상청" },
    { name: "가평군", local: "경기도 가평군", center: "수도권기상청" },
    { name: "구리시", local: "경기도 구리시", center: "수도권기상청" },
    { name: "남양주시", local: "경기도 남양주시", center: "수도권기상청" },
    { name: "인천광역시", local: "인천광역시 (강화군, 옹진군 제외)", center: "인천기상대" },
    { name: "강화군", local: "인천광역시 중 강화군 (우도제외)", center: "인천기상대" },
    { name: "옹진군", local: "인천광역시 중 옹진군 (백령도, 대청도, 소청도, 연평도 제외)", center: "인천기상대" },
    { name: "서해5도", local: "인천광역시 중 옹진군 (백령도, 대청도, 소청도, 연평도, 강화군 우도)", center: "백령도(관)" }
  ];

    return ( 
      <div className='position'>
        <h3 className = 'hidden'> 예보 업무 </h3> 
        <div className = 'commonTit' >
            <p> 주요 업무 </p> 
            <p> 관할지역 기상예보(동네예보, 중기예보) </p>
            <p>관할지역 기상특보 및 방재 </p>
        </div> 
        <div className = 'outBox'>
          <p> 오늘의 날씨 </p>
          <div className = 'dateInfo con'> 
            {/* 날씨 정보를 여기에 렌더링할 것입니다. */} 
            <ul className='infoIneer'>
                {Object.keys(weatherData).map(date => (
                  <li key={date}>
                      <p className='date'>{date}</p>
                      <ul>
                          {weatherData[date].map((info, index) => (
                              <li key={index}>{info}</li>
                          ))}
                      </ul>
                  </li>
                ))}    
            </ul> 
          </div>
          <div className="offerInner con">
            <h4>육상 광역예보 구역</h4>
            <table className="offer">
              <thead>
                <tr>
                  <th>구역명칭</th>
                  <th>대상지역</th>
                  <th>관할예보관서</th>
                </tr>
              </thead>
              <tbody>
                {wideArea.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.local}</td>
                    <td>{item.center}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="offerInner con">
            <h4>육상 국지예보 구역</h4>
            <table className="offer">
              <thead>
                <tr>
                  <th>구역명칭</th>
                  <th>대상지역</th>
                  <th>관할예보관서</th>
                </tr>
              </thead>
              <tbody>
                {localArea.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.local}</td>
                    <td>{item.center}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            {/* <p className = "result"> 오늘의 날씨 </p> */}
        </div>
        <p className='bottom'>담당관리 : 수도권기상청</p>
      </div>
    );
}

export default Position2;