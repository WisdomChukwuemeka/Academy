import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Only protect the specific actions, let the catalog be public for SEO
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/profile(.*)",
  "/courses/(.*)/enroll", // Protect the enrollment step
  "/courses/(.*)/lessons(.*)", // Protect the actual content
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};