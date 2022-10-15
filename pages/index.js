import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Beginner Developer 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            TonyMuMu
          </Heading>
          <p>Front-End Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Tonymumu.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hey, I'm Tonymumu, and I'm just starting off in the front end. Over the past twelve months, I've been studying programming languages like HTML, CSS, and JavaScript. Even though I am still very much a newbie, I am beginning to construct some elementary websites and online applications. I'm excited to keep studying and improving my programming skills.{' '}
          <NextLink href="#" passHref scroll={false}> 
            <Link>{'STAY TUNED!'}</Link> 
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Project that i have cloned 
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Kuala Lumpur (吉隆坡), Malaysia.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Graduate School of 社会大学.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Aegis (Aegis BPO Malaysia)
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Gaming, Music,{' '}
            Video Editing,{' '}
            <Link href="https://short-sense.vercel.app/" target="_blank">
            & Prototyping Innovative Ideas 
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mrtonymu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MrTonyMu
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                Coming Soon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mrtonyyam" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @MrTonyYam
              </Button>
            </Link>
          </ListItem>
        </List>

      

        <Box align="center" my={4}>
          <NextLink href="https://instagram.com/mrtonyyam" passHref scroll={false}>
          <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Follow me on Instagram
              </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
