import React from 'react';

const TaskDisplay = ({weather}) => {
    return (
  
     <div className="output_box">
      <ul>  
        {
         weather.map((pro, ind) => {
            return ( 
            <li key={ind}>
                 <img src={require('../images/notice/'+pro.Image)} alt="" />
                 <dl>
                    <dt>{pro.Name}</dt>
                    <dd>{pro.Price + '원'}</dd>
                    <dd>{pro.Descript}</dd>
                 </dl>
            </li>
            )
         })
        }
      </ul>
     </div>
    )
  }
  
  export default TaskDisplay;