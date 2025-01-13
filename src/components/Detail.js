import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  IconButton,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { CardComponent } from "./cards/CardComponent";
import { CardIcon } from "./cards/CardIcon";
import { THEME_COLORS } from "../theme/colors";

const ThankYouText = styled(Typography)({
  color: THEME_COLORS.text,
});

const DetailButton = styled(Button)({
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
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  backgroundColor: THEME_COLORS.background,
  borderRadius: "10px",
  boxShadow: `0 4px 6px ${THEME_COLORS.accent}20`,
  padding: "30px",
  textAlign: "center",
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "10px",
  right: "10px",
  color: THEME_COLORS.text,
});

const CopyMessage = styled(Typography)({
  color: THEME_COLORS.primary,
  fontSize: "0.8rem",
  marginTop: "10px",
});

const GiftIcon = styled(CardGiftcardIcon)({
  fontSize: "2rem",
  color: THEME_COLORS.iconColors,
});

const TitleText = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginTop: "2px",
  color: THEME_COLORS.secondary,
});

const Detail = () => {
  const [open, setOpen] = useState(false);
  const [accountNumber] = useState(process.env.REACT_APP_ACCOUNT_NUMBER || "");
  const [copyMessage, setCopyMessage] = useState("");

  const formattedAccountNumber = accountNumber.replace(/(.{4})/g, "$1 ");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopyMessage("Número de cuenta copiado al portapapeles");
    setTimeout(() => setCopyMessage(""), 3000);
  };

  return (
    <>
      <CardComponent>
        <TitleText>Detalle</TitleText>
        <CardIcon>
          <GiftIcon />
        </CardIcon>
        <ThankYouText></ThankYouText>
        <DetailButton onClick={handleOpen}>Más información</DetailButton>
      </CardComponent>
      <br />
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <CardIcon>
            <GiftIcon />
          </CardIcon>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: THEME_COLORS.secondary, marginBottom: "20px" }}
          >
            Nuestro mayor regalo es vuestra presencia
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", color: THEME_COLORS.text }}
          >
            Y, si en el caso, quieres tener un detalle con nosotros, puedes
            aportar aquí:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              fontSize="small"
              variant="outlined"
              value={formattedAccountNumber}
              InputProps={{ 
                readOnly: true,
                sx: { color: THEME_COLORS.text }
              }}
              sx={{
                fontSize: "0.875rem",
                whiteSpace: "normal",
                wordBreak: "break-all",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: `${THEME_COLORS.accent}40`,
                  },
                  '&:hover fieldset': {
                    borderColor: THEME_COLORS.accent,
                  },
                },
              }}
              multiline
            />
            <IconButton 
              onClick={handleCopyAccountNumber}
              sx={{ color: THEME_COLORS.accent }}
            >
              <FileCopyIcon />
            </IconButton>
          </Box>
          {copyMessage && <CopyMessage>{copyMessage}</CopyMessage>}
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Detail;
