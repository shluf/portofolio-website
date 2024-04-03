"use client";
import React, { useState } from "react";
import UnderConstruction from "../components/notnow/UnderConstruction";

const About = () => {
  const [homeContentHidden, setHomeContentHidden] = useState(true);
  const [pageTransitionComplete, setPageTransitionComplete] = useState(false);

  const toggleTransition = () => {
    setHomeContentHidden(false);
    setTimeout(() => {
      setPageTransitionComplete(true);
    }, 500);
  };

  return <UnderConstruction />;
};

export default About;
