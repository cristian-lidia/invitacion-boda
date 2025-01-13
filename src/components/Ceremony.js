import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import DirectionsIcon from '@mui/icons-material/Directions';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CardComponent } from './cards/CardComponent';
import { CardIcon } from './cards/CardIcon';
import { THEME_COLORS } from '../theme/colors';

const CeremonyIcon = styled(EventAvailableIcon)({
  fontSize: '2rem',
  color: THEME_COLORS.iconColors,
});

const Section = styled(Box)({
  marginBottom: '20px',
});

const Ceremony = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: 'Boda Cristian y Lidia - Torre la mina',
      start: '2025-05-31T19:00:00',
      end: '2025-06-01T04:30:00',
      location: 'Camí la regenta 1, 12539 Les Alqueries, Castellón - Torre la mina',
    };

    const calendarUrl = new URL('https://www.google.com/calendar/render');
    calendarUrl.searchParams.append('action', 'TEMPLATE');
    calendarUrl.searchParams.append('text', event.title);
    calendarUrl.searchParams.append('dates', `${event.start.replace(/-|:|\.\d\d\d/g, '')}/${event.end.replace(/-|:|\.\d\d\d/g, '')}`);
    calendarUrl.searchParams.append('location', event.location);

    window.open(calendarUrl.toString(), '_blank');
  };

  return (
    <CardComponent>
      <CardIcon>
        <CeremonyIcon />
      </CardIcon>
      <Section marginTop={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: THEME_COLORS.secondary }}>
          DÍA
        </Typography>
        <Typography variant="body1" sx={{ color: THEME_COLORS.text }}>
          Viernes 31 de Mayo - 19:00h
        </Typography>
        <Button
          variant="contained"
          sx={{ 
            marginTop: '10px', 
            backgroundColor: THEME_COLORS.accent, 
            color: '#fff', 
            width: '80%',
            '&:hover': {
              backgroundColor: THEME_COLORS.buttonHover,
            }
          }}
          onClick={handleAddToCalendar}
          startIcon={<AddAlarmIcon />}
        >
          Agendar
        </Button>
      </Section>
      <Section marginTop={5}>
        <LocationOnIcon sx={{ color: THEME_COLORS.accent, fontSize: '2rem', marginBottom: '10px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: THEME_COLORS.secondary }}>
          LUGAR
        </Typography>
        <Typography variant="body1" sx={{ color: THEME_COLORS.text }}>
          Torre la mina
        </Typography>
        <Typography variant="body1" sx={{ color: THEME_COLORS.text }}>
          Camí la regenta 1
        </Typography>
        <Typography variant="body1" sx={{ color: THEME_COLORS.text }}>
          12539 Les Alqueries, Castellón
        </Typography>
        <Button
          variant="contained"
          sx={{ 
            marginTop: '10px', 
            backgroundColor: THEME_COLORS.accent, 
            color: '#fff', 
            width: '80%',
            '&:hover': {
              backgroundColor: THEME_COLORS.buttonHover,
            }
          }}
          href="https://www.google.es/maps/place/Torre+la+Mina/@39.8924843,-0.12692,17z/data=!3m1!4b1!4m9!3m8!1s0xd60043a2b7783e7:0x8913c54510e6a906!5m2!4m1!1i2!8m2!3d39.8924843!4d-0.1243397!16s%2Fg%2F1tdjybqb?hl=es&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<DirectionsIcon />}
        >
          Cómo llegar
        </Button>
      </Section>
    </CardComponent>
  );
};

export default Ceremony;
