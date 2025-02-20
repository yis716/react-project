import React from 'react';
import * as S from "../Styled";
import '../subcss/Position.css'

function Position1() {

    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'F/xNYoL7HoS1DnF0VAGQlfFQTdbiGdiRVBmIlzwbzUYNjFLjEzGKdIx5oEkP5NX5vdMxEIV6h0uYfiQKyvnlQg=='; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20210628'); /**/
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send('');

    return (
        <div>
            <h3 className='hidden'>관측 업무</h3>
            <div className='commonTit'>
                <p>주요 업무</p>
                <p>관할지역의 기상감시·관측, 기상관측장비의 운영</p>
            </div>
            <div className='conInner'>
                
            </div>
        </div>
    );
  }

export default Position1;