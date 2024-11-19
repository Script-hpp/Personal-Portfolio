import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

const HandwrittenText = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h2
      style={{ 
        display: 'flex', 
        overflow: 'hidden', 
        fontSize: 'inherit',
        fontWeight: 'inherit',
        margin: 0,
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ 
            display: 'inline-block',
            marginRight: letter === ' ' ? '0.3em' : '0.1em',
            whiteSpace: 'pre',
          }}
          variants={child}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      url: 'https://github.com/Script-hpp',
      color: '#fff',
      description: 'Check out my projects and contributions'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      url: '#', // Add your LinkedIn URL
      color: '#0077b5',
      description: 'Connect with me professionally'
    },
    {
      name: 'Email',
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      url: 'mailto:your.email@example.com', // Add your email
      color: '#EA4335',
      description: 'Send me an email'
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon sx={{ fontSize: 40 }} />,
      url: 'https://t.me/your_username', // Add your Telegram username
      color: '#0088cc',
      description: 'Message me on Telegram'
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0a1929',
        pt: { xs: 8, md: 12 },
        pb: 8,
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: '#90caf9',
              textAlign: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #90caf9, transparent)'
              }
            }}
          >
            <HandwrittenText text="Let's Connect" />
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              mt: 4,
              mb: 6,
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              maxWidth: '600px'
            }}
          >
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, opportunities, or just having a friendly chat!
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {contactLinks.map((link) => (
            <Grid item xs={12} sm={6} md={3} key={link.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'rgba(144, 202, 249, 0.05)',
                    border: '1px solid rgba(144, 202, 249, 0.1)',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(144, 202, 249, 0.1)',
                    }
                  }}
                >
                  <IconButton
                    component={Link}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: link.color,
                      mb: 2,
                      transform: 'scale(1.2)',
                    }}
                  >
                    {link.icon}
                  </IconButton>
                  <Typography
                    variant="h6"
                    sx={{
                      color: link.color,
                      mb: 1,
                      textAlign: 'center'
                    }}
                  >
                    {link.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textAlign: 'center'
                    }}
                  >
                    {link.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
