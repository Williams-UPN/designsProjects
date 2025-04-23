/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera export estático en la carpeta out/
  output: 'export',
  // Opcional: para URLs con slash final y carpetas index.html
  trailingSlash: true,

  // Ignora errores de ESLint en el build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Deshabilita por completo la Image Optimization API de Next.js
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
