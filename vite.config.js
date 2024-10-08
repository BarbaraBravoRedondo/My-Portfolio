import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';      
import fs from 'fs';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de Vite
export default defineConfig({
  plugins: [react()],
  base: "/My-Portfolio/",
  server: {
    host: '0.0.0.0', 
    port: 3000,    
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'path/to/your/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'path/to/your/server.crt')),
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
