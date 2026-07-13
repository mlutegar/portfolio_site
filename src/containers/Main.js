import React, {useEffect, useState, Suspense, lazy} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import ScrollProgress from "../components/scrollProgress/ScrollProgress";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import "./Main.scss";

// Below-the-fold sections are code-split to keep the initial bundle small.
const Works = lazy(() => import("./works/Works"));
const Education = lazy(() => import("./education/Education"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Profile = lazy(() => import("./profile/Profile"));

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  if (isShowingSplashAnimation && splashScreen.enabled) {
    return <SplashScreen />;
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Greeting />
        <Suspense fallback={<div style={{minHeight: "40vh"}} />}>
          <Works />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Achievement />
          <Profile />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Main;
