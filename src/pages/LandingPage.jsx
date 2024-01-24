import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "./sections/Hero";
import WeOffer from "./sections/WeOffer";

function LandingPage() {
  return (
    <VStack>
      <Hero />
      <WeOffer />
    </VStack>
  );
}

export default LandingPage;
