import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'linear-gradient(135deg, rgba(24,42,115,0.9), rgba(33,138,174,0.9))',
        backdropFilter: 'blur(12px)',
      }}>
      <Box sx={{
        display: 'flex', alignContent: 'center', alignItems: 'center',
        color: 'white', gap: 3
      }}
      >
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1">
          Reactivities
        </Typography>
      </Box>
      <Typography variant="h2">
        Welcome to reactivities
      </Typography>
      <Button
        component={Link}
        to='/activities'
        size="large"
        variant="contained"
        sx={{ height: 80, borderRadius: 4, fontSize: '1.5rem' }}
      >
        Take me to the activities!
      </Button>
    </Paper>
  )
}