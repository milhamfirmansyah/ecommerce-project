import React from 'react';
import '../styles/subtitle.css';

function SubTitle({ title, header }) {
  return (
    <div>
      <div className="subtitle">
        <div></div>
        <p>{title}</p>
      </div>
      <h1 className='title-header'>{header}</h1>
    </div>
  );
}

export default SubTitle;
