import plugin from "tailwindcss/plugin";

const tailwindPlugin = plugin(({ addVariant }) => {
  addVariant("for-disabled", ["&:has(:disabled)", ".peer:disabled ~ &"]);
});

export { tailwindPlugin };
