import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
      Apply Clerk to all routes except static files and Next.js internals.
      This works well for most Next.js projects.
    */
    '/((?!_next|favicon.ico|.*\\..*).*)',
  ],
};
