import React from "react";
import {NativeBaseProvider, Box, Card, Divider, Text, Container, HStack, VStack, ScrollView, Button, Center} from "native-base";

export default function App() {
    return (
        <NativeBaseProvider>
            <ScrollView bg="muted.800" w={["auto", "auto"]} h="80">
                <Box border="1" borderRadius="md" pt="16" px="5">
                    <VStack space="0" bg="indigo.500" borderRadius="md" divider={<Divider />}>
                        <Box py="2" bg="indigo.700" borderRadius="md" borderBottomRightRadius="none" borderBottomLeftRadius="none">
                            <Center>
                                <Text fontWeight="bold" color="white">
                                    Start strip led
                                </Text>
                            </Center>
                        </Box>
                        <Box p="5">
                            <Text fontWeight="bold" color="white">
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>
                        </Box>
                        <Button onPress={() => { apiSend('http://localhost/api/start') }} activeStyle="none" bg="indigo.900" borderRadius="none" borderBottomRightRadius="md" borderBottomLeftRadius="md">
                            <Text fontWeight="bold" color="white">
                                Start
                            </Text>
                        </Button>
                    </VStack>
                </Box>

                <Box border="1" borderRadius="md" pt="5" px="5">
                    <VStack space="0" bg="indigo.500" borderRadius="md" divider={<Divider />}>
                        <Box py="2" bg="indigo.700" borderRadius="md" borderBottomRightRadius="none" borderBottomLeftRadius="none">
                            <Center>
                                <Text fontWeight="bold" color="white">
                                    Stop strip led
                                </Text>
                            </Center>
                        </Box>
                        <Box p="5">
                            <Text fontWeight="bold" color="white">
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>
                        </Box>
                        <Button  onPress={() => { apiSend('http://localhost/api/stop') }} activeStyle="none" bg="indigo.900" borderRadius="none" borderBottomRightRadius="md" borderBottomLeftRadius="md">
                            <Text fontWeight="bold" color="white">
                                Stop
                            </Text>
                        </Button>
                    </VStack>
                </Box>

                <Box border="1" borderRadius="md" pt="5" px="5">
                    <VStack space="0" bg="indigo.500" borderRadius="md" divider={<Divider />}>
                        <Box py="2" bg="indigo.700" borderRadius="md" borderBottomRightRadius="none" borderBottomLeftRadius="none">
                            <Center>
                                <Text fontWeight="bold" color="white">
                                    Start strip led
                                </Text>
                            </Center>
                        </Box>
                        <Box p="5">
                            <Text fontWeight="bold" color="white">
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>
                        </Box>
                        <Button onPress={() => { console.log('Hello word')}} activeStyle="none" bg="indigo.900" borderRadius="none" borderBottomRightRadius="md" borderBottomLeftRadius="md">
                            <Text fontWeight="bold" color="white">
                                Start
                            </Text>
                        </Button>
                    </VStack>
                </Box>

                <Box border="1" borderRadius="md" pt="5" px="5">
                    <VStack space="0" bg="indigo.500" borderRadius="md" divider={<Divider />}>
                        <Box py="2" bg="indigo.700" borderRadius="md" borderBottomRightRadius="none" borderBottomLeftRadius="none">
                            <Center>
                                <Text fontWeight="bold" color="white">
                                    Start strip led
                                </Text>
                            </Center>
                        </Box>
                        <Box p="5">
                            <Text fontWeight="bold" color="white">
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>
                        </Box>
                        <Button onPress={() => { console.log('Hello word')}} activeStyle="none" bg="indigo.900" borderRadius="none" borderBottomRightRadius="md" borderBottomLeftRadius="md">
                            <Text fontWeight="bold" color="white">
                                Start
                            </Text>
                        </Button>
                    </VStack>
                </Box>

                <Box border="1" borderRadius="md" pt="5" px="5" pb="10">
                    <VStack space="0" bg="indigo.500" borderRadius="md" divider={<Divider />}>
                        <Box py="2" bg="indigo.700" borderRadius="md" borderBottomRightRadius="none" borderBottomLeftRadius="none">
                            <Center>
                                <Text fontWeight="bold" color="white">
                                    Start strip led
                                </Text>
                            </Center>
                        </Box>
                        <Box p="5">
                            <Text fontWeight="bold" color="white">
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>
                        </Box>
                        <Button onPress={() => { console.log('Hello word')}} activeStyle="none" bg="indigo.900" borderRadius="none" borderBottomRightRadius="md" borderBottomLeftRadius="md">
                            <Text fontWeight="bold" color="white">
                                Start
                            </Text>
                        </Button>
                    </VStack>
                </Box>

            </ScrollView>


        </NativeBaseProvider>
    );
}

const apiSend = (url) => {
    const array = {
        0: [
            {
                0: [rand(), rand(), rand()],
                1: [rand(), rand(), rand()],
                2: [rand(), rand(), rand()],
                3: [rand(), rand(), rand()],
                4: [rand(), rand(), rand()],
                5: [rand(), rand(), rand()],
                6: [rand(), rand(), rand()],
                7: [rand(), rand(), rand()],
                8: [rand(), rand(), rand()],
                9: [rand(), rand(), rand()]
            },
            200
        ],
        1: [
            {
                0: [rand(), rand(), rand()],
                1: [rand(), rand(), rand()],
                2: [rand(), rand(), rand()],
                3: [rand(), rand(), rand()],
                4: [rand(), rand(), rand()],
                5: [rand(), rand(), rand()],
                6: [rand(), rand(), rand()],
                7: [rand(), rand(), rand()],
                8: [rand(), rand(), rand()],
                9: [rand(), rand(), rand()]
            },
            300
        ],
        2: [
            {
                0: [rand(), rand(), rand()],
                1: [rand(), rand(), rand()],
                2: [rand(), rand(), rand()],
                3: [rand(), rand(), rand()],
                4: [rand(), rand(), rand()],
                5: [rand(), rand(), rand()],
                6: [rand(), rand(), rand()],
                7: [rand(), rand(), rand()],
                8: [rand(), rand(), rand()],
                9: [rand(), rand(), rand()]
            },
            400
        ],
        3: [
            {
                0: [rand(), rand(), rand()],
                1: [rand(), rand(), rand()],
                2: [rand(), rand(), rand()],
                3: [rand(), rand(), rand()],
                4: [rand(), rand(), rand()],
                5: [rand(), rand(), rand()],
                6: [rand(), rand(), rand()],
                7: [rand(), rand(), rand()],
                8: [rand(), rand(), rand()],
                9: [rand(), rand(), rand()]
            },
            400
        ],
        4: [
            {
                0: [rand(), rand(), rand()],
                1: [rand(), rand(), rand()],
                2: [rand(), rand(), rand()],
                3: [rand(), rand(), rand()],
                4: [rand(), rand(), rand()],
                5: [rand(), rand(), rand()],
                6: [rand(), rand(), rand()],
                7: [rand(), rand(), rand()],
                8: [rand(), rand(), rand()],
                9: [rand(), rand(), rand()]
            },
            400
        ],
    }


    (async () => {
        const rawResponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(array)
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })()
}

const rand = () => {
 return Math.floor(Math.random() * 255)
}
