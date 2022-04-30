import React from 'react'

import './animatedcubeslider.css'

function AnimatedCubeSlider() {
    return (
        <div className='animated_container'>
            {/* <div className='title'>
                <h1>Animated Cube Slider</h1>
                <p>CSS Only</p>
                <br />
                <p className='small'>best viewed in firefox</p>
            </div> */}
            <div className='slider'>
                <div className='container'>
                    <div className='slide x'>

                    </div>
                    <div className='slide y'>

                    </div>
                    <div className='slide z'>

                    </div>
                </div>
                <div className='shadow'>

                </div>
                <p className='credit'></p>
            </div>
        </div>
    )
}

export default AnimatedCubeSlider
