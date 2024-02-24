import React from 'react'
import './Link.css';
import cgv_black from '../assets/cgv_black.png';
function Link() {
    return (
        <>
            <div className='head-line'>
                시간 계산기
            </div>
            <div className='cgv-link'>
                <a href="http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0298&date=20240214"><img src={cgv_black} alt="" /></a>
            </div>
        </>

    )
}

export default Link