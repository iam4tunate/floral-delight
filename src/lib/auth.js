import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createCustomer, getCustomer } from './helper';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      console.log('user', user);
      try {
        const existingCustomer = await getCustomer(user.email);
        if (!existingCustomer)
          await createCustomer({
            email: user.email,
            fullname: user.name,
            image: user.image,
          });
        return true;
      } catch {
        return false;
      }
    },
    // async session({ session, user }) {
    //   const guest = await getGuest(session.user.email);
    //   session.user.guestId = guest.id;
    //   return session;
    // },
  },
  pages: {
    signIn: '/sign-in',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
