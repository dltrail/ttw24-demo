/** @type {import('next').NextConfig} */
export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "media.umbraco.io",
      port: "",
      pathname: "**",
    },
  ],
};