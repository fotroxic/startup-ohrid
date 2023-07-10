import React, { useEffect, useState } from "react";
import Item from '../../../components/community/Item'
import Link from "next/link";
import RightSticky from "../../../components/latestcenter/RightSticky";
import posts from '../../../database/db.json'
import { Dropdown } from "@nextui-org/react";

const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(6);
  const [flag, setFlag] = useState(true);
  const [selCat, setSelCat] = useState("student");

  const loadData = () => {
    setLoad((prev) => prev + 4);
  };

  const changeCategoryHandler = () =>
  {
      
        setSelCat("student")
        console.log(selCat)
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

          </div>
          
          <div className="hero__right">
            <img
              className="logo"
              src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
       <Link href={"/community"}><p>Go to companies</p></Link>

        <div className="comunity__content">
          <div className="community__items__container">
            {posts.jobs.slice(0, load).map((job, index) => {
              if (job.category == selCat) {
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
              } else if (job.category == job.student) {
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