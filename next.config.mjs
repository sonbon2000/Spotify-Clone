/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "sfkfsmgnfojbgmgihpuu.supabase.co",
            port: "",
          },
        ],
      },
};

export default nextConfig;
