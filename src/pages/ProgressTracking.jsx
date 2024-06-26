import { useState, useEffect } from "react";
import { Container, VStack, Heading, Box } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ProgressTracking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the progress data from an API or local storage
    const fetchData = async () => {
      // Example data
      const result = [
        { date: "2023-10-01", running: 30, strength: 20 },
        { date: "2023-10-02", running: 45, strength: 25 },
        { date: "2023-10-03", running: 50, strength: 30 },
        // Add more data points here
      ];
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Progress Tracking</Heading>
        <Box width="100%" height={400}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="running" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="strength" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProgressTracking;