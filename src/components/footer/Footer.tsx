import { Container, Divider, Typography } from '@mui/material';

import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <Container maxWidth='md'>
        <Typography variant='h2' color='common.white'>
          Algemene info
        </Typography>
        <Divider />
        <Typography color='common.white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris eros, mattis et nunc
          non, condimentum sagittis lectus. Donec fringilla sapien sapien, at aliquam odio pulvinar
          ac. Donec lacinia, ante a posuere facilisis, massa ipsum dignissim sem, sit amet mollis
          ligula elit eu tellus. Pellentesque non vehicula est. Maecenas semper eros arcu, ac
          laoreet libero varius at. Duis posuere semper enim, et luctus enim ultrices sed. Integer
          diam turpis, aliquet
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
