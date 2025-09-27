export const prerender = false;

import * as core from "@auth/core";
import GitHub from "@auth/core/providers/github";
import type { APIRoute } from "astro";

const handler: APIRoute = async ({ request }) => {
  return core.Auth(request, {
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    debug: true, // will print detailed errors to console
  });
};

export const GET = handler;
export const POST = handler;
