import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod1.webp'
import Moon from '../assets/moon.jpeg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Moon} classname='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} classname='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training
