import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { Box, Flex, Heading, Text, Tabs, TabList, Tab, TabPanels, TabPanel, SimpleGrid } from '@chakra-ui/react';
import OhmCalculator from '../components/ohmCalculator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Defi Calculator</title>
        <meta name="description" content="The calculator for Olympus DAO(OHM), Wonderland(TIME), Klima DAO(KLIMA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimpleGrid as="main" columns={2} spacing={10}>
        <Flex direction="column" p="8">
          <Heading as="h1" size="2xl" mb={4}>
            Defi Calculator
          </Heading>
          <Text fontSize="xl" mb={4}>
            The calculator for Olympus DAO(OHM), Wonderland(TIME), Klima DAO(KLIMA)
          </Text>
        </Flex>
        <Box p="8">
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>
                <Box>
                  <Heading as="h2" size="lg" mb={2}>
                    OHM
                  </Heading>
                  <Text fontSize="lg" mb={2}>
                    Olympus DAO
                  </Text>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Heading as="h2" size="lg" mb={2}>
                    TIME
                  </Heading>
                  <Text fontSize="lg" mb={2}>
                    Wonderland
                  </Text>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Heading as="h2" size="lg" mb={2}>
                    KLMA
                  </Heading>
                  <Text fontSize="lg" mb={2}>
                    Klima DAO
                  </Text>
                </Box>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <OhmCalculator />
              </TabPanel>
              <TabPanel>
                <Text>Coming Soon</Text>
              </TabPanel>
              <TabPanel>
                <Text>Coming Soon</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
    </>
  );
}
