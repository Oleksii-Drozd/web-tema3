import React from 'react';

const SeparateCard = ({ title, link, description, image }) => {
    return (
        <div className="separate-card">
            <h2>{title}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">Посилання</a>
            <p>{description}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default SeparateCard;