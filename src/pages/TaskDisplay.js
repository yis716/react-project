import React from 'react';

const TaskDisplay = ({weather,local}) => {

    return (
  
     <div className="output_box">

        <h3>{local.toUpperCase()}</h3>
        <table>
          <thead>
            <tr>
               <th scope="col">월별</th>
               <th scope="col">평균기온</th>
               <th scope="col">평균강수량</th>
               <th scope="col">평균풍속</th>
            </tr>

            </thead>
            <tbody>
        {
         weather.map((weather, ind) => {
            return ( 
            <tr key={ind}>
                    <td>{ind+1}월</td>
                    <td>{weather.Temp}</td>
                    <td>{weather.Rain}</td>
                    <td>{weather.Wind}</td>
            </tr>
            )
         })
        }
        </tbody> 
         </table>
     </div>
    )
  }
  
  export default TaskDisplay;