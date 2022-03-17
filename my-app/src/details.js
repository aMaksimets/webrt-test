import { VStack, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";

const Details = () => {
    return (
        <VStack
          w='full'
          h='full'
          p={10}
          spacing={10}
          alignItems='flex-start'
        >
                            <Heading>Mailing list signup</Heading>
            <VStack
            >
                <Heading

                >Details</Heading>
                <Text></Text>
            </VStack>

            <SimpleGrid>
                <GridItem>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input></Input>
                        <FormLabel>Email</FormLabel>
                        <Input></Input>
                        <FormLabel>Organization</FormLabel>
                        <Input></Input>
                        <Button>Submit!</Button>
                    </FormControl>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default Details