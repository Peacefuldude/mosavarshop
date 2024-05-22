/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.builder.io", "img.icons8.com"],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
