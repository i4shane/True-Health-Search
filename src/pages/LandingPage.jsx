import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "./sections/Hero";
import WeOffer from "./sections/WeOffer";
import About from "./sections/About";
import FAQSection from "./sections/FAQ";
import Footer from "./sections/Footer";

function LandingPage() {
  return (
    <VStack>
      <Hero />
      <WeOffer />
      <About />
      <FAQSection />
      <Footer />
    </VStack>
  );
}

export default LandingPage;
