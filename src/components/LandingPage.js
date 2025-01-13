import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import floralHeader from "../assets/floral_cabecera.png";

const LandingContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "rgb(255, 245, 232)",
  backgroundSize: "cover",
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Cinzel', serif",
  color: "#855D41", // Color marrón cálido
});

const LandingButton = styled(Button)({
  marginTop: "15px",
  backgroundColor: "#d28e79", // Color de fondo del botón
  color: "#fff",
  fontFamily: "'Cinzel', serif",
  "&:hover": {
    backgroundColor: "#b36b53", // Color de fondo del botón al pasar el ratón
  },
});

const BackgroundSymbol = styled(Typography)({
  position: "absolute",
  fontSize: "15rem",
  color: "#855D41",
  opacity: 0.1,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none", // Evitar interferencia con otros elementos
});

const NamesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  marginBottom: "20px", // Añadir espacio debajo de los nombres
});

const NameTypography = styled(Typography)({
  fontSize: "8rem",
  fontFamily: "Cosmopolitan Script, sans-serif",
});

const LandingPage = ({ onEnter }) => {
  return (
    <LandingContainer>
      <>
        <img width={"110%"} alt="floralheader" src={floralHeader} />
        <Typography variant="h5">Bienvenidos a la invitación de</Typography>
        <NamesContainer>
          <BackgroundSymbol variant="h2">&</BackgroundSymbol>
          <NameTypography variant="h3">Cristian</NameTypography>
          <NameTypography variant="h3">Lidia</NameTypography>
        </NamesContainer>
      </>
      <Typography variant="subtitle1">
        La música de fondo es parte de la experiencia
      </Typography>
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
