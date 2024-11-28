import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Box } from '@mui/material';

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      sx={{ 
        position: 'fixed', 
        top: 0, 
        backgroundColor: '#f5f5f5', 
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ marginTop: '5px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography 
            variant="h3" 
            sx={{ color: 'black', fontFamily: 'Quicksand, sans-serif', cursor: 'pointer' }} 
            onClick={() => scrollToSection('home-section')} 
          >
            FireAlert
          </Typography>
      
          <Box
            sx={{
              display: 'flex',
              gap: '40px',
            }}
          >
            <Button
              onClick={() => scrollToSection('charts-section')}
              sx={{
                color: 'black',
                fontFamily: 'Quicksand, sans-serif',
                padding: '16px 32px',
                fontSize: '20px',
              }}
            >
              Gráficos
            </Button>
            <Button
              onClick={() => scrollToSection('product-section')}
              sx={{
                color: 'black',
                fontFamily: 'Quicksand, sans-serif',
                padding: '16px 32px',
                fontSize: '20px',
              }}
            >
              Produto
            </Button>

            <Button
              onClick={() => scrollToSection('Código')}
              sx={{
                color: 'black',
                fontFamily: 'Quicksand, sans-serif',
                padding: '16px 32px',
                fontSize: '20px',
              }}
            >
              Código
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
