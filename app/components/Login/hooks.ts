import { setSessionTokenCookie } from "./cookies/hooks";

interface UserBodyProps {
  email: string;
  password: string;
}

export async function callCreateUserAPI(body: UserBodyProps) {
  const user = await fetch(`/api/user`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!user.ok) {
    throw new Error(user.statusText);
  }

  const data = await user.json();

  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24) // Example: 24 hours from now

  const session = await fetch(`/api/session`, {
    method: 'POST',
    body: JSON.stringify({ email: data.email, expiresAt: expiresAt }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

    if (!session.ok) {
        throw new Error(session.statusText);
    }

  const sessionData = await session.json();

  setSessionTokenCookie(sessionData.id, new Date(sessionData.expiresAt));

  /* 
    TODO: redirect a la Home, al hacer redirect, hacer commit de las cookies(setear las cookies)
    
    TODO: Hacer un hook que compruebe la session, extraes la cookie con await request.cookies.get('session')
        y si no existe, rediriges a login/signup, si existe comprobar si ha caducado, si ha caducado (refrescar session o 
        mandar a Login, lo que te resulte más fácil). Si tiene sesión buena, comprobar si tiene token oauth, que debería
        de estar en las cookies, conseguir con await request.cookies.get('token'), comprobar si ha caducado, si ha caducado, 
        conseguir un token oauth, para ello crearemos un token oauth haciendo una llamada a api/oauth con el email del usuario,
        y si todo va bien, se lo devolvemos al usuario, si no, lo mandamos a login/signup.

    TODO: Hacer esta comprobación en todas las rutas de la API, para que no se pueda acceder a ninguna ruta sin tener una sesión
    y sin un token oauth válido.

    TODO: Hacer en un useEffect/useMemo para que no este renderizandose todo el rato.
    */
}
