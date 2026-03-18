import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the routes you want to protect
const isProtectedRoute = createRouteMatcher([
  "/courses(.*)",
  "/jobs(.*)",
  "/profile(.*)",
  // add any other routes you want to protect
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // redirects to sign-in if not authenticated
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};