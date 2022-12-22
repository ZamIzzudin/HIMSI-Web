
import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

import Hero from "../components/Hero";
import UpComingEvent from "../components/UpComingEvent";
import LatestEvents from "../components/LatestEvents";
import Partner from "../components/Partner";
import SocialMedia from "../components/SocialMedia";

import '../styles/pages/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="blank-space">
      </div>
      <Hero />
      <UpComingEvent />
      <LatestEvents />
      <Partner />
      <SocialMedia />
    </div>


  )
}

export default Home