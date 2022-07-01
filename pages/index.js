import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        align="center"
        mb={6}
        mt={6}
      >
        Hello! I&apos;m a backend developer based in Germany!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ahmed Valyaev
          </Heading>
          <p>Digital Craftzman (Astronomer / Developer / Gamer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/avatar.jpg"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          temporibus perspiciatis. Animi at obcaecati placeat nam dolorem
          architecto optio. Ea pariatur, perspiciatis quibusdam obcaecati omnis
          harum quod ad hic dignissimos?&nbsp;
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Simferopol, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Started studying in National University &quot;Odessa Polytechnic&quot;
          at Automtization and Programming faculty. Became head of Student
          Government at Institute of Computer Systems (ICS)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Nextepper as frontend developer
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working in&nbsp;
          <NextLink href="https://andersenlab.com/">
            <Link>AndersenLab</Link>
          </NextLink>
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>Music, Games, Astronomy, Nature, Machine Learning</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
