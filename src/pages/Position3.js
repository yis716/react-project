import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from "../Styled";
import '../subcss/Position.css'


function Position3() {
    return (
        <div>
            <S.Wrapper>
                <S.Head>
                    <h2 className='hidden'>주요업무</h2>
                    <S.P>기상·기후서비스</S.P>
                    <ul className='nav'>
                        <li>
                            <NavLink to="/Position">관측 업무</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Position2">예보 업무</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Position3">기후서비스</NavLink>
                        </li>
                    </ul>
                </S.Head>
            </S.Wrapper>
            <div className='box'>

            </div>
        </div>
    );
  }

export default Position3;