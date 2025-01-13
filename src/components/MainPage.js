import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import Countdown from "./Countdown";
import Ceremony from "./Ceremony";
import Party from "./Party";
import Confirmation from "./Confirmation";
import Detail from "./Detail";
import backgroundImage from "../assets/cabecera.jpg"; // Asegúrate de que la ruta sea correcta
import quotes from "../assets/quotes.png";
import musicFile from "../assets/music.mp3"; // Asegúrate de que la ruta sea correcta
import "../styles.css"; // Asegúrate de importar el CSS aquí
import { THEME_COLORS } from '../theme/colors';

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  background: THEME_COLORS.background,
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Cinzel', serif",
  color: THEME_COLORS.text,
  position: "relative",
});

const BackgroundImageContainer = styled(Box)({
  width: "100vw",
  height: "50vh",
  background: `url(${backgroundImage}) no-repeat center 25%`,
  backgroundSize: "cover",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  position: "relative",
  marginBottom: "-5vh",
  boxShadow: '0 2px 10px rgba(42, 45, 52, 0.15)',
});

const ContentBox = styled(Box)({
  width: "100%",
  padding: "20px",
  marginTop: "20px",
  position: "relative",
});

const AmpersandSymbol = styled(Typography)({
  position: "absolute",
  fontSize: "10rem",
  color: THEME_COLORS.primary,
  opacity: 0.12,
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
});

const DateTypography = styled(Typography)({
  marginTop: "20px",
  padding: "0 10px",
  borderTop: `2px solid ${THEME_COLORS.accent}`,
  borderBottom: `2px solid ${THEME_COLORS.accent}`,
  display: "inline-block",
  color: THEME_COLORS.secondary,
  letterSpacing: "2px",
});

const DateTypographyBottom = styled(Typography)({
  marginTop: "20px",
  padding: "0 10px",
  borderTop: `2px solid ${THEME_COLORS.accent}`,
  borderBottom: `2px solid ${THEME_COLORS.accent}`,
  display: "inline-block",
  color: THEME_COLORS.text,
  opacity: 0.7,
});

const FloatingButton = styled(IconButton)(({ musicPlaying }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: THEME_COLORS.accent,
  color: '#FFFFFF',
  boxShadow: '0 2px 8px rgba(42, 45, 52, 0.2)',
  "&:hover": {
    backgroundColor: THEME_COLORS.buttonHover,
  },
  animation: musicPlaying ? "heartbeat 4.5s infinite" : "none",
}));

const MainPage = () => {
  const [musicPlaying, setMusicPlaying] = React.useState(true);
  const audioRef = React.useRef(new Audio(musicFile));

  React.useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.15;
    if (musicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <MainContainer>
      <BackgroundImageContainer />
      <DateTypography style={{ marginTop: "24%" }} variant="h6">
        31.05.2025
      </DateTypography>
      <ContentBox>
        <AmpersandSymbol>&</AmpersandSymbol>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            position: "relative",
            zIndex: 1,
            marginTop: 2,
            color: THEME_COLORS.secondary,
            textShadow: `2px 2px 4px ${THEME_COLORS.accent}30`,
          }}
        >
          CRISTIAN
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            position: "relative",
            zIndex: 1,
            color: THEME_COLORS.secondary,
            textShadow: `2px 2px 4px ${THEME_COLORS.accent}30`,
          }}
        >
          LIDIA
        </Typography>
      </ContentBox>
      <Box mt={4}>
        <img src={quotes} alt="quotes" width={"40px"} />
        <Typography
          variant="subtitle1"
          sx={{ 
            fontStyle: "italic", 
            position: "relative", 
            zIndex: 1,
            color: THEME_COLORS.text,
            letterSpacing: "0.5px",
          }}
        >
          Necesito que me digas esa frase que tengo que poner aqui algo
        </Typography>
        <img src={quotes} alt="quotes2" width={"40px"} style={{ rotate: "180deg" }} />
      </Box>
      <Countdown eventDate="2025-05-31T19:00" />
      <Ceremony id="ceremony" />
      <Confirmation id="confirmation" />
      <Detail id="detail" />
      <DateTypographyBottom
        style={{ marginTop: "5%", opacity: 0.2, fontSize: 20 }}
        variant="h6"
      >
        27.09.2024
      </DateTypographyBottom>
      <div style={{ marginBottom: "20px" }}></div>
      <FloatingButton musicPlaying={musicPlaying} onClick={toggleMusic}>
        {musicPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </FloatingButton>
    </MainContainer>
  );
};

export default MainPage;
