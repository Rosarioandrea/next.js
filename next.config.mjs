
/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns :[
            {
                
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
            },
            
        ]
    
    }
    };
    
    export default nextConfig;

