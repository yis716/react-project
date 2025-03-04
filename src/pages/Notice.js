import React, { useState, useEffect } from 'react'; 
import '../subcss/Notice.css'
import { getDocs, collection} from 'firebase/firestore';  
import { db } from '../firebase'; 
import TaskDisplay from './TaskDisplay';
import { FaSearch } from "react-icons/fa";
import { LineChart } from "@mui/x-charts/LineChart";





function Notice() {

  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const avgLowTemp = [-6.1, -3.9, 1.2, 7.6, 13.1, 18.2, 22.7, 23.8, 18.4, 11.2, 4.3, -2.8]; // 평균 최저 기온
  const avgHighTemp = [1.5, 4.6, 10.4, 17.6, 23.3, 27.3, 29.6, 30.3, 26.4, 20.1, 11.9, 4.2]; // 평균 최고 기온

    const [weather, setWeather] = useState([]); //데이터베이스의 문서들 저장(서울)
    const [weather2, setWeather2] = useState([]); //데이터베이스의 문서들 저장(경기도)
    const [weather3, setWeather3] = useState([]); //데이터베이스의 문서들 저장(강원도)
    const [weather4, setWeather4] = useState([]); //데이터베이스의 문서들 저장(부산)
    const [weather5, setWeather5] = useState([]); //데이터베이스의 문서들 저장(제주도)
    const [weather6, setWeather6] = useState([]); //데이터베이스의 문서들 저장(독도)


    const [searchtext, setSearchtext] = useState(''); //검색 text 저장
    const [searchPrint, setSearchPrint] = useState(''); //검색데이터의 유무체크 true(TaskDisplay ->출력) /  false(검색된 상품이 없습니다! - >출력)
    const [firstLoad, setfirstLoad] = useState(true);  //true(처음) false(한번이라도 검색을 클릭하면..)

    const changeHandler = (e) => {
      setSearchtext(e.target.value);  //검색어 입력처리
    }
  
    const load = (local) => {
      var loadObj =[];
      getDocs(collection(db, local))   //파이어베이스의 sam 컬렉션의 모든 문서를 가져온다
       .then(r => {    //가져온 문서들이 매개변수 r 에 저장된다
          r.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data().todo}`);
            let obj = {Temp:doc.data().Temp , Rain:doc.data().Rain, Wind:doc.data().Wind};  //문서를 객체배열에 담는다
            loadObj =[...loadObj, obj]; //sam 객체배열을 빈 배열에 모두 담아라
          })

          //console.log(loadObj); //객체 배열이 저장된 것을 확인한다
          if(local==="seoul"){
            setWeather(loadObj);  //스테이트 products에 저장한다
          }else if(local==="gyeonggido"){
            setWeather2(loadObj); 
          }
          else if(local==="Gangwondo"){
            setWeather3(loadObj); 
          }
          else if(local===" Busan"){
            setWeather4(loadObj); 
          }
          else if(local==="jeju"){
            setWeather5(loadObj); 
          }
          else if(local===" Dokdo"){
            setWeather6(loadObj); 
          }
         
       });
    }
  
    useEffect(() => {
      load("seoul");  //처음 페이지 로드 시 db에서 데이터 가져오기 
      load("gyeonggido");
      load("Gangwondo");
      load(" Busan");
      load("jeju");
      load(" Dokdo");
    }, []);
  

    const searchHandler = (st,e) => {  //검색 버튼을 클릭시 검색어를 매개변수로 넘겨준다
      e.preventDefault();
      let print;
      if(st){  //검색어가 있으면
          if(st==="seoul" || st==="서울"){
              load("seoul");
              //setNotext(true);
              print =<TaskDisplay weather={weather} local='seoul' /> 
            }else if(st==="gyeonggido" || st==="경기도"){
              load("gyeonggido");
              print =<TaskDisplay weather={weather2} local='gyeonggido' /> 
              //setNotext(true);
            }else if(st==="gangwondo" || st==="강원도"){
              load("Gangwondo");
              print =<TaskDisplay weather={weather3} local='Gangwondo' /> 
              //setNotext(true);
            }else if(st==="busan" || st==="부산"){
              load(" Busan");
              print =<TaskDisplay weather={weather4} local='Busan' /> 
              //setNotext(true);
            }else if(st==="jeju" || st==="제주도"){
              load("jeju");
              print =<TaskDisplay weather={weather5} local='jeju' /> 
              //setNotext(true);
            }else if(st==="dokdo" || st==="독도"){
              load(" Dokdo");
              print =<TaskDisplay weather={weather6} local='Dokdo' /> 
              //setNotext(true);
          }else{
              //setNotext(false);
              print = <p className='message'>검색된 상품이 없습니다!</p>
          }
          setfirstLoad(false);
          setSearchtext('');  //입력어 제거
          setSearchPrint(print);
      }else{  //검색어가 없으면
        alert('검색어를 입력하세요');
      }
    } 
   
    const allHandler = () => {  //All(모두보기)버튼을 클릭하면
      setSearchPrint('');  //검색 시 보이는 부분을 안보이게
      setfirstLoad(true);  //처음 다 보이는 화면 출력
    }

    const enterHandler = (e) => {  //All(모두보기)버튼을 클릭하면
      if(e.keyCode === 13){
        searchHandler(searchtext,e);
      }
    }


 
      const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.9);
    
      useEffect(() => {
        const handleResize = () => {
          setChartWidth(window.innerWidth * 0.9);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
   
   
  
    return (
      <div className="notice">
  
        <div className="weather">
             <h3>기상연구</h3>
              
              <p>"미래를 위한 데이터, 기후를 연구하다."</p>
              <div className='re_tit_img'>
              <p>기후평년값은 '0'으로 끝나는 해의 최근 30년간의 누년평균값으로 정의됩니다. 기후평년값은 현재 기상에 대한 비교와 기후변화 예측에 활용하기 위해 산출하며, 이상기후 평가, 범정부 기후변화 대응정책 수립, 방재 · 건설기준 설정 등 다양한 분야에서 기초자료로 활용되는 주요지표입니다.
              기상청은 세계기상기구(WMO)의 권고에 따라 매 10년 주기로 새로운 기후평년값을 산출하여 제공합니다</p>
              </div>
              <div className='chart-container'>
              <p>대한민국 월별 평균 기온</p>
              <LineChart
                xAxis={[{ data: months, scaleType: "point" }]}
                series={[
                  { data: avgLowTemp, label: "평균 최저 기온 (℃)", color: "skyblue" },
                  { data: avgHighTemp, label: "평균 최고 기온 (℃)", color: "orange" }
                ]}
                width={chartWidth}
                height={400}
              />
              </div>
              <div className="serch_box">
                <form>
                  <input id="title" type="text" placeholder="ex) seoul,서울,경기도,강원도,부산,독도,제주도" value={searchtext} onChange={changeHandler} onKeyDown={(e)=>enterHandler(e)} />
                  <button id="btn" type="button" onClick={(e)=>searchHandler(searchtext,e)}><FaSearch /></button>
                  <button className="btn_all" type="button" onClick={allHandler}>All</button>
                </form>  
              </div>
       
            {
               firstLoad ? 
               <>
                 <TaskDisplay weather={weather} local='seoul' /> 
                 <TaskDisplay weather={weather2} local='gyeonggido' />
                 <TaskDisplay weather={weather3} local='Gangwondo' />
                 <TaskDisplay weather={weather4} local='Busan' />
                 <TaskDisplay weather={weather5} local='jeju' />
                 <TaskDisplay weather={weather6} local='Dokdo' />
               </>
               : null
            }

            {searchPrint}
        </div>      
    
      </div>
    );
  }
  
  export default Notice;