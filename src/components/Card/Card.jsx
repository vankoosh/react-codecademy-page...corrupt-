import React from 'react';

export default function Card({props}) {
  // console.log(typeof props.src)
  return (
    <div>
      <p>{props.id}</p>
      <img src={props.src}  alt=""/>
    </div>
)
}