import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"

const handler = NextAuth({
    providers:[
        LinkedInProvider({
             clientId:process.env.LINKEDIN_ID ?? '',
            clientSecret:process.env.LINKEDIN_SECRET ?? '',
              wellKnown:
       "https://www.linkedin.com/oauth/.well-known/openid-configuration",

     authorization: {
       params: { scope: "openid profile email" },
     },
         profile(profile, tokens) {
        const defaultImage =
          'https://cdn-icons-png.flaticon.com/512/174/174857.png';
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? ''
        }),
        
    ],secret: process.env.AUTH_SECRET,
      callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
})

export {handler as GET, handler as POST};