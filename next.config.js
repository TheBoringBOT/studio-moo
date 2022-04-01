// Loader Using https://github.com/Niels-IO/next-image-export-optimizer
// Use Next.js advanced <Image/> component with the static export functionality. Optimizes all static images in an additional step after the Next.js static export.

module.exports = {
  // for translations
  //! removed for now as does not work on export - possible fix noted in _app.js
  // i18n: {
  //   locales: ["en", "se"],
  //   defaultLocale: "se",
  // },
  trailingSlash: true,

  images: {
    loader: "custom",
    nextImageExportOptimizer: {
      imageFolderPath: "public/assets",
      exportFolderPath: "out",
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
  },
};
