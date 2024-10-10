import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';      



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de Vite
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: '0.0.0.0', 
    port: 3000,    

    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
