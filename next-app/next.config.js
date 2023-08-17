const SUB_DIRECTORY = "/test2";
const isProd = process.env.NODE_ENV == "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? SUB_DIRECTORY : "",
}

module.exports = nextConfig
