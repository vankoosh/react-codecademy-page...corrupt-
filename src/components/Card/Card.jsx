import React from 'react';
import "./Card.css";

export default function Card({props}) {
  return (
    <div className='card'>
      <p className='card__text'></p>
      <img src={props.src} className="card__img" alt=""/>
    </div>
)
}