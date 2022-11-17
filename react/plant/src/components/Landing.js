import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"
function Landing() {
  return (
    <div>
      <div className="landing">
      <section className="home" id="home">
        <div className="content">
          <h3>Plants Are <span>One Click</span></h3>
          <p>This is plantomainia, an one stop shop location for all horticulturist as well as farmers.</p>
          <Link to="/nursery" className="btn">
            PlantoMania
            {/* <!-- <div className="wave"></div> --> */}
          </Link>
        </div>
        <div className="landing-image">
          <img src="landing.png" alt="landing image"/>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Landing
