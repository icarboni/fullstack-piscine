import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { email } = body;

  const oauthPayload = await prisma.oAuthToken.create({
    data: {
      email: email,
      token: crypto.randomUUID(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      type: "Bearer",
    },
  });

  if (!oauthPayload)
    return new Response(null, {
      status: 500,
    });

  return Response.json({
    message: "Oauth token created",
    status: 200,
    data: oauthPayload,
  });
}
