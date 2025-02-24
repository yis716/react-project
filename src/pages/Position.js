import React from 'react';
import {Routes, Route, NavLink, Navigate } from 'react-router-dom';
import * as S from "../Styled";
import '../subcss/Position.css';

import Position1 from "./Position1";
import Position2 from "./Position2";
import Position3 from "./Position3";

function Position() {

    return (
        <div className='position'>
            <S.Wrapper>
                <S.Head>
                    <h2 className='hidden'>주요업무</h2>
                    <S.P>기상·기후서비스</S.P>
                    <ul className='nav'>
                        <li>
                            <NavLink to="/Position/Position1">관측 업무</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Position/Position2">예보 업무</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Position/Position3">기후서비스</NavLink>
                        </li>
                    </ul>
                </S.Head>
            </S.Wrapper>
           <div className='position'>
             <div className='container'>
                 <Routes>
                     <Route exact path="/" element={<Navigate replace to="/Position/Position1" />}></Route>
                     <Route path="/Position1" element={<Position1/>}></Route>
                     <Route path="/Position2" element={<Position2/>}></Route>
                     <Route path="/Position3" element={<Position3/>}></Route>
                 </Routes>
             </div>
           </div>
        </div>
    );
  }

  export default Position;