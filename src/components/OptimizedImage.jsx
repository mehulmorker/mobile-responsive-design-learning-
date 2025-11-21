import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";

function OptimizedImage({
  src,
  alt,
  aspectRatio = "16/9",
  objectFit = "cover",
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority || loaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" } // Start loading 50px before visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loaded]);

  return (
    <Box
      ref={imgRef}
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        backgroundColor: "grey.100",
      }}
    >
      {inView && (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit,
            transition: "opacity 0.3s",
            opacity: loaded ? 1 : 0,
          }}
        />
      )}
    </Box>
  );
}

export default OptimizedImage;


