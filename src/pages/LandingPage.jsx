import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "./sections/landingpage/Hero";
import WeOffer from "./sections/landingpage/WeOffer";
import About from "./sections/landingpage/About";
import FAQSection from "./sections/landingpage/FAQ";
import Footer from "./sections/landingpage/Footer";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <>
    <NavBar/>
     <VStack>
      <Hero />
      <WeOffer />
      <About />
      <FAQSection />
      <Footer />
    </VStack>
    </>
   
  );
}

export default LandingPage;
