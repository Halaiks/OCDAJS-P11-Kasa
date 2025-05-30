import React from 'react';
import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
  {Array.isArray(content) ? (
    <ul>
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p>{content}</p>
  )}
</div>
            </div>
        </>
    )
}