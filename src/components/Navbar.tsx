import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        background: 'rgba(10, 25, 41, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(144, 202, 249, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              component={Link} 
              to="/"
              sx={{ 
                flexGrow: 1,
                textDecoration: 'none',
                color: '#90caf9',
                fontWeight: 700,
                fontSize: '1.5rem'
              }}
            >
              Portfolio
            </Typography>
          </motion.div>
          
          <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? '#90caf9' : '#fff',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: '#90caf9',
                      transition: 'width 0.3s ease-in-out'
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      '&:after': {
                        width: '100%'
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
