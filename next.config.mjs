/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects()
  {
    return [
      {
        source:'/user',
        destination:'/products',
        permanent:true      // Browser will remember in cache
      }
    ]
  }
};

export default nextConfig;
