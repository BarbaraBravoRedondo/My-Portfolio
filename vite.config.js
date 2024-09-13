import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My-Portfolio/",
  server: {
    watch: {
      usePolling: true, // Habilita el uso de polling
      interval: 100,    // Establece el intervalo de polling a 100ms
    },
  },
});
