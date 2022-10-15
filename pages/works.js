import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTikTik from '../public/images/works/TikTik.png'
import thumbHitzLyrics from '../public/images/works/HitzLyrics.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="TikTik" title="TikTik" thumbnail={thumbTikTik}>
          TikTok Clone Application includes Google Auth
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="HitzLyrics"
            title="HitzLyrics"
            thumbnail={thumbHitzLyrics}
          >
            Spotify Clone Application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
