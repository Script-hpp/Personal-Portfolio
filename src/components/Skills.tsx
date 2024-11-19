import React from 'react';
import { Box, Container, Grid, Typography, Paper, LinearProgress, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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

const skillCategories = [
  {
    title: "Game Development",
    icon: <SportsEsportsIcon sx={{ fontSize: 40, color: '#90caf9' }} />,
    skills: [
      { name: "Unity Engine", level: 70, tags: ["2D Games", "C#", "Physics"] },
      { name: "C# Programming", level: 70, tags: ["Game Logic", "Unity API", "OOP"] },
      { name: "Game Design", level: 65, tags: ["Level Design", "Mechanics", "UI/UX"] }
    ]
  },
  {
    title: "Backend Development",
    icon: <StorageIcon sx={{ fontSize: 40, color: '#90caf9' }} />,
    skills: [
      { name: "Firebase", level: 80, tags: ["Firestore", "Authentication", "Cloud Functions"] },
      { name: "Database Design", level: 75, tags: ["NoSQL", "Data Modeling", "Real-time DB"] },
      { name: "API Development", level: 70, tags: ["REST", "Backend Services", "Security"] }
    ]
  },
  {
    title: "Python Development",
    icon: <CodeIcon sx={{ fontSize: 40, color: '#90caf9' }} />,
    skills: [
      { name: "Task Automation", level: 75, tags: ["Scripts", "Workflow Optimization", "Batch Processing"] },
      { name: "Python Libraries", level: 70, tags: ["Pandas", "Requests", "Automation Tools"] },
      { name: "Problem Solving", level: 80, tags: ["Algorithms", "Debug", "Process Optimization"] }
    ]
  },
  {
    title: "Development Tools",
    icon: <BuildIcon sx={{ fontSize: 40, color: '#90caf9' }} />,
    skills: [
      { name: "Version Control", level: 75, tags: ["Git", "GitHub", "Collaboration"] },
      { name: "IDE & Tools", level: 80, tags: ["VS Code", "Unity Editor", "Firebase Console"] },
      { name: "Testing & Debug", level: 70, tags: ["Unit Testing", "Debugging", "Performance"] }
    ]
  }
];

const Skills = () => {
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
            <HandwrittenText text="Skills & Expertise" />
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={categoryIndex}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'rgba(144, 202, 249, 0.05)',
                  border: '1px solid rgba(144, 202, 249, 0.1)',
                  borderRadius: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {category.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 2,
                      color: '#fff',
                      fontWeight: 600
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: '#fff', fontWeight: 500 }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#90caf9' }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 1.5 }}>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: 'rgba(144, 202, 249, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: 'linear-gradient(90deg, #90caf9, #64b5f6)'
                            }
                          }}
                        />
                      </Box>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          flexWrap: 'wrap',
                          gap: 1
                        }}
                      >
                        {skill.tags.map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(144, 202, 249, 0.05)',
                              color: '#fff',
                              border: '1px solid rgba(144, 202, 249, 0.1)'
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
