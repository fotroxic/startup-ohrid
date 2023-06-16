import React, { useEffect, useState } from "react";
import Item from "./Item";
import Link from "next/link";
import RightSticky from "../latestcenter/RightSticky";
import posts from '../../database/db.json'

const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(6);
  const [flag, setFlag] = useState(true);
  const [selCat, setSelCat] = useState("");

  const loadData = () => {
    setLoad((prev) => prev + 4);
  };

  const changeCategoryHandler = () =>
  {
        setSelCat("company")
  }

  return (
    <div className="community__page">
      <div className="community__page__container">
        <div className="community__hero">
          <div className="hero__left">
            <h1>Community</h1>
            <p>
              Split Tech City is a community composed of well-intentioned and
              progressive companies, startups, associations, initiatives,
              institutions, and individuals. Together we encourage and develop
              the IT sector of Split and the surrounding region.
            </p>
            <button>Change</button>
          </div>
          <div className="hero__right">
            <img
              className="logo"
              src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="comunity__content">
          <div className="community__items__container">
            {posts.jobs.slice(0, load).map((job, index) => {
              if (job.category === "company") {
                return (
                  <div key={index}>
                    <Link href={`/news/}`}>
                      <Item
                        className="community__items"
                        key={job.id}
                        style={{ backgroundColor: "lightgray" }}
                      >
                        <div className="community__logo__container">
                          <img
                            className="community__logo"
                            key={job.id}
                            src={job.memberImg}
                          />
                          <h3 key={job.id}>{job.name}</h3>
                          <p key={job.id}>{job.category}</p>
                        </div>
                      </Item>
                    </Link>
                  </div>
                );
              } else if (job.category === "student") {
                return (
                  <div key={index}>
                    <Link href={`/news/}`}>
                      <Item
                        className="community__items"
                        key={job.id}
                        style={{ backgroundColor: "lightgray" }}
                      >
                        <div className="community__logo__container">
                          <img
                            className="community__logo"
                            key={job.id}
                            src={job.memberImg}
                          />
                          <h3 key={job.id}>{job.name}</h3>
                          <p key={job.id}>{job.category}</p>
                        </div>
                      </Item>
                    </Link>
                  </div>
                );
              } else {
                return null; // Skip rendering if category doesn't match
              }
            })}
       
       
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