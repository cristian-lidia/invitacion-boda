import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { THEME_COLORS } from '../theme/colors';

const CountdownContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  boxShadow: `0 4px 6px ${THEME_COLORS.accent}20`,
  margin: '20px 0',
  width: '250px',
  height: '250px',
  position: 'relative',
  textAlign: 'center',
});

const TimeContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '10px',
});

const TimeBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Separator = styled(Typography)({
  fontSize: '1.5rem',
  color: THEME_COLORS.primary,
  margin: '0 5px',
});

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-05-31T19:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <CountdownContainer>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: THEME_COLORS.secondary }}>
        Falta
      </Typography>
      <TimeContainer>
        <TimeBox>
          <Typography variant="h4" sx={{ color: THEME_COLORS.buttonColor, fontWeight: 'bold' }}>
            {timeLeft.days}
          </Typography>
          <Typography variant="caption" sx={{ color: THEME_COLORS.text }}>
            días
          </Typography>
        </TimeBox>
        <Separator>|</Separator>
        <TimeBox>
          <Typography variant="h4" sx={{ color: THEME_COLORS.buttonColor, fontWeight: 'bold' }}>
            {timeLeft.hours}
          </Typography>
          <Typography variant="caption" sx={{ color: THEME_COLORS.text }}>
            hs
          </Typography>
        </TimeBox>
        <Separator>|</Separator>
        <TimeBox>
          <Typography variant="h4" sx={{ color: THEME_COLORS.buttonColor, fontWeight: 'bold' }}>
            {timeLeft.minutes}
          </Typography>
          <Typography variant="caption" sx={{ color: THEME_COLORS.text }}>
            min
          </Typography>
        </TimeBox>
        <Separator>|</Separator>
        <TimeBox>
          <Typography variant="h4" sx={{ color: THEME_COLORS.buttonColor, fontWeight: 'bold' }}>
            {timeLeft.seconds}
          </Typography>
          <Typography variant="caption" sx={{ color: THEME_COLORS.text }}>
            seg
          </Typography>
        </TimeBox>
      </TimeContainer>
    </CountdownContainer>
  );
};

export default Countdown;
