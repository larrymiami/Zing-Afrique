module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["tailwindcss", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/no-var-requires": "error",
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "./tailwind.config.js",
    },
    next: {
      rootDir: ["./"],
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
}