module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    quotes: ["error", "double"],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-undef": "error",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["Label"],
        labelAttributes: ["for"],
        controlComponents: ["Input", "File"],
        assert: "nesting",
        depth: 3,
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
  },
};
