import React, { useEffect, useState } from "react";
import Item from "./Item";
import Link from "next/link";
import RightSticky from "../latestcenter/RightSticky";
import posts from '../../database/db.json'

const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(4);
  const [flag,setFlag]=useState(true)

  const loadData = () => {
    setLoad((prev) => prev + 4)
  }

  return (
    <div className="community__page">
    <div className="community__page__container">
        <div className="community__hero">
            <div className="hero__left">
                <h1>Community</h1>
                <p>Split Tech City is a community composed of well-intentioned and progressive companies, startups, associations, initiatives, institutions and individuals. Together we encourage and develop the IT sector of Split and the surrounding region.</p>
            </div>
            <div className="hero__right">
                <img src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
      <div className="comunity__content">
        
      <div className="community__items__container">
      {posts.jobs.slice(0, load).map((jobs, index) => {
        
          return (
            <div key={index}>
              
              <Link href={`/news/}`}><Item className="community__items" key={jobs.id} style={{backgroundImage: `url(${jobs.memberImg})`}} >
              <h3 key={jobs.id}>{jobs.name}</h3></Item></Link>
            </div>
          )
        })
        }
       
       
         {
             <button className="load" onClick={loadData}>Load more</button>
           }
        </div>
          <RightSticky/>
          

      </div>
    </div>
</div>

  );
};

export default App;