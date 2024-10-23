import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user)
    return new Response(null, {
      status: 400,
    });

  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });

  if (!newUser)
    return new Response(null, {
      status: 500,
    });

  return Response.json({
    message: "User created",
    status: 200,
    data: newUser,
  });
}
