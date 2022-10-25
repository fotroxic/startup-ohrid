import React from 'react'

const Latest = () => {
  return (
    <div className='latest'> 
        <div className='latest-container'>
        <h4> LATEST NEWS </h4>

            <div className='latest-block'>

            <div className='latest-box' >
                <div className="latest-img">
                    <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2022/08/foto_18.jpg?resize=610%2C400&ssl=1" alt="" />
                </div>
                <span className='latest-span'> Internationals </span>
                <div className='latest-desc'>
                Smartspace is a new member of the Split Tech City community!
                </div>
            </div>
            <div className='latest-box' >
                <div className="latest-img">
                    <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2022/08/smartspace-cover.jpg?resize=610%2C400&ssl=1" alt="" />
                </div>
                <span className='latest-span'> Worldwide  </span>
                <div className='latest-desc'>
                A story of an international summed up in three words: love for Split!
                </div>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default Latest