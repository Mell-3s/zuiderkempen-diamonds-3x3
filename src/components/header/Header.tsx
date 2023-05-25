import { Container, Typography } from '@mui/material';

import './header.scss';

function Header() {
  return (
    <header className='header'>
      <Container maxWidth='md'>
        <span className='header__3x3'>3x3</span>
        <Typography variant='h1'>Zuiderkempen Diamonds</Typography>
        <span className='header__date'>1 Juli 2023</span>
      </Container>
    </header>
  );
}

export default Header;
