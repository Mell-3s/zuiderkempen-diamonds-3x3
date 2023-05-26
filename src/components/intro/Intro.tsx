import { Box, Container, Divider, Typography } from '@mui/material';

import logo from '../../assets/logo.jpg';

import './intro.scss';

function Intro() {
  return (
    <Container maxWidth='md'>
      <section className='intro'>
        <Box>
          <Typography variant='h2'>Wat kan je verwachten?</Typography>
          <Divider />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris eros, mattis et
            nunc non, condimentum sagittis lectus. Donec fringilla sapien sapien, at aliquam odio
            pulvinar ac. Donec lacinia, ante a posuere facilisis, massa ipsum dignissim sem, sit
            amet mollis ligula elit eu tellus. Pellentesque non vehicula est. Maecenas semper eros
            arcu, ac laoreet libero varius at. Duis posuere semper enim, et luctus enim ultrices
            sed. Integer diam turpis, aliquet
          </Typography>
        </Box>
        <img src={logo} alt='Logo Zuiderkempen Diamonds' loading='lazy' />
      </section>
    </Container>
  );
}

export default Intro;
