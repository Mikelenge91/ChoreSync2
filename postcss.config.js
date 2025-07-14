module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        features: {
          "nesting-rules": true,
        },
      },
    ],
    "tailwindcss",
    "autoprefixer",
  ],
};
