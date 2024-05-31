import { Container, Text, VStack, Box, Heading, Button, SimpleGrid, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for a skilled software engineer to join our team.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd.",
    location: "New York, NY",
    description: "Seeking an experienced product manager to lead our product team.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignPro",
    location: "Remote",
    description: "A creative UX designer is needed to improve our user interfaces.",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [jobs, setJobs] = useState(jobListings);

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobs.map((job) => (
            <GridItem key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={job.imageUrl} alt={`${job.title} at ${job.company}`} />
              <Box p={6}>
                <Heading as="h2" size="md" mb={2}>
                  {job.title}
                </Heading>
                <Text fontWeight="bold">{job.company}</Text>
                <Text>{job.location}</Text>
                <Text mt={4}>{job.description}</Text>
                <Button mt={4} colorScheme="teal">
                  Apply Now
                </Button>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;