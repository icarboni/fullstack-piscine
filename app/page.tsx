import CreatePokemon from "./components/CreatePokemon";
import Login from "./components/Login";

export default function Home() {

  const isLogged = false;
  return (
      <div
        className="font-sans text-lg w-full h-full flex flex-col items-center justify-center"
      >
        { isLogged ?
        <CreatePokemon/> :
        <Login /> } 
      </div>
  );
}
