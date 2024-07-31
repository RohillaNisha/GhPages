import React from 'react'
import './works.css'
import RPS from '../../assets/RPS.png'
import CV from '../../assets/CV.png'

function Works() {
  return (
    <section id="works">
    <h2 className="worksTitle">My Portfolio</h2>
    <span className="worksDesc">    Self-motivated, pro-active and enthusiastic fullstack
                                    JavaScript developer. After serving in a public sector bank
                                    for quite a long time, I wish to change my career and dare
                                    to follow my dreams to be a developer. My aim is to work
                                    and grow as a JavaScript developer and get more
                                    knowledge within frontend and backend development. </span>
    <div className="worksImgs">
        <img src={RPS} alt="rock paper scissors image" className="worksImg" />
        <img src={CV} alt="CV image" className="worksImg" />
        <img src={RPS} alt="rock paper scissors image" className="worksImg" />
        <img src={CV} alt="CV image" className="worksImg" />
        <img src={RPS} alt="rock paper scissors image" className="worksImg" />
        <img src={CV} alt="CV image" className="worksImg" />
    </div>
    <button className="worksBtn"> See more</button>

    </section>

  )
}

export default Works