
// export default function Home() {
//   return (
//     <main>
//       <h1>Home</h1>
//     </main>
//   );
// }

import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

import Hero from "../components/Hero";
import UpComingEvent from "../components/UpComingEvent";
import LatestEvents from "../components/LatestEvents";
import Partner from "../components/Partner";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div>
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