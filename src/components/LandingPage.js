import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import floralHeader from "../assets/floral_cabecera.png";
import { THEME_COLORS } from '../theme/colors';

const LandingContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: THEME_COLORS.background,
  backgroundSize: "cover",
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Cinzel', serif",
  color: THEME_COLORS.text,
});

const LandingButton = styled(Button)({
  marginTop: "15px",
  backgroundColor: THEME_COLORS.buttonColor,
  color: '#FFFFFF',
  fontFamily: "'Cinzel', serif",
  padding: "10px 30px",
  boxShadow: '0 2px 8px rgba(42, 45, 52, 0.15)',
  "&:hover": {
    backgroundColor: THEME_COLORS.buttonHover,
  },
});

const BackgroundSymbol = styled(Typography)({
  position: "absolute",
  fontSize: "15rem",
  color: THEME_COLORS.primary,
  opacity: 0.12,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
});

const NamesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  marginBottom: "20px",
});

const NameTypography = styled(Typography)({
  fontSize: "8rem",
  fontFamily: "Cosmopolitan Script, sans-serif",
  color: THEME_COLORS.secondary,
  textShadow: `2px 2px 4px ${THEME_COLORS.accent}30`,
  letterSpacing: "1px",
});

// Para los textos generales
const StyledTypography = styled(Typography)({
  color: THEME_COLORS.text,
  letterSpacing: "0.5px",
});

const LandingPage = ({ onEnter }) => {
  return (
    <LandingContainer>
      <>
        <StyledTypography variant="h5">Bienvenidos a la invitación de</StyledTypography>
        <NamesContainer>
          <BackgroundSymbol variant="h2">&</BackgroundSymbol>
          <NameTypography variant="h3">Cristian</NameTypography>
          <NameTypography variant="h3">Lidia</NameTypography>
        </NamesContainer>
      </>
      <StyledTypography variant="subtitle1">
        La música de fondo es parte de la experiencia
      </StyledTypography>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LandingButton variant="contained" onClick={onEnter}>
          Entrar
        </LandingButton>
      </motion.div>
    </LandingContainer>
  );
};

export default LandingPage;
