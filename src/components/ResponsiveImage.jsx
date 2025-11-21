import { Box } from "@mui/material";
import { useState } from "react";

function ResponsiveImage({
  src,
  alt,
  aspectRatio = "16/9",
  objectFit = "cover",
  lazy = true,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <Box
        sx={{
          aspectRatio,
          backgroundColor: "grey.200",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.secondary",
        }}
      >
        Image not available
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        backgroundColor: "grey.100",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? "lazy" : "eager"}
        sx={{
          width: "100%",
          height: "100%",
          objectFit,
          transition: "opacity 0.3s ease-in-out",
          opacity: loaded ? 1 : 0,
        }}
        {...props}
      />
      {!loaded && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "grey.200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading...
        </Box>
      )}
    </Box>
  );
}

export default ResponsiveImage;


