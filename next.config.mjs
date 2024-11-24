import Google from 'next-auth/providers/google';
import LinkedIn from 'next-auth/providers/linkedin';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google,LinkedIn,
  ],
};

export default nextConfig;
