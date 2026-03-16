import { clerkClient } from "@clerk/nextjs/server";

export async function GET(request) {
  const client = await clerkClient();
  return client.routes.GET(request);
}

export async function POST(request) {
  const client = await clerkClient();
  return client.routes.POST(request);
}
