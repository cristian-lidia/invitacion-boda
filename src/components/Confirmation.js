import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import VerifiedIcon from "@mui/icons-material/Verified";
import busGif from "../assets/bus.gif"; // Asegúrate de que la ruta es correcta
import { launchConfetti } from "./utils/confeti";
import { CardComponent } from "./cards/CardComponent";
import { CardIcon } from "./cards/CardIcon";
import { THEME_COLORS } from "../theme/colors";


const TitleText = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: THEME_COLORS.secondary,
});

const ConfirmButton = styled(Button)({
  backgroundColor: THEME_COLORS.accent,
  color: "#fff",
  width: "80%",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: THEME_COLORS.buttonHover,
  },
});

const ModalContainer = styled(Box)({
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  maxHeight: "90%",
  backgroundColor: THEME_COLORS.background,
  borderRadius: "10px",
  boxShadow: `0 4px 6px ${THEME_COLORS.accent}20`,
  padding: "30px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
});

const ModalContent = styled(Box)({
  overflowY: "auto",
  flexGrow: 1,
  marginTop: "20px", // Space for the close button and icon
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "10px",
  right: "10px",
});

const IconButtonStyled = styled(IconButton)({
  color: THEME_COLORS.accent,
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const VerifiedIconStyled = styled(VerifiedIcon)({
  fontSize: "2rem",
  color: THEME_COLORS.iconColors,
});

const ConfirmationIcon = styled(LocalActivityIcon)({
  fontSize: "2rem",
  color: THEME_COLORS.iconColors,
});

const Confirmation = () => {
  const [needsTransport, setNeedsTransport] = useState(false);
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const handleOpen = () => {
    launchConfetti();
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleClose = () => setOpen(false);

  const phoneNumberFran = process.env.REACT_APP_PHONE_FRAN;
  const phoneNumberLaura = process.env.REACT_APP_PHONE_LAURA;

  const handleSendMessage = (recipient) => {
    const baseMessage = `Confirmación de asistencia${
      needsTransport ? " y necesito transporte" : ""
    }`;
    const whatsappUrl = `https://wa.me/${recipient}?text=${encodeURIComponent(
      baseMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    handleClose();
    launchConfetti(); // Lanza el confeti al confirmar
  };

  useEffect(() => {
    if (needsTransport && contentRef.current) {
      setTimeout(()=> {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }, 1300)
    }
  }, [needsTransport]);

  return (
    <>
      <CardComponent>
        <CardIcon>
          <ConfirmationIcon />
        </CardIcon>
        <TitleText>¡Allí nos vemos!</TitleText>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", color: THEME_COLORS.text }}
        >
          Estamos agradecidos con tu presencia y nos encantará contar con
          vosotros en ese día tan especial.
        </Typography>
        <ConfirmButton onClick={handleOpen}>Confirmar asistencia</ConfirmButton>
      </CardComponent>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <CardIcon>
            <VerifiedIconStyled />
          </CardIcon>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: THEME_COLORS.secondary }}
          >
            ¡Gracias por venir!
          </Typography>
          <ModalContent ref={contentRef}>
            
            <Typography
              variant="h6"
              sx={{ marginBottom: "20px", color: THEME_COLORS.secondary }}
            >
              Confirmar asistencia con ...
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButtonStyled
                onClick={() => handleSendMessage(`${phoneNumberFran}`)}
              >
                <AccountCircleIcon sx={{ fontSize: "4rem" }} />
                <Typography
                  variant="body2"
                  sx={{ color: THEME_COLORS.text, marginTop: "10px" }}
                >
                  Cristian
                </Typography>
              </IconButtonStyled>
              <IconButtonStyled
                onClick={() => handleSendMessage(`${phoneNumberLaura}`)}
              >
                <PersonIcon sx={{ fontSize: "4rem" }} />
                <Typography
                  variant="body2"
                  sx={{ color: THEME_COLORS.text, marginTop: "10px" }}
                >
                  Lidia
                </Typography>
              </IconButtonStyled>
            </Box>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Confirmation;
