import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Link from "next/link";
import posts from '../../database/db.json'
import React, {Component} from "react";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export default class CommunitySlider extends Component {



  render(){
  return (
    <div className="community__slider">
    <div className="community__slider__container">
     <h1 style={{ textAlign: "center" }}>Community </h1>
  <div className="App">
    <Carousel breakPoints={breakPoints}>
    {posts.jobs.map(jobs =>
      <Item className="news__block" key={jobs.id}>
      <div className="member">
    <div className="member__img">    <img key={jobs.id} src={jobs.memberImg} alt="" /></div>
            <div className="member__info">
             <div className="member__name">
             <p key={jobs.id}>{jobs.name}</p>
             </div>
                <div className="member__category"><p key={jobs.id}>{jobs.category}</p></div>
                 </div>
                 </div>
              </Item>
      )}
   
    </Carousel>
  </div>
  <div className="view__more">
  <Link href="/community">
                <button className="view__more__button">View More</button>
            </Link>
  </div>
  

  </div>
</div>
  )
}
}
