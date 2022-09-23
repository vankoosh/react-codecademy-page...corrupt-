import React from 'react';

export default function Card(props) {
  return (
    <div>
      <p>Hello world</p>
      <h1>{props.id}</h1>
    <img src={props.imgs[0]} alt={props.id} />
    </div>
)
}