import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Link, Box, Chip, Stack, IconButton, useTheme, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import GamepadIcon from '@mui/icons-material/Gamepad';
import TimelineIcon from '@mui/icons-material/Timeline';

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
        color: 'inherit'
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block' }}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const Projects = () => {
  const theme = useTheme();
  
  const projects = [
    {
      title: "Rhythm Platformer Adventure",
      description: "A unique 2D platformer that combines precise rhythm-based mechanics with platforming challenges. Players must sync their movements and actions with the beat of the music while navigating through dynamically changing levels. Built with Unity and C#, featuring custom audio visualization and beat detection systems.",
      image: "/game-preview.png",
      technologies: [
        "Unity",
        "C#",
        "Audio Programming",
        "2D Animation",
        "Rhythm System",
        "Level Design",
        "Particle Systems",
        "Audio Visualization"
      ],
      highlights: [
        "Beat-synced gameplay",
        "Dynamic level generation",
        "Custom audio system",
        "Responsive controls"
      ],
      gameFeatures: [
        {
          title: "Rhythm System",
          description: "Custom-built beat detection and rhythm scoring system that synchronizes player actions with the music. Features visual beat indicators and performance scoring.",
          status: "Completed",
          icon: "🎵"
        },
        {
          title: "Platform Mechanics",
          description: "Responsive platforming controls with beat-matched jumping, dashing, and special moves. Platforms and obstacles move and transform with the music.",
          status: "Completed",
          icon: "⚡"
        },
        {
          title: "Music Integration",
          description: "Dynamic audio system that affects gameplay elements, with real-time beat visualization and audio-reactive environments.",
          status: "In Progress",
          icon: "🎹"
        },
        {
          title: "Level System",
          description: "Multiple stages with increasing rhythm complexity and platforming challenges, featuring different musical genres and themes.",
          status: "In Progress",
          icon: "🎮"
        }
      ],
      developmentProgress: [
        {
          phase: "Core Mechanics",
          progress: 85,
          description: "Beat detection, player movement, and rhythm synchronization",
          features: ["Beat tracking", "Jump mechanics", "Rhythm scoring", "Movement sync"]
        },
        {
          phase: "Level Design",
          progress: 70,
          description: "Music-driven level creation and obstacle patterns",
          features: ["Beat-synced platforms", "Dynamic obstacles", "Rhythm patterns", "Checkpoint system"]
        },
        {
          phase: "Audio System",
          progress: 60,
          description: "Music integration and audio visualization",
          features: ["Beat detection", "Audio visualization", "Dynamic music", "Sound effects"]
        },
        {
          phase: "Visual Effects",
          progress: 40,
          description: "Particle systems and rhythm-based animations",
          features: ["Beat indicators", "Movement trails", "Audio-reactive effects", "Background animations"]
        }
      ]
    },
    {
      title: "MCU Movie Advisor",
      description: "A web application that helps users discover Marvel Cinematic Universe (MCU) movies based on their preferences. Built with React and Material-UI, featuring a recommendation system and detailed movie information.",
      image: "https://raw.githubusercontent.com/Script-hpp/mcu-movie-advisor/main/public/screenshot.png",
      githubLink: "https://github.com/Script-hpp/mcu-movie-advisor",
      liveLink: "https://mcu-movie-advisor.vercel.app/",
      technologies: ["React", "Material-UI", "JavaScript", "Vercel"],
      highlights: [
        "Personalized recommendations",
        "Detailed movie info",
        "Interactive UI",
        "Filter system"
      ],
      features: [
        {
          title: "Smart Recommendations",
          description: "Advanced filtering system that suggests MCU movies based on user preferences, genres, and timeline placement.",
          status: "Completed",
          icon: "🎬"
        },
        {
          title: "Movie Timeline",
          description: "Interactive MCU timeline showing chronological and release order, helping users understand the interconnected storylines.",
          status: "Completed",
          icon: "📅"
        },
        {
          title: "Character Database",
          description: "Comprehensive database of MCU characters with appearances, relationships, and key story arcs.",
          status: "In Progress",
          icon: "👥"
        },
        {
          title: "Watch Progress",
          description: "Personal watch list and progress tracking for MCU movies and TV shows.",
          status: "In Progress",
          icon: "✨"
        }
      ],
      appFeatures: [
        {
          name: "Movie Discovery",
          progress: 100,
          description: "Find MCU movies based on preferences",
          details: ["Genre filtering", "Timeline sorting", "Rating system"]
        },
        {
          name: "User Interface",
          progress: 90,
          description: "Modern, responsive design",
          details: ["Dark theme", "Animations", "Mobile-friendly"]
        },
        {
          name: "Movie Details",
          progress: 85,
          description: "Comprehensive movie information",
          details: ["Cast info", "Plot synopsis", "Related movies"]
        },
        {
          name: "Search System",
          progress: 75,
          description: "Advanced search capabilities",
          details: ["Character search", "Timeline search", "Keyword search"]
        }
      ]
    },
    {
      title: "SortSmart",
      description: "An innovative waste classification system leveraging computer vision and deep learning to identify recyclable materials in real-time. Features include instant material detection (plastic, glass, metal), recycling guidelines, and environmental impact tracking. Built as a school project to promote sustainable waste management and environmental awareness.",
      image: "https://sortsmart.netlify.app/assets/logo.svg",
      liveLink: "https://sortsmart.netlify.app/",
      technologies: [
        "TensorFlow.js",
        "React",
        "Computer Vision",
        "Material-UI",
        "WebRTC",
        "TypeScript",
        "Python",
        "TensorFlow"
      ],
      highlights: [
        "Real-time classification",
        "Custom ML model training",
        "Camera integration",
        "Responsive design"
      ],
      features: [
        {
          title: "Material Detection",
          description: "Real-time identification of recyclable materials using computer vision and deep learning, with support for plastic, glass, metal, and paper.",
          status: "Completed",
          icon: "🔍"
        },
        {
          title: "Environmental Impact",
          description: "Track and visualize the environmental impact of recycling efforts, including CO2 savings and waste reduction metrics.",
          status: "Completed",
          icon: "🌱"
        },
        {
          title: "Recycling Guidelines",
          description: "Detailed instructions and best practices for recycling different materials, with location-specific recommendations.",
          status: "In Progress",
          icon: "📋"
        },
        {
          title: "Community Features",
          description: "Social features allowing users to share their recycling achievements and compete in eco-friendly challenges.",
          status: "In Progress",
          icon: "🤝"
        }
      ],
      appFeatures: [
        {
          name: "ML Model",
          progress: 95,
          description: "Deep learning model for material classification",
          details: ["TensorFlow.js", "Custom dataset", "Real-time inference", "Model optimization"]
        },
        {
          name: "Camera System",
          progress: 90,
          description: "Real-time camera feed and processing",
          details: ["WebRTC", "Image processing", "Frame optimization"]
        },
        {
          name: "Analytics Dashboard",
          progress: 80,
          description: "Environmental impact visualization",
          details: ["Charts", "Statistics", "Progress tracking"]
        },
        {
          name: "User Experience",
          progress: 85,
          description: "Intuitive interface and feedback system",
          details: ["Material UI", "Responsive design", "Accessibility"]
        }
      ]
    },
  ];

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
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              <HandwrittenText text="My Projects" />
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  component={motion.div}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.2
                  }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(144, 202, 249, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid rgba(144, 202, 249, 0.1)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
                      border: '1px solid rgba(144, 202, 249, 0.3)',
                      '& .project-image': {
                        transform: 'scale(1.08) rotate(-1deg)'
                      },
                      '& .project-overlay': {
                        opacity: 0.95
                      }
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                      className="project-image"
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(10, 25, 41, 0) 0%, rgba(10, 25, 41, 0.8) 100%)',
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: '#90caf9',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      {project.title === "Rhythm Platformer Adventure" ? <GamepadIcon /> : <CodeIcon />}
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#fff',
                        opacity: 0.9,
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {project.description}
                    </Typography>

                    {project.gameFeatures && (
                      <Box sx={{ mb: 4 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#90caf9',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontWeight: 600
                          }}
                        >
                          <GamepadIcon /> Game Features
                        </Typography>
                        <Grid container spacing={2}>
                          {project.gameFeatures.map((feature, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 25,
                                  delay: 0.2 + (i * 0.1)
                                }}
                              >
                                <Box
                                  sx={{
                                    p: 2,
                                    backgroundColor: 'rgba(144, 202, 249, 0.05)',
                                    borderRadius: 2,
                                    border: '1px solid rgba(144, 202, 249, 0.1)',
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                      backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                      transform: 'translateY(-4px)',
                                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }
                                  }}
                                >
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                                    <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                                      {feature.icon}
                                    </Typography>
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        color: '#90caf9',
                                        fontWeight: 600
                                      }}
                                    >
                                      {feature.title}
                                    </Typography>
                                  </Box>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: '#fff',
                                      opacity: 0.8,
                                      mb: 1
                                    }}
                                  >
                                    {feature.description}
                                  </Typography>
                                  <Chip
                                    label={feature.status}
                                    size="small"
                                    sx={{
                                      backgroundColor: feature.status === 'Completed' 
                                        ? 'rgba(76, 175, 80, 0.1)' 
                                        : 'rgba(255, 152, 0, 0.1)',
                                      color: feature.status === 'Completed' 
                                        ? '#4caf50' 
                                        : '#ff9800',
                                      border: `1px solid ${
                                        feature.status === 'Completed' 
                                          ? 'rgba(76, 175, 80, 0.2)' 
                                          : 'rgba(255, 152, 0, 0.2)'
                                      }`
                                    }}
                                  />
                                </Box>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}

                    {project.developmentProgress && (
                      <Box sx={{ mb: 4 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#90caf9',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontWeight: 600
                          }}
                        >
                          <TimelineIcon /> Development Progress
                        </Typography>
                        <Stack spacing={2}>
                          {project.developmentProgress.map((phase, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.8 + (i * 0.2)
                              }}
                            >
                              <Box sx={{ mb: 2 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 0.5
                                  }}
                                >
                                  <span>{phase.phase}</span>
                                  <span style={{ color: '#90caf9' }}>{phase.progress}%</span>
                                </Typography>
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 1, delay: 1 + (i * 0.2) }}
                                >
                                  <LinearProgress
                                    variant="determinate"
                                    value={phase.progress}
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
                                </motion.div>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: '#fff',
                                    opacity: 0.7,
                                    mt: 0.5,
                                    display: 'block'
                                  }}
                                >
                                  {phase.description}
                                </Typography>
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  sx={{
                                    mt: 1,
                                    flexWrap: 'wrap',
                                    gap: 1
                                  }}
                                >
                                  {phase.features.map((feature, fi) => (
                                    <Chip
                                      key={fi}
                                      label={feature}
                                      size="small"
                                      sx={{
                                        backgroundColor: 'rgba(144, 202, 249, 0.05)',
                                        color: '#fff',
                                        border: '1px solid rgba(144, 202, 249, 0.1)',
                                        '&:hover': {
                                          backgroundColor: 'rgba(144, 202, 249, 0.1)'
                                        }
                                      }}
                                    />
                                  ))}
                                </Stack>
                              </Box>
                            </motion.div>
                          ))}
                        </Stack>
                      </Box>
                    )}

                    {project.features && (
                      <Box sx={{ mb: 4 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#90caf9',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontWeight: 600
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
                            {project.title.includes("MCU") ? "🎬" : "🎮"}
                          </motion.div>
                          Key Features
                        </Typography>
                        <Grid container spacing={2}>
                          {project.features.map((feature, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 25,
                                  delay: 0.2 + (i * 0.1)
                                }}
                              >
                                <Box
                                  sx={{
                                    p: 2,
                                    backgroundColor: 'rgba(144, 202, 249, 0.05)',
                                    borderRadius: 2,
                                    border: '1px solid rgba(144, 202, 249, 0.1)',
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                      backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                      transform: 'translateY(-4px)',
                                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }
                                  }}
                                >
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                                    <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                                      {feature.icon}
                                    </Typography>
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        color: '#90caf9',
                                        fontWeight: 600
                                      }}
                                    >
                                      {feature.title}
                                    </Typography>
                                  </Box>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: '#fff',
                                      opacity: 0.8,
                                      mb: 1
                                    }}
                                  >
                                    {feature.description}
                                  </Typography>
                                  <Chip
                                    label={feature.status}
                                    size="small"
                                    sx={{
                                      backgroundColor: feature.status === 'Completed' 
                                        ? 'rgba(76, 175, 80, 0.1)' 
                                        : 'rgba(255, 152, 0, 0.1)',
                                      color: feature.status === 'Completed' 
                                        ? '#4caf50' 
                                        : '#ff9800',
                                      border: `1px solid ${
                                        feature.status === 'Completed' 
                                          ? 'rgba(76, 175, 80, 0.2)' 
                                          : 'rgba(255, 152, 0, 0.2)'
                                      }`
                                    }}
                                  />
                                </Box>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}

                    {project.appFeatures && (
                      <Box sx={{ mb: 4 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#90caf9',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontWeight: 600
                          }}
                        >
                          Development Progress
                        </Typography>
                        <Stack spacing={2}>
                          {project.appFeatures.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.8 + (i * 0.2)
                              }}
                            >
                              <Box sx={{ mb: 2 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 0.5
                                  }}
                                >
                                  <span>{feature.name}</span>
                                  <span style={{ color: '#90caf9' }}>{feature.progress}%</span>
                                </Typography>
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 1, delay: 1 + (i * 0.2) }}
                                >
                                  <LinearProgress
                                    variant="determinate"
                                    value={feature.progress}
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
                                </motion.div>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: '#fff',
                                    opacity: 0.7,
                                    mt: 0.5,
                                    display: 'block'
                                  }}
                                >
                                  {feature.description}
                                </Typography>
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  sx={{
                                    mt: 1,
                                    flexWrap: 'wrap',
                                    gap: 1
                                  }}
                                >
                                  {feature.details.map((detail, di) => (
                                    <Chip
                                      key={di}
                                      label={detail}
                                      size="small"
                                      sx={{
                                        backgroundColor: 'rgba(144, 202, 249, 0.05)',
                                        color: '#fff',
                                        border: '1px solid rgba(144, 202, 249, 0.1)',
                                        '&:hover': {
                                          backgroundColor: 'rgba(144, 202, 249, 0.1)'
                                        }
                                      }}
                                    />
                                  ))}
                                </Stack>
                              </Box>
                            </motion.div>
                          ))}
                        </Stack>
                      </Box>
                    )}

                    {project.highlights && (
                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#90caf9',
                            mb: 1,
                            fontWeight: 600
                          }}
                        >
                          Key Features:
                        </Typography>
                        <Stack 
                          direction="row" 
                          spacing={1} 
                          sx={{ 
                            flexWrap: 'wrap', 
                            gap: 1
                          }}
                        >
                          {project.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.8 + (i * 0.1)
                              }}
                            >
                              <Chip
                                label={highlight}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(144, 202, 249, 0.15)',
                                  color: '#fff',
                                  border: '1px solid rgba(144, 202, 249, 0.3)',
                                  transition: 'all 0.2s ease-in-out',
                                  '&:hover': {
                                    backgroundColor: 'rgba(144, 202, 249, 0.25)',
                                    transform: 'translateY(-2px) scale(1.05)'
                                  }
                                }}
                              />
                            </motion.div>
                          ))}
                        </Stack>
                      </Box>
                    )}

                    <Stack 
                      direction="row" 
                      spacing={1} 
                      sx={{ 
                        flexWrap: 'wrap', 
                        gap: 1, 
                        mb: 3 
                      }}
                    >
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            delay: 0.5 + (i * 0.1)
                          }}
                        >
                          <Chip
                            label={tech}
                            size="small"
                            icon={<CodeIcon sx={{ color: '#90caf9' }} />}
                            sx={{
                              backgroundColor: 'rgba(144, 202, 249, 0.1)',
                              color: '#fff',
                              border: '1px solid rgba(144, 202, 249, 0.2)',
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                backgroundColor: 'rgba(144, 202, 249, 0.2)',
                                transform: 'translateY(-3px) scale(1.1)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>

                    <Box sx={{
                      display: 'flex',
                      gap: 2,
                      justifyContent: 'flex-end'
                    }}>
                      {project.githubLink && (
                        <IconButton 
                          component={Link}
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener"
                          sx={{
                            color: '#90caf9',
                            '&:hover': {
                              backgroundColor: 'rgba(144, 202, 249, 0.1)',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      )}
                      <IconButton
                        component={Link}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: '#90caf9',
                          '&:hover': {
                            backgroundColor: 'rgba(144, 202, 249, 0.1)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
