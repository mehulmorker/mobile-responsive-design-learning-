import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ResponsiveModal({ open, onClose, title, children, actions }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          m: { xs: 0, sm: 2 },
          width: { xs: "100%", sm: "auto" },
          maxHeight: { xs: "100%", sm: "90vh" },
        },
      }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: { xs: "absolute", sm: "relative" },
              right: { xs: 8, sm: 0 },
              top: { xs: 8, sm: 0 },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          padding: { xs: 2, sm: 3 },
          overflowY: "auto",
        }}
      >
        {children}
      </DialogContent>
      {actions && (
        <DialogActions
          sx={{
            padding: { xs: 2, sm: 3 },
            flexDirection: { xs: "column-reverse", sm: "row" },
            gap: { xs: 1, sm: 0 },
            "& > button": {
              width: { xs: "100%", sm: "auto" },
              margin: { xs: "0 !important", sm: "0 8px" },
            },
          }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default ResponsiveModal;


