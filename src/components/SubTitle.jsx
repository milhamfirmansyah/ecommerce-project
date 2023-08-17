import React from 'react';
import '../styles/subtitle.css'

function SubTitle({title}) {
  return (
    <div className="subtitle">
      <div></div>
      <p>{title}</p>
    </div>
  );
}

export default SubTitle;
