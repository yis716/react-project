import React, { useState, useEffect } from 'react';
// import {Routes, Route, NavLink} from 'react-router-dom';
import * as S from "../Styled";
import '../subcss/Data.css';

function Data2() {

  const [tasks, setTasks] = useState([]);

  const load = () => {
    // const url = "http://openapi.seoul.go.kr:8088/654768775a6e68623538685677674f/json/TbPharmacyOperateInfo/1/5/";
    const url = "/dust2.json";

    // fetch 방식으로 처리
    fetch(url)
      .then(function(result) {
          return result.json();
      })
      .then(function(response) {
          // console.log(response.YearlyAverageAirQuality.row);
          setTasks(response.DATA);
      })
      .catch(function(error) {
           alert('데이터서버와의 연결이 끊겼습니다.');
       });
      }

       useEffect(() => {
        load();  //처음 페이지 로드 시 db에서 데이터 가져오기 
      }, []);


      // const taskDisplay = tasks.length > 0 ? (
      

  return (
    <div className='data2 wrapper'>
      <div className='data_title'>
        <h4>기상관측정보</h4>
        <p>기상관측정보는 서울시의 기상관측시스템 또는 도로변에 설치된 측정소에서 수집된 황사, 오존, 초미세먼지 등 
          대기오염물질에 대해 일별, 연도별, 관측소별로 정보를 제공하는 데이터셋입니다. 또한, 현재 대기오염상태를 제공하는 
          대기오염전광판의 위치정보를 제공하고 있습니다. 기상관측정보는 시민들에게 서울시 내의 대기오염물질 현황 및 
          대기오염물질 경보발령 현황에 대한 정보를 제공하여 서울 전체 지역에 대한 대기오염물질 정보를 파악하고 
          시민들이 마스크착용 등 각종 예방대책을 마련하여 외부에서 활동할 수 있도록 도움을 줍니다.</p>
        <h4>초미세먼지 연도별 발령정보</h4>
        <p>서울특별시 초미세먼지 연도별 발령정보입니다. <br/>
          주의보예비단계, 주의보, 경보발령 회수, 최대농도를 연도별로 제공합니다.</p>
      </div>
      <div className='data-table-container'>
        <table>
          <thead>
            <tr>
              <th scope="col">년도</th>
              <th scope="col">주의보예비단계발령횟수</th>
              <th scope="col">경보발령일수</th>
              <th scope="col">주의보발령횟수</th>
              <th scope="col">주의보예비단계발령일수</th>
              <th scope="col">최대농도</th>
              <th scope="col">주의보발령일수</th>
              <th scope="col">경보발령횟수</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map((task,ind) => (
          <tr key={ind}>
            <td>{task.year}</td>
            <td>{task.prepar_call_cnt}</td>
            <td>{task.alarm_day}</td>
            <td>{task.gnfd_cnt}</td>
            <td>{task.prepar_call_day}</td>
            <td>{task.max_dnsty}</td>
            <td>{task.gnfd_day}</td>
            <td>{task.alarm_cnt}</td>
          </tr>
          ))}
          </tbody>
        </table>
            {/* : <p>데이터를 불러오는 중...</p>; */}
      </div>
    </div>
 );
}

  export default Data2;