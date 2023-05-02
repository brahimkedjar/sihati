import { Box, Grid, Typography, AppBar, Toolbar, IconButton, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from "react";
import React from 'react';
import styles from '../css/Appointments.module.css';

function Appointments() {
  const [filteredTexts, setFilteredTexts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/notification_doctor');
        const data = await response.json();
        setFilteredTexts(data.notifications);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" align="center" color="textSecondary">
          Loading...
        </Typography>
      </Box>
    )
  }

  return (
    <div className={styles.root2}>
    <Box sx={{ bgcolor: 'transparent', minHeight: '100vh', pb: 10 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>

        </Toolbar>
      </AppBar>
      <Container sx={{ paddingTop: '10px', paddingBottom: '30px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <img src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png" alt="Calendar" style={{ height: '360px', width: '360px' }} />
        </Box>
        <Grid container spacing={3} sx={{ marginTop: '30px' }}>
          {Object.entries(filteredTexts).map(([key, value]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              {value && (
                <Box sx={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px -1px 15px 0px rgba(0,0,0,0.08)', padding: '16px' }}>
                  <Typography variant="body2" color="textSecondary">
                    Avec groupe
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {value.group_id}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ScheduleIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                      <Typography variant="caption" color="textSecondary">
                        {value.appointment_date}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
<LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
<Typography variant="caption" color="textSecondary">
{value.place}
</Typography>
</Box>
</Box>
</Box>
</Box>
)}
</Grid>
))}
</Grid>
</Container>
</Box>
</div>
);
}

export default Appointments;
