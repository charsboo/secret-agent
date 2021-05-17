module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "system-ui=font-family": false,
      },
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
