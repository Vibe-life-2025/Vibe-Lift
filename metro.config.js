import { getDefaultConfig } from '@react-native/metro-config';

const defaultConfig = getDefaultConfig(__dirname);

export default {
  ...defaultConfig,
  resolver: {
    extraNodeModules: {
      '@': `${__dirname}/src`,
    },
  },
};
