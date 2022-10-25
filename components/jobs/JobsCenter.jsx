import axios from 'axios'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RightSticky from '../latestcenter/RightSticky';
import posts from '../../database/db.json'

  const  Jobs =()=> {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(4);
    const [flag,setFlag]=useState(true)
    

  const loadData = () => {
    setLoad((prev) => prev + 4)
  }
 
        return(
            <>
            <div className='jobs__page'>
                <div className='jobs__page__container'>
                <div className='block__container'>
                {posts.jobs.slice(0, load).map((jobs, index) => {
                    return ( 
                    <div className='jobs__page__block' key={index}>
                        <div className='jobs__lb'>
                            <img src={jobs.logo} alt="" />
                            <div className='jobs__lb__details'>
                                <p>{jobs.name}</p>
                                <p>{jobs.role}</p>
                            </div>
                        </div>
                        <div className='jobs__rb'>
                            <p>{jobs.role}</p>
                        </div>
                    </div>
                    )
                 } )}
                
        <button className='load'   onClick={loadData}>
            Load More
        </button>
                </div>
                <RightSticky />

                </div>
            </div>
            
            
            </>

        )
    
  }

  export default Jobs;