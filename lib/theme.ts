import { borderRadius } from "tailwindcss/defaultTheme";

const tailwindTheme = {
  transitionProperty: {
    activatable:
      "color, background-color, border-color, text-decoration-color, fill, stroke, transform",
  },
  borderRadius: {
    main: borderRadius.full,
    card: borderRadius.md,
  },
};

export { tailwindTheme };
