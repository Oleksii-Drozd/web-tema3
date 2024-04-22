import React from 'react';

const SeparateItem = ({ title, link, description, image }) => {
    return (
        <div className="separate-item">
            <h2>{title}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">Посилання</a>
            <p>{description}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default SeparateItem;