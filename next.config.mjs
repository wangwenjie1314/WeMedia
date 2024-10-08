import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'docs',
    // assetPrefix: '.',
    basePath: process.env.NODE_ENV === 'production' ? '/wemedia' : '',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
