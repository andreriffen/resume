import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // pra GitHub Pages / static export:
  output: 'export',
  images: {
    unoptimized: true,
  },
  // se for repositório de projeto, tipo andreriffen/resume:
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
};

export default withMDX(nextConfig);
