import { Container, Flex } from '@chakra-ui/react';

import Details from './details'
import Cart from './cart'

const App = () => {
  return(
    <Container maxW='container.xl' padding={0}>
      <Flex h='100vh' py={20}>
        <Details/>
        <Cart/>
      </Flex>
    </Container>
  )
}

export default App;
