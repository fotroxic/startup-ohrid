import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Link from "next/link";
import posts from "../../database/db.json"
import React, {Component} from "react";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default class SingleNew extends Component {

render(){
  return (
    <>
    <div className="news__slider">
        <div className="news__slider__container">
         <h1 style={{ textAlign: "center" }}>News & Events </h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
         
          {posts.content.map(content =><Link key={content.id} href={`/news/${content.link}`}><Item className="news__block" key={content.id} style={{backgroundImage: `url(${content.contentImg})`}} >
        <h3 key={content.id}>{content.title}</h3></Item></Link>
          )}
  
        
        </Carousel>

        
      </div>
      <div className="view__more">
      <Link href="/news">
                    <button className="view__more__button">View More</button>
                </Link>
      </div>
      

      </div>
    </div>
    </>
  )
}
}