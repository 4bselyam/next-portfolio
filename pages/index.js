import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
        Hello! I&apos;m a backend developer based in Germany!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ahmed Valyaev
          </Heading>
          <p>Digital Craftzman (Astronomer / Developer / Gamer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page