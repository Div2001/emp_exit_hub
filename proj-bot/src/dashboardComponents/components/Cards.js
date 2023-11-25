import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        {/* <h1>Check out these epic destinations</h1> */}
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    // src='/myInfo.png'
                    icon="fa-regular fa-id-badge"
                    text="My Info"
                    // label='Adventure'
                    path='/services'
                    />
                    <CardItem
                    // src='/resignationImage.png'
                    icon="fa-solid fa-file-signature"
                    text="Resignation Submission Portal"
                    // label='Adventure'
                    path='/resignation-form'
                    />
                    <CardItem
                    // src='/sureveyImage.png'
                    icon="fa-solid fa-square-poll-vertical"
                    text="Take the Exit Survey!"
                    // label='Adventure'
                    path='/exit-survey'
                    />
                    {/* <CardItem
                    // src='/contactHR.png'
                    icon="fa-regular fa-circle-question"
                    text="Contact Human Resources"
                    // label='Adventure'
                    path='services'
                    /> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards