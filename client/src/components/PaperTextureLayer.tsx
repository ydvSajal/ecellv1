/* E-Cell Design Direction: Bennett Signal / Editorial Momentum. This shader is used as tactile paper depth, never as a substitute for readable content or event imagery. */
import { PaperTexture } from "@paper-design/shaders-react";

export default function PaperTextureLayer({ variant = "paper", className = "" }: { variant?: "paper" | "global" | "maroon" | "lime"; className?: string }) {
  const values = variant === "global"
    ? { colorBack: "#ffffff", colorFront: "#9fadbc", contrast: 0.3, roughness: 0.4, fiber: 0.3, fiberSize: 0.2, crumples: 0.3, crumpleSize: 0.35, folds: 0.65, foldCount: 5, drops: 0.2, fade: 0, seed: 5.8 }
    : variant === "maroon"
    ? { colorBack: "#44121a", colorFront: "#8e3542", contrast: 0.24, roughness: 0.32, fiber: 0.25, fiberSize: 0.18, crumples: 0.22, crumpleSize: 0.34, folds: 0.42, drops: 0.12, seed: 8.4 }
    : variant === "lime"
      ? { colorBack: "#d9f04a", colorFront: "#b5cd2b", contrast: 0.18, roughness: 0.24, fiber: 0.22, fiberSize: 0.2, crumples: 0.18, crumpleSize: 0.3, folds: 0.28, drops: 0.1, seed: 3.2 }
      : { colorBack: "#f5f1e9", colorFront: "#d8d0c3", contrast: 0.2, roughness: 0.28, fiber: 0.3, fiberSize: 0.2, crumples: 0.2, crumpleSize: 0.35, folds: 0.36, drops: 0.12, seed: 6.1 };

  return <div className={`paper-shader ${className}`} aria-hidden="true"><PaperTexture width="100%" height="100%" fit="cover" scale={0.75} minPixelRatio={1} maxPixelCount={1400000} {...values} /></div>;
}
