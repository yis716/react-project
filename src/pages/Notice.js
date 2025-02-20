import React, { useState, useEffect } from 'react'; 
import '../subcss/Notice.css'
import { getDocs, collection} from 'firebase/firestore';  
import { db } from '../firebase'; 
import TaskDisplay from './TaskDisplay';
import { FaSearch } from "react-icons/fa";



function Notice() {
    const [weather, setWeather] = useState([]); //데이터베이스의 문서들 저장
    const [searchtext, setSearchtext] = useState(''); //검색 text 저장
    const [notext, setNotext] = useState(true); //검색데이터의 유무체크 true(TaskDisplay ->출력) /  false(검색된 상품이 없습니다! - >출력)
  
    const changeHandler = (e) => {
      setSearchtext(e.target.value);  //검색어 입력처리
    }
  
    const load = () => {
      var loadObj =[];
      getDocs(collection(db, "sam"))   //파이어베이스의 sam 컬렉션의 모든 문서를 가져온다
       .then(r => {    //가져온 문서들이 매개변수 r 에 저장된다
          r.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data().todo}`);
            let obj = {Name:doc.data().Name, Price:doc.data().Price, Descript:doc.data().Descript, Image:doc.data().Image};  //문서를 객체배열에 담는다
            loadObj =[...loadObj, obj]; //sam 객체배열을 빈 배열에 모두 담아라
          })
          //console.log(loadObj); //객체 배열이 저장된 것을 확인한다
          setWeather(loadObj);  //스테이트 products에 저장한다
       });
    }
  
    useEffect(() => {
      load();  //처음 페이지 로드 시 db에서 데이터 가져오기 
    }, []);
  
    const searchHandler = (st) => {  //검색 버튼을 클릭시 검색어를 매개변수로 넘겨준다
      if(st){  //검색어가 있으면
        const filterweather = weather.filter((element)=>element.Name.includes(st));
          if(filterweather.length!==0){ //검색된 문서가 있으면
              setWeather(filterweather);  //검색된 객체를 스테이트 products에 저장한다
              setSearchtext('');  //입력어 제거
              setNotext(true);  //검색된 데이터가 있음
          }else{   //검색된 문서가 없으면
              setNotext(false);//검색된 데이터가 없음
              setSearchtext(''); //입력어 제거
          }
      }else{  //검색어가 없으면
        alert('검색어를 입력하세요');
      }
    } 
   
    const allHandler = () => {  //All(모두보기)버튼을 클릭하면
      load();  //모두보기
      setSearchtext('');//입력어 제거
      setNotext(true);
    }
  
    return (
      <div className="notice">
  
        <div className="weather">
             <h3>기상연구</h3>
              <div className="serch_box">
                <form>
                  <input id="title" type="text" placeholder="검색어를 입력하세요." value={searchtext} onChange={changeHandler} />
                  <button id="btn" type="button" onClick={()=>searchHandler(searchtext)}><FaSearch /></button>
                  <button className="btn_all" type="button" onClick={allHandler}>All</button>
                </form>  
              </div>
              <p>기후평년값은 '0'으로 끝나는 해의 최근 30년간의 누년평균값으로 정의됩니다. 기후평년값은 현재 기상에 대한 비교와 기후변화 예측에 활용하기 위해 산출하며, 이상기후 평가, 범정부 기후변화 대응정책 수립, 방재 · 건설기준 설정 등 다양한 분야에서 기초자료로 활용되는 주요지표입니다.
              기상청은 세계기상기구(WMO)의 권고에 따라 매 10년 주기로 새로운 기후평년값을 산출하여 제공합니다</p>
              {
                 notext? <TaskDisplay weather={weather} /> : <p className='message'>검색된 상품이 없습니다!</p>
              }
        </div>      
    
      </div>
    );
  }
  
  export default Notice;