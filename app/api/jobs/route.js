export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const keywords =
      searchParams.get("keywords") || "software developer";
    const location =
      searchParams.get("location") || "Nigeria";

    const API_KEY = process.env.NEXT_PUBLIC_CAREERJET_API_KEY;

    const res = await fetch(
      `https://public.api.careerjet.net/search?affid=${API_KEY}&keywords=${keywords}&location=${location}&page=1`
    );

    if (!res.ok) {
      throw new Error("Careerjet API failed");
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ jobs: [] });
  }
}