module.exports = {
  cache: {
    cacheId: "3km.admin.v2",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "3km.admin.v2",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
