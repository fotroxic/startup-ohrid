
import JobsHero from "../../components/jobs/JobsHero";
import { useState } from "react";
import RightSticky from "../../components/latestcenter/RightSticky";
import posts from '../../database/db.json'


const  Home = () => {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(4);
  const loadData = () => {
    setLoad((prev) => prev + 4)
  }

  return (
   <div>

  <JobsHero />
  <div className='jobs__page'>
          <div className='jobs__page__container'>
          <div className='block__container'>
          {posts.jobs.slice(0,load).map((jobs,index)=> {
            return (
              <div className='jobs__page__block' key={index} >
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
          })}                      
        <button className='load'  onClick={loadData} >
            Load More
        </button>
                </div>
                <RightSticky/>

                </div>
            </div>
            


   </div>
  )
}

export default Home;
