import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper, Avatar, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpotifyNowPlaying from './SpotifyNowPlaying';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import StorageIcon from '@mui/icons-material/Storage';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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
        fontFamily: "'Dancing Script', cursive",
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
            marginRight: letter === ' ' ? '0.3em' : '0.0em',
            color: 'inherit'
          }}
          variants={child}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const Home = () => {
  const skills = [
    { name: "Game Development", level: "Advanced", details: "Unity, C#, 2D Games" },
    { name: "Web Backend", level: "Intermediate", details: "Firebase, Database Design, APIs" },
    { name: "Python", level: "Advanced", details: "Task Automation, Scripts, Tools" },
  ];

  const education = {
    school: "High School Student",
    year: "Current",
    achievements: [
      { text: "Self-taught programmer", progress: 90 },
      { text: "Active participation in coding projects", progress: 85 },
      { text: "Strong focus on web development", progress: 95 }
    ]
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1929 0%, #1a1a2e 100%)',
        pt: { xs: 8, md: 12 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Hero Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/77986994?v=4"
                  alt="Profile"
                  sx={{
                    width: 180,
                    height: 180,
                    mb: 4,
                    border: '4px solid rgba(144, 202, 249, 0.2)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  }}
                />
                <Box sx={{ 
                  color: '#fff',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <HandwrittenText text="Hi, I'm Script-hpp" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#90caf9',
                    mb: 3,
                    fontWeight: 500,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Aspiring Software Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#fff',
                    opacity: 0.9,
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  A passionate high school student with a strong foundation in web development
                  and a drive to create impactful applications. Seeking opportunities to grow
                  and contribute to innovative projects.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#projects"
                    sx={{
                      backgroundColor: '#90caf9',
                      color: '#0a1929',
                      '&:hover': {
                        backgroundColor: '#64b5f6',
                      }
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Script-hpp"
                    target="_blank"
                    sx={{
                      borderColor: '#90caf9',
                      color: '#90caf9',
                      '&:hover': {
                        borderColor: '#64b5f6',
                        backgroundColor: 'rgba(144, 202, 249, 0.1)',
                      }
                    }}
                  >
                    GitHub
                  </Button>
                </Stack>
                <Box sx={{ mt: 4 }}>
                  <SpotifyNowPlaying />
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Skills */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  backgroundColor: 'rgba(144, 202, 249, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: '1px solid rgba(144, 202, 249, 0.1)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#90caf9',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <CodeIcon /> Technical Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      label={`${skill.name} - ${skill.level}`}
                      sx={{
                        backgroundColor: 'rgba(144, 202, 249, 0.1)',
                        color: '#fff',
                        border: '1px solid rgba(144, 202, 249, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(144, 202, 249, 0.2)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>

              {/* Education */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotate: [-0.5, 0.5],
                  transition: {
                    rotate: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.3
                    }
                  }
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: 'rgba(144, 202, 249, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid rgba(144, 202, 249, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(144, 202, 249, 0.08)',
                      borderColor: 'rgba(144, 202, 249, 0.2)',
                      boxShadow: '0 8px 32px rgba(144, 202, 249, 0.1)',
                    }
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#90caf9',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: [0, -10, 10, -10, 10, 0],
                            scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 4
                          }}
                        >
                          <SchoolIcon />
                        </motion.div>
                        Education
                      </Typography>
                    </motion.div>
                    <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                      {education.school}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#90caf9', mb: 3 }}>
                      {education.year}
                    </Typography>
                    <Stack spacing={2}>
                      {education.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Box sx={{ mb: 1 }}>
                            <Typography sx={{ 
                              color: '#fff', 
                              opacity: 0.9, 
                              mb: 1,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}>
                              <span>{achievement.text}</span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 + index * 0.2 }}
                                style={{ color: '#90caf9' }}
                              >
                                {achievement.progress}%
                              </motion.span>
                            </Typography>
                            <Box sx={{ 
                              position: 'relative', 
                              height: '6px', 
                              backgroundColor: 'rgba(144, 202, 249, 0.1)', 
                              borderRadius: '3px',
                              overflow: 'hidden'
                            }}>
                              <motion.div
                                initial={{ width: 0, scale: 0.5 }}
                                animate={{ 
                                  width: `${achievement.progress}%`,
                                  scale: 1,
                                }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: 0.5 + index * 0.2,
                                  ease: "easeOut"
                                }}
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  background: 'linear-gradient(90deg, #90caf9, #64b5f6)',
                                  borderRadius: '3px',
                                }}
                              />
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </motion.div>
                </Paper>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
