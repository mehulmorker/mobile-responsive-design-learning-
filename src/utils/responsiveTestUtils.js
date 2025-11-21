/**
 * Utility functions for responsive testing
 */

// Check if element is visible at breakpoint
export const isVisibleAtBreakpoint = (element, breakpoint) => {
  const width = window.innerWidth;
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };

  return width >= breakpoints[breakpoint];
};

// Check touch target size
export const hasAdequateTouchTarget = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.width >= 44 && rect.height >= 44;
};

// Check font size (prevents iOS zoom)
export const hasMinimumFontSize = (element) => {
  const computedStyle = window.getComputedStyle(element);
  const fontSize = parseFloat(computedStyle.fontSize);
  return fontSize >= 16;
};

// Test responsive images
export const testResponsiveImages = () => {
  const images = document.querySelectorAll("img");
  const issues = [];

  images.forEach((img) => {
    if (!img.hasAttribute("alt")) {
      issues.push(`Image missing alt: ${img.src}`);
    }
    if (!img.hasAttribute("loading") && !img.hasAttribute("srcset")) {
      issues.push(`Image not optimized: ${img.src}`);
    }
  });

  return issues;
};

// Check for horizontal scroll
export const hasHorizontalScroll = () => {
  return document.documentElement.scrollWidth > window.innerWidth;
};

// Run all responsive tests
export const runAllResponsiveTests = () => {
  const results = {
    touchTargets: [],
    fontSizes: [],
    images: [],
    horizontalScroll: false,
  };

  // Check touch targets
  document.querySelectorAll("button, a, [role='button']").forEach((el) => {
    if (!hasAdequateTouchTarget(el)) {
      results.touchTargets.push({
        element: el,
        size: {
          width: el.getBoundingClientRect().width,
          height: el.getBoundingClientRect().height,
        },
      });
    }
  });

  // Check font sizes
  document.querySelectorAll("input, textarea").forEach((el) => {
    if (!hasMinimumFontSize(el)) {
      results.fontSizes.push({
        element: el,
        fontSize: window.getComputedStyle(el).fontSize,
      });
    }
  });

  // Check images
  results.images = testResponsiveImages();

  // Check horizontal scroll
  results.horizontalScroll = hasHorizontalScroll();

  return results;
};

