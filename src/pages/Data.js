import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import * as S from "../Styled";
import '../subcss/Data.css';

import Data1 from "./Data1";
import Data2 from "./Data2";
import Data3 from "./Data3";

function Data() {

    // let linkAct = () =>({
    //     if(linkAct){
            
    //     }
    // })

    

    return (
        <div>
            <S.Wrapper>
                <S.Head>
                    <h2 className='hidden'>기상정보</h2>
                    <S.P>기상·기후서비스</S.P>
                    <ul className='nav'>
                        <li>
                            <NavLink to="/Data/Data1" className='link'>미세먼지 수치</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Data/Data2">미세먼지 경보현황</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Data/Data3">미세먼지대피소</NavLink>
                        </li>
                    </ul>
                </S.Head>
            </S.Wrapper>
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={<Data1/>}></Route>
                    <Route path="/Data1" element={<Data1/>}></Route>
                    <Route path="/Data2" element={<Data2/>}></Route>
                    <Route path="/Data3" element={<Data3/>}></Route>
                </Routes>
            </div>
        </div>
    );
  }

  export default Data;




// -------------------------------------------------------------------------------




// import React from 'react';
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import Letter1 from "./Letter1";
// import Letter2 from "./Letter2";
// import "../subcss/Letter.css";


// function Data(props) {
//     const [value, setValue] = React.useState("1");
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//     return (
//       <div className="subnav">
//         <h2>국민참여</h2>
//         <Box sx={{ width: "100%", typography: "body1" }}>
//           <TabContext value={value}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <TabList onChange={handleChange} aria-label="lab API tabs example">
//                 <Tab label={<h3 style={{ color: "#333" }}>기상민원</h3>} value="1" />
//                 <Tab label={<h3 style={{ color: "#333" }}>국민행복제안</h3>} value="2" />
//                 <Tab label={<h3 style={{ color: "#333" }}>민원이용안내</h3>} value="3" />
//               </TabList>
//             </Box>
//             <TabPanel value="1">
//               <Letter1 />
//             </TabPanel>
//             <TabPanel value="2">
//               <Letter2 />
//             </TabPanel>
//             <TabPanel value="3">Item Three</TabPanel>
//           </TabContext>
//         </Box>
//       </div>
//     );
//   }
  
//   export default Data;

