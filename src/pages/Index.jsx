import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
        <Link to="/log-workout">
          <Button colorScheme="teal" size="lg">Log Workout</Button>
        </Link>
        <Link to="/progress-tracking">
          <Button colorScheme="teal" size="lg">Track Progress</Button>
        </Link> {/* Add button to navigate to progress tracking */}
      </VStack>
    </Container>
  );
};

export default Index;