module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin',
              ["module-resolver", {
                "root": ["./src"],
                "alias": {
                  "@assets": "./assets",
                  "@components": "./src/components",
                  "@config": "./src/utils",
                  "@routes": "./src/routes",
                  "@services": "./src/services",
                  "@store": "./src/store",
                  "@views": "./src/views",
                }
              }]
            ]
  };
};
