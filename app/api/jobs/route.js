// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);

//     const keywords =
//       searchParams.get("keywords") || "software developer";
//     const location =
//       searchParams.get("location") || "Lagos";

//     const API_KEY = process.env.NEXT_PUBLIC_CAREERJET_API_KEY;

//     const url = `https://public.api.careerjet.net/search?affid=${API_KEY}&keywords=${encodeURIComponent(
//       keywords
//     )}&location=${encodeURIComponent(location)}&page=1`;

//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error("Careerjet API failed");
//     }

//     const data = await res.json();

//     console.log("CAREERJET RESPONSE:", data);

//     return Response.json(data);
//   } catch (error) {
//     console.error("API ERROR:", error);
//     return Response.json({ jobs: [] });
//   }
// }