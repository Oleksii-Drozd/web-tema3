import React from 'react';
import separateData from './separate';
import SeparateCard from './SeparateCard';
import './SeparatePage.css'; // Додайте стилі за потреби

const SeparatePage = () => {
    return (
        <div className="separate-page">
            <h1>React Props: Використання умовного оператора, функцій-стрілок, та рендерінгу масивів</h1>
            <div className="separate-cards-container">
                {separateData.map(item => (
                    <SeparateCard
                        key={item.id}
                        title={item.title}
                        link={item.link}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default SeparatePage;