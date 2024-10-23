"use client";

import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { generatePokemon } from "./hooks";
import Image from "next/image";

const CreatePokemon = () => {
  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const [pokemonType, setPokemonType] = useState("Normal");
  const [animalReference, setAnimalReference] = useState("Dog");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [ buttonCliked, setButtonClicked ] = useState(false);

  const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  const basicAnimalReferences = [
    "Dog",
    "Cat",
    "Horse",
    "Rabbit",
    "Squirrel",
    "Deer",
    "Eagle",
    "Shark",
    "Bear",
    "Lion",
    "Elephant",
    "Frog",
    "Turtle",
    "Snake",
    "Wolf",
    "Dolphin",
    "Monkey",
    "Owl",
    "Bat",
    "Penguin",
  ];

  const generateImage = async () => {
      const prompt = 'A pokemon of type ' + pokemonType + ' and use as animal reference a ' + animalReference;
      setLoading(true);
      setButtonClicked(true);
      try {
        const url: string = await generatePokemon(prompt);
        setImageURL(url);
      } catch (error) {
        console.error("Error generating Pokémon image:", error);
      } finally {
        setLoading(false);
      }
    }

  return (
    <div className="text-slate-800 bg-slate-300 create-box w-full md:w-2/3 lg:w-2/4">
      <div className="mb-4">
        Primary pokemon type:
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={pokemonType}
            onChange={(e) => setPokemonType(e.target.value)}
          >
            {pokemonTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <TiArrowSortedDown />
          </div>
        </div>
      </div>


      <div className="mb-4">
        Animal reference:
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={animalReference}
            onChange={(e) => setAnimalReference(e.target.value)}
          >
            {basicAnimalReferences.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <TiArrowSortedDown />
          </div>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={generateImage}>
          Generate Pokémon Image
        </button>
        { (loading && buttonCliked) ?
            <p className="text-center mt-4 text-black">Loading...</p> : 
            <Image src={imageURL} alt="Generated Pokemon" />
        }
      </div>
    </div>
  );
}

export default CreatePokemon;
