import { Container, Typography } from '@mui/material';

import './header.scss';

function Header() {
  return (
    <header className='header'>
      <Container maxWidth='md'>
        <span className='header__3x3'>3x3</span>
        <Typography variant='h1'>Zuiderkempen Diamonds</Typography>
        <Typography color='primary' fontWeight='700'>
          1 Juli 2023
        </Typography>
      </Container>
    </header>
  );
}

export default Header;
