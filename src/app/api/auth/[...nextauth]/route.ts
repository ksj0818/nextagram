import { addUser } from "@/service/sanity/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user: { id, email, image, name } }) {
      if (!email) {
        return false;
      }
      addUser({
        id,
        name: name || "",
        email,
        username: email.split("@")[0],
        image,
      });
      return true;
    },

    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = { ...user, username: user.email?.split("@")[0] || "" };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
