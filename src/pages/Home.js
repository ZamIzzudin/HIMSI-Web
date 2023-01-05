
import React from "react";

import Hero from "../components/Hero";
import LatestEvents from "../components/LatestEvents";
import Partner from "../components/Partner";
import SocialMedia from "../components/SocialMedia";
import '../styles/pages/Home.css'
import EventSlider from "../components/EventSlider";
import { Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="blank-space" />
      <Hero />
      <Container>
        <div className="header">
          <h3 className="title">Up Coming Events</h3>
          <Button className='btn-header' variant="primary">
            <Link to={`/layanan-mahasiswa`}>View More</Link>
          </Button>
        </div>
        <EventSlider />
        <div className="header">
          <h3 className="title">Lastest Event</h3>
          <Button className='btn-header' variant="primary">View More</Button>
        </div>
        <LatestEvents />
        <Partner />
        <SocialMedia />
      </Container>
    </div>


  )
}

export default Home