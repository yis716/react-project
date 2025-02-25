import React, { useState, useEffect } from 'react';
// import {Routes, Route, NavLink} from 'react-router-dom';
import * as S from "../Styled";
import '../subcss/Data.css';



function Data3() {

  const [tasks, setTasks] = useState([]);

  const load = () => {
    // const url = "http://openapi.seoul.go.kr:8088/654768775a6e68623538685677674f/json/TbPharmacyOperateInfo/1/5/";
    const url = "/dust3.json";

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
    <div className='data3 wrapper'>
      <div className='data_title'>
        <h4>기상관측정보</h4>
        <p>기상관측정보는 서울시의 기상관측시스템 또는 도로변에 설치된 측정소에서 수집된 황사, 오존, 초미세먼지 등 
          대기오염물질에 대해 일별, 연도별, 관측소별로 정보를 제공하는 데이터셋입니다. 또한, 현재 대기오염상태를 제공하는 
          대기오염전광판의 위치정보를 제공하고 있습니다. 기상관측정보는 시민들에게 서울시 내의 대기오염물질 현황 및 
          대기오염물질 경보발령 현황에 대한 정보를 제공하여 서울 전체 지역에 대한 대기오염물질 정보를 파악하고 
          시민들이 마스크착용 등 각종 예방대책을 마련하여 외부에서 활동할 수 있도록 도움을 줍니다.</p>
        <h4>서울시 미세먼지대피소</h4>
        <p>서울시 미세먼지대피소 현황입니다.<br/>
           대피소의 명칭, 좌표, 상세주소, 면적, 최대수용가능인원의 정보를 제공합니다.</p>
      </div>
      <div className='data-table-container'>
        <table>
          <thead>
            <tr>
              <th scope="col">순번</th>
              <th scope="col">행정동 이름</th>
              <th scope="col">시설 이름</th>
              <th scope="col">주소</th>
              <th scope="col">시설유형</th>
              <th scope="col">이용가능인원</th>
              <th scope="col">평일이용시간</th>
              <th scope="col">주말이용시간</th>
              <th scope="col">회원제 여부</th>
              <th scope="col">X좌표</th>
              <th scope="col">Y좌표</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map((task,ind) => (
          <tr key={ind}>
            <td>{task.sno}</td>
            <td>{task.dong_nm}</td>
            <td>{task.fclt_nm}</td>
            <td>{task.addr}</td>
            <td>{task.fclt_type}</td>
            <td>{task.utztn_psblty_nope}</td>
            <td>{task.wd_utztn_hrm}</td>
            <td>{task.we_utztn_hrm}</td>
            <td>{task.mbsh_yn}</td>
            <td>{task.xcrd}</td>
            <td>{task.ycrd}</td>
          </tr>
          ))}
          </tbody>
        </table>
            {/* : <p>데이터를 불러오는 중...</p>; */}
      </div>
      <p>※ 좌표계 : GRS80-중부원점 <br/>
      ※ 공간정보관리번호, X좌표 최대최소값, Y좌표 최대최소값이 사라지고 X좌표, Y좌표 및 기타 정보가 추가되었습니다. (2024.06.24기준)
      </p>
    </div>
 );
}

  export default Data3;