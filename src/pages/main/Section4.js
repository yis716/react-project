import React, {useState} from 'react';
import '../../css/Section4.css';
import styles from '../../css/style.module.css'


  
function Section4() {
    const data = [
      {
        id: 0,
        title: "#한파",
        heading: '#평상시 행동요령',
        description: `한파는 저체온증, 동상, 동창 등의 한랭질환을 유발할 수 있으며, 심하면 사망에 이르게 됩니다. 
        뿐만 아니라 농·축·수산 분야의 재산피해와 전력 급증으로 생활불편을 초래하기도 합니다. 
        겨울철에는 다음 사항을 숙지하여 가족이나 이웃과 함께 피해를 사전에 예방할 수 있도록 미리 준비합니다.

        TV, 라디오, 인터넷 등에서 한파가 예보된 때에는 최대한 야외활동을 자제하고 주변의 독거노인 등 건강이 염려되는 분들의 안부를 살펴봅니다.`,
        image: require('../../images/main/sec4-img0.jpg')
      },
      {
        id: 1,
        title: "#폭염",
        heading: '#평상시 행동요령',
        description: `폭염은 열사병, 열경련 등의 온열질환을 유발할 수 있으며, 심하면 사망에 이르게 됩니다. 
        뿐만 아니라, 가축·수산물 폐사 등의 재산피해와 여름철 전력 급증 등으로 생활의 불편을 초래하기도 합니다. 더위가 잦은 여름철에는 다음 사항을 숙지하여 피해를 사전에 예방할 수 있도록 미리 준비합니다. 
        
        TV, 라디오, 인터넷 등에서 폭염이 예보된 때에는 최대한 야외활동을 자제하고 주변의 독거노인 등 건강이 염려되는 분들의 안부를 살펴봅니다.`,
        image: require('../../images/main/sec4-img1.jpg')
      },
      {
        id: 2,
        title: "#황사",
        heading: '#황사 발생 전',
        description: `황사는 호흡기질환을 유발할 수 있으며, 심하면 사망에 이르게 할수도 있습니다. 
        황사 피해가 최소화될 수 있도록 가족, 교직원, 지역 주민과 대처합니다. 
        
        TV, 라디오, 인터넷 등에서 황사가 예보된 때에는 최대한 야외활동을 자제하고 주변의 독거노인 등 건강이 염려되는 분들의 지역 주민들과 함께 안부를 살펴봅니다.`,
        image: require('../../images/main/sec4-img2.jpg')
      },
      {
        id: 3,
        title: "#폭우",
        heading: '#핵심 행동요령',
        description: `호우는 하천 범람, 산사태, 침수 등을 통해 인명피해와 재산피해를 발생시킬 수 있기 때문에 가족이나 이웃과 함께 대비합니다. 

        TV, 라디오, 인터넷 등에서 호우특보가 예보된 때에는 거주 지역에 영향을 주는 시기를 미리 파악하고, 
        호우가 발생하기 전에 가족이나 지역주민과 함께 피해를 예방하기 위해 필요한 조치를 합니다.`,
        image: require('../../images/main/sec4-img3.jpg')
      }
    ];
    const [index, setIndex] = useState(0);
  
    const indexChange = (id, e) => {
      e.preventDefault();
      //console.log(id,e);
      setIndex(id);
    };
    const selectedItem = data.find(item => item.id === index);
  
    return (
      <section className={styles.tabContainer}
      style={{
        backgroundImage: `url(${selectedItem.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //transition: 'background-image 0.5s ease-in-out' // 부드럽게 변경
    }}
      >
        {/* <img className='backImg' src={ require('../../images/main/sec4-img1.jpg')} alt=' /> */}
          <div>
            <p>국민의 안전을 지키기 위한</p>
            <h3>국민 행동 요령</h3>
            
            <ul className={[styles.tabMenu, styles.section4].join(" ")}> 
              {
                  data.map(item => (
                      <li key={item.id}>
                          <a href="#" 
                          className={index === item.id ? styles.active : null}
                          onClick={(e) => indexChange(item.id, e) }>
                          {item.title}
                          </a>
                      </li>
                      
                  ))
              }
            </ul>
            <a className="mor" href="/Service">
              자세히보기 {">"}
            </a>
          </div>
        
          
             
        {/* <div className={styles.tabContent}>
          {data.filter(item => index === item.id).map(item => (
            <p key={item.id} style={{ whiteSpace: 'pre-line' }}>
              {item.description}
            </p>
          ))} 
       </div> */}

       <div className={styles.tabContent}>
        {selectedItem && (
          <>
            <h4 className={styles.heading}>{selectedItem.heading}</h4> {/* 제목 부분 (굵기 조절 가능) */}
            <p className={styles.description} style={{ whiteSpace: 'pre-line' }}>
              {selectedItem.description}
            </p>
          </>
        )}
      </div>

             
         
      </section>
    )
  }

  export default Section4;