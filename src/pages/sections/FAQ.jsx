import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function FAQSection() {
  const faqs = [
    {
      question: "How accurate is the information sourced on the platform?",
      answer: "The purpose of this website is...",
    },
    {
      question: "Can I access the platform on different devices?",
      answer: "The purpose of this website is...",
    },
    {
      question: "How does the AI tool assist in coding dilemmas?",
      answer: "The purpose of this website is...",
    },
    {
      question: "What educational resources do you provide?",
      answer: "The purpose of this website is...",
    },
  ];

  return (
    <Box pb={"50px"}>
      <VStack
        textAlign={"center"}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ base: "30px", lg: "25px" }}
      >
        <Heading>Frequently Asked Questions</Heading>
        <Text mb={4} w={"80%"}>
          Got questions? Find quick answers to common queries in our FAQ
          section. Streamline your experience with hassle-free solutions
        </Text>
      </VStack>

      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={5}
        px={{ base: "", md: 20 }}
        flexDirection={{ base: "column", md: "row" }}
        gap={30}
      >
        <VStack align="center" spacing={4} w="100%">
          <Accordion allowMultiple>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} spacing={4}>
                {" "}
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" ml={2} mr={3}>
                      {" "}
                      <Text fontWeight="bold" fontSize="xl">
                        {faq.question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <Text fontSize="lg">{faq.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Flex>
    </Box>
  );
}

export default FAQSection;
