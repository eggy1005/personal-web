import React, { Component } from 'react';

import ReactPlayer from 'react-player'

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
    
          <div style={{ height: '65vh' }}>
        <ReactPlayer
          url="https://youtu.be/kMCjXot6jxM"
          className="react-player"
          playing={false}
          width="100%"
          height="100%"
        />
      </div>

            {/* <Player
                 playsInline
                 poster="/assets/poster.png"
                 src="/videos/new year letter.MOV"/> */}

            </div>
      </div>

   </section>
    );
  }
}

export default Portfolio;
