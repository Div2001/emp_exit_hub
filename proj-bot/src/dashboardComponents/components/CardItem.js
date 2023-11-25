import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const iconClassName = `fas ${props.icon}`; // Create the FontAwesome icon class name

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          {/* <figure className='cards__item__pic-wrap' data-category={props.label}> */}
          <figure className='cards__item__pic-wrap'>
            {/* Render the FontAwesome icon */}
            {/* <i className={iconClassName}></i> */}
            <div className='cards__item__icon-container'>
              <i className={iconClassName + ' cards__item__icon'} />
            </div>
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;