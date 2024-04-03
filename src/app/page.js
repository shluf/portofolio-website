"use client";

import { useWindowBlurChangeTitle } from "use-window-blur-change-title";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { PageTransitionHome } from "./components/animations/Transitions";
import HomeContent from "./components/home/HomeContent";
import HomeTitle from "./components/home/HomeTitle";
import UnderConstruction from "./components/notnow/UnderConstruction";

export default function Home() {
  useWindowBlurChangeTitle("Salis Haidar | Enjoy");

  const [homeContentHidden, setHomeContentHidden] = useState(true);
  const [pageTransitionComplete, setPageTransitionComplete] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  const toggleTransition = () => {
    setHomeContentHidden(false);
    setTimeout(() => {
      setPageTransitionComplete(true);
    }, 0);
  };

  return (
    <main className="box-border flex min-h-screen flex-col">
      {homeContentHidden ? (
        <HomeTitle onTrue={() => toggleTransition()} />
      ) : (
        <>
          <PageTransitionHome />
          {pageTransitionComplete && <UnderConstruction />}
        </>
      )}
    </main>
  );
}
