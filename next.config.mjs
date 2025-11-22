import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Enable static export output for GitHub Pages
  output: 'export',
  // Use trailingSlash to generate folder-based output (index.html inside folders)
  trailingSlash: true,
  // (turbopack setting removed; dev script forces webpack with `--webpack`)
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
