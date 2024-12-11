import React from 'react';
import GoodsCard from './GoodsCard';
import './style.css';
import item1 from './img/item1.jfif'
import item2 from './img/item2.jfif'
import item3 from './img/item3.jfif'
import item4 from './img/item4.jfif'
import item5 from './img/item5.jfif'
import item6 from './img/item6.jfif'

const GoodsGallery = () => {
    const goods = [
        { id: 1, image: item1, name: 'Йогурт', price: 250 },
        { id: 2, image: item2, name: 'Підгузки', price: 300 },
        { id: 3, image: item3, name: 'Молоко', price: 450 },
        { id: 4, image: item4, name: 'Вода', price: 120 },
        { id: 5, image: item5, name: 'Сік', price: 500 },
        { id: 6, image: item6, name: 'Хліб', price: 380 },
    ];

    return (
        <div className="goods-gallery">
            {goods.map((item) => (
                <GoodsCard key={item.id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
    );
};

export default GoodsGallery;
