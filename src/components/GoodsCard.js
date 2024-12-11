import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const GoodsCard = ({ image, name, price }) => {
    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-card__image" />
            <h3 className="goods-card__name">{name}</h3>
            <p className="goods-card__price">{price} грн</p>
        </div>
    );
};

GoodsCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default GoodsCard;
