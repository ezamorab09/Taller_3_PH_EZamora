import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 't3-ph-eduardozamora',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

  
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
