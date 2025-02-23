import React, { useState } from 'react';
import serviceStyles from '../subcss/Service.module.css';

import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
  
function Service() {
    const components = [Service1, Service2, Service3, Service4];
    const titles = ["한파", "폭염", "황사", "폭우"];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMainTabClick = (index, e) => {
        e.preventDefault();
        setSelectedIndex(index);
    };

    const SelectedComponent = components[selectedIndex];
  
    return (
        <section className={[serviceStyles.tabContainer, serviceStyles.service].join(' ')}>
            <h4>국민행동요령</h4>
                <ul className={serviceStyles.tabMenu}>
                    {titles.map((title, index) => (
                        <li key={index}>
                            <button href="#" 
                               className={selectedIndex === index ? serviceStyles.active : null} 
                               onClick={(e) => handleMainTabClick(index, e)}>
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
            <SelectedComponent />
            {/* <div className={serviceStyles.tabContent}>
                {selectedIndex === 0 && <Service1 />}
                {selectedIndex === 0 && <Service2 />}
                {selectedIndex === 0 && <Service3 />}
                {selectedIndex === 0 && <Service4 />}
                나머지 컴포넌트 추가 가능
            </div> */}
        </section>
    );
}

export default Service;
