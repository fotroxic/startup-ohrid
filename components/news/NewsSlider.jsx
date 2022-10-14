import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Link from "next/link";
import axios from "axios";
import React, {Component} from "react";
import content from './data'


const api = axios.create({
  baseURL: 'http://localhost:3000/content'
})

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default class NewsSlider extends Component {

    state = {
      content:[]
    }

    constructor() {
      super();
      api.get('/').then(res =>
        {
            console.log(res.data)
            this.setState({content:res.data})          
        })
    }

render(){
  return (
    <>
    <div className="news__slider">
        <div className="news__slider__container">
         <h1 style={{ textAlign: "center" }}>News & Events </h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {this.state.content.map(content =><Link key={content.id} href={`/news/${content.link}`}><Item className="news__block" key={content.id} style={{backgroundImage: `url(${content.contentImg})`}} >
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