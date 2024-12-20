import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"

const handler = NextAuth({
    providers:[ 
        {
    id: "orcid",
    name: "ORCID",
    type: "oauth",
    wellKnown: "https://orcid.org/.well-known/openid-configuration",
    authorization: {
      url: "https://orcid.org/oauth/authorize",
      params: {
        scope: "openid email profile",
        response_type: "code",
      },
    },
    userinfo: "https://orcid.org/oauth/userinfo",
    clientId: process.env.ORCID_CLIENT_ID,
    clientSecret: process.env.ORCID_CLIENT_SECRET,
    checks: ["state"],
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
      };
    },
  },
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
    ],
    
    secret: process.env.AUTH_SECRET,
      callbacks: {
        
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token,"token in jwt");
      console.log(profile,"profile in jwt");
      
      
    // When a user signs in, the `user` and `account` objects will be available
    if (user) {
      console.log(user,"user in jwt");
      
      token.id = user.id;
      token.name = user.name;
      token.email = user.email;
    }

    // Optionally, you can use the account or profile data for further customization
    if (account) {
      console.log(account,"account in jwt");
      
      token.accessToken = account.access_token;
    }
    return token;
  },
    async session({ session, token, user }) {

      console.log(token,"token");
      
    session.user.name = token.name;
    session.user.email = token.email;
    return session;
  },
  },

})

export {handler as GET, handler as POST};