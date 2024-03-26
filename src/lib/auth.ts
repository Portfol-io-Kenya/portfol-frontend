import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./dbConfig/dbConnect";
import clientPromise from "./dbConfig/clientPromise";
import bcrypt from "bcryptjs";
import User from "./dbConfig/userModel";
import moment from 'moment'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
        profile(profile) {
          return {
            id: profile.sub,
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            accountType: 'seeker',
            verified: true,
            role: 'seeker',
            image: profile.picture,
            createdAt: moment().format()
          }
        }
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        userinfo: {
          url: "https://graph.facebook.com/me",
          // https://developers.facebook.com/docs/graph-api/reference/user/#fields
          params: { fields: "id,name,email,picture" },
          async request({ tokens, client, provider }) {
            return await client.userinfo(tokens.access_token!, {
              // @ts-expect-error
              params: provider.userinfo?.params,
            })
          },
        },
        // profileUrl:
        // "https://graph.facebook.com/me?fields=id,email,first_name,last_name,picture",
        profile(profile) {
          return {
            id: profile.id,
            firstName: profile.first_name,
            lastName: profile.last_name,
            email: profile.email,
            accountType: 'seeker',
            verified: true,
            role: 'seeker',
            image: profile.picture.data.url,
            createdAt: moment().format()
          }
        }
    }),
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect();
        // Add logic here to look up the user from the credentials supplied
        if (credentials == null) return null;
        // login

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password,
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    // signIn: "/find-work/jobs",
    signIn: "/auth/waitlist",
    // newUser: "/find-work/jobs",
    newUser: "/auth/waitlist",
    error: "/auth/login",
  },
  callbacks: {
    // We can pass in additional information from the user document MongoDB returns
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);