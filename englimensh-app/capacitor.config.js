import { defineConfig } from '@capacitor/cli';

export default defineConfig({
  appId: 'com.englimensh.eg',
  appName: 'EngliMensh',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: { allowMixedContent: false }
});
