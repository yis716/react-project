import React, { useEffect, useState } from 'react';
import * as S from "../Styled";
import '../subcss/Position.css';


function Position2() {

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

  const middleArea = [
    { name: "서울 / 인천 / 경기도", local: "서울특별시, 인천광역시 및 경기도 지역(서해5도 제외) ", center: "수도권기상청" },
    { name: "서해중부해상", local: "서해중부 전해상", center: "수도권기상청" },
    { name: "서해북부해상", local: "서해북부 전해상", center: "수도권기상청" }
  ];

  const seaWideArea = [
    { name: "서해북부해상", local: "북위 38도선 이북외 서해역", center: "수도권기상청" },
    { name: "서해중부해상", local: "북위 36도선에서 북위 38도선까지외 서해역", center: "수도권기상청" }
  ];

  const seaLocalArea = [
    { name: "인천 / 경기북부앞바다", local: "앞바다 중 인천광역시(강화군, 서해 5도), 경기도 김포시의 관할 해역", center: "수도권기상청" },
    { name: "인천 / 경기남부앞바다", local: "앞바다 해역 중 인천광역시(강화군 / 서해5도 제외), 경기도 시흥시, 안산시, 평택시, 화성시의 관할 해역", center: "수도권기상청" }
  ];

  const  divisionArea = [
    { name: "앞바다", local: "서해의 백령도 동단, 대청도 동단, 소청도 동단, 울도 서단, 궁시도 서단, 대길산도 서단, 말도 서단을 연결하는 선 안외 해역"},
    { name: "안쪽먼바다", local: "앞바다를 제외한 해역 중 북위 38도, 동경 124도가 만나는 지점과 북위 36도, 동경 125도가 만나는 지점을 직선으로 연결한 선 안쪽 구역"},
    { name: "바깥먼바다", local: "앞바다, 안쪽먼바다를 제외한 해역 중 바깥먼바다의 경계는 영해로부터 200해리(약 370km)까지"}
  ];

  const  specificArea = [
    { name: "인천 / 경기북부 앞바다 중", local: "서해의 백령도 동단, 대청도 동단, 소청도 동단, 울도 서단, 궁시도 서단, 대길산도 서단, 말도 서단을 연결하는 선 안외 해역", center:"수도권기상청"},
    { name: "안쪽먼바다", local: "앞바다를 제외한 해역 중 북위 38도, 동경 124도가 만나는 지점과 북위 36도, 동경 125도가 만나는 지점을 직선으로 연결한 선 안쪽 구역", center:"수도권기상청"},
    { name: "바깥먼바다", local: "앞바다, 안쪽먼바다를 제외한 해역 중 바깥먼바다의 경계는 영해로부터 200해리(약 370km)까지", center:"수도권기상청"}
  ];

    return ( 
      <div className='position'>
        <h3 className = 'hidden'> 예보 업무 </h3> 
        <div className = 'commonTit' >
            <p> 주요 업무 </p> 
            <p> 관할지역 기상예보(동네예보, 중기예보) </p>
            <p>관할지역 기상특보 및 방재 </p>
        </div> 
        <div className="offerInner con">
          <h4>예보 및 특보구역도</h4>
          <div className='areaImg'>
            <img src={require("../images/position/area.jpg")} alt="예보및특보구역도사진" />
          </div>
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
                <tr key={index.item}>
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
        <div className="offerInner con">
          <h4>육상 중기예보 구역</h4>
          <table className="offer">
            <thead>
              <tr>
                <th>구역명칭</th>
                <th>해당 지역 및 해역</th>
                <th>관할관서</th>
              </tr>
            </thead>
            <tbody>
              {middleArea.map((item, index) => (
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
          <h4>해상 광역예보 구역</h4>
          <table className="offer">
            <thead>
              <tr>
                <th>구역명칭</th>
                <th>해당 지역 및 해역</th>
                <th>관할관서</th>
              </tr>
            </thead>
            <tbody>
              {seaWideArea.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.local}</td>
                  <td>{item.center}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="offer">
            <thead>
              <tr>
                <th>구역명칭</th>
                <th>대상지역</th>
              </tr>
            </thead>
            <tbody>  
              {divisionArea.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="offerInner con">
          <h4>해상 국지예보 구역</h4>
          <table className="offer">
            <thead>
              <tr>
                <th>구역명칭</th>
                <th>해당 지역 및 해역</th>
                <th>관할관서</th>
              </tr>
            </thead>
            <tbody>
              {seaLocalArea.map((item, index) => (
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
          <h4>특정관리해역</h4>
          <table className="offer">
            <thead>
              <tr>
                <th>구역명칭</th>
                <th>대상지역</th>
                <th>관할관서</th>
              </tr>
            </thead>
            <tbody>
              {specificArea.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.local}</td>
                  <td>{item.center}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='bottom'>담당관리 : 수도권기상청</p>
      </div>
    );
}

export default Position2;