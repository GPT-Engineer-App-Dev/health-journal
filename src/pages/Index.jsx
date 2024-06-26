import { Container, VStack, Heading, Text, Button, Box, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated on your fitness journey.</Text>
        <Flex width="100%" justifyContent="space-around">
          <Box textAlign="center">
            <IconButton aria-label="Running" icon={<FaRunning />} size="lg" isRound />
            <Text mt={2}>Running</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Strength Training" icon={<FaDumbbell />} size="lg" isRound />
            <Text mt={2}>Strength Training</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Heart Rate" icon={<FaHeartbeat />} size="lg" isRound />
            <Text mt={2}>Heart Rate</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;