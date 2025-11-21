import { Box } from "@mui/material";

function ResponsiveImageWithSrcset({
  srcSet,
  sizes,
  alt,
  aspectRatio = "16/9",
  objectFit = "cover",
  ...props
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          objectFit,
        }}
        {...props}
      />
    </Box>
  );
}

export default ResponsiveImageWithSrcset;


