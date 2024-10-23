import prisma from "@/lib/prisma";


export async function GET(request: Request, 
    { params }: { params: { slug: string }}
): Promise<Response> {
  const slug = params.slug
  const user = await prisma.user.findUnique({
    where: {
      id: slug,
    },
  });
  if (user === null) {
    return new Response(null, {
      status: 404,
    });
  }
  return Response.json({
    message: "User found",
    status: 200,
    user: user
    })
}