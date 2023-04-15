import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCrousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            facilis et ipsam dolore vel illo quidem beatae, aperiam sapiente
            officia qui maxime mollitia velit dolorum. Accusantium enim tempore
            sunt incidunt! Dignissimos quo vel fugit est praesentium autem
            officia fuga itaque, nostrum ipsum odio in quos voluptates, iure
            repudiandae ipsam amet. Quidem quis nisi similique aut! Similique
            blanditiis incidunt numquam deserunt. Reiciendis quasi porro ad
            totam molestias excepturi. Dignissimos tempora fugit excepturi
            aliquam voluptatum, beatae earum eaque esse suscipit ex? Sint,
            praesentium eaque ad soluta ipsam natus aliquam dicta cum odit. Iure
            esse ullam, ab non eum beatae! Totam quis nulla aut porro,
            reprehenderit pariatur ut inventore veritatis esse officia ipsam,
            qui natus exercitationem dignissimos iure consequatur quas rerum
            velit sed.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCrousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
