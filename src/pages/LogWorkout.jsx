import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, Textarea } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ workoutType, duration, details });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Log Workout</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="workout-type" isRequired>
              <FormLabel>Workout Type</FormLabel>
              <Select placeholder="Select workout type" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
                <option value="running">Running</option>
                <option value="strength-training">Strength Training</option>
                <option value="cycling">Cycling</option>
                <option value="swimming">Swimming</option>
                <option value="yoga">Yoga</option>
              </Select>
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </FormControl>
            <FormControl id="details">
              <FormLabel>Details</FormLabel>
              <Textarea value={details} onChange={(e) => setDetails(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" type="submit" size="lg" width="100%">Log Workout</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default LogWorkout;