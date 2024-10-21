'use client'

import { useEffect } from "react";

export default function Create() {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="text-white mt-8 ml-8">
      Create a pokemon
      <div className="container"></div>
    </div>
  );
}
