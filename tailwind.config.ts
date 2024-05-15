import type { Config } from "tailwindcss";
import { withMaterialColors } from "tailwind-material-colors";
import { tailwindTheme } from "./lib/tailwindTheme";

const config: Config = {
  content: ["./index.html", "./lib/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      ...tailwindTheme,
    },
  },
  plugins: [],
};

export default withMaterialColors(config, { primary: "#445942" }, {
  scheme: "tonalSpot",
} as never); // <- "as never" is needed because the author of the plugin hasn't updated function types
