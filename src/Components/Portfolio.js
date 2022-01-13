import React, { Component } from 'react';
import Player from 'griffith'

class Portfolio extends Component {
  render() {
    const sources = {
      hd: {
        play_url: '/videos/new year letter.MOV',
      },
      sd: {
        play_url: '/videos/new year letter.MOV',
      },
    }


    return (
      <section id="portfolio">



        <h1 >Check out my video here</h1>
<div >
           <div className="row education">
            <Player sources={sources} />
            </div>
      </div>

   </section>
    );
  }
}

export default Portfolio;
