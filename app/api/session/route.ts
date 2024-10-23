import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, expiresAt } = body;

  const session = await prisma.session.findUnique({
    where: {
      email: email,
    },
  });

	if (session) {
		await prisma.session.delete({
			where: {
				email: email,
			},
		});
	}

	const newSession = await prisma.session.create({
		data: {
			email: email,
			expiresAt: expiresAt,
		}
	});

	if (!newSession) {
		return Response.json({
			message: "Session not created",
			status: 400
		})
	}

  return Response.json({
    message: "User created",
    status: 200,
    data: newSession,
  });
}