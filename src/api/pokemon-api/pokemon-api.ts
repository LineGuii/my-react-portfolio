import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export class PokemonApi {
  baseUrl = "https://pokeapi.co/api/v2";
  baseKey = "pokemon";

  private _getAllPokemonColor = async () => {
    const response = await axios.get(`${this.baseUrl}/pokemon-color/`);
    return response.data;
  };

  private _getPokemonByColor = async (color: string) => {
    const response = await axios.get<TGetPokemonByColorResponse>(
      `${this.baseUrl}/pokemon-color/${color}`
    );
    return response.data;
  };

  private _getPokemon = async (name: string) => {
    const response = await axios.get(`${this.baseUrl}/pokemon/${name}`);
    return response.data;
  };

  public useGetAllPokemonColor = () => {
    return useQuery({
      queryKey: [this.baseKey, "color", "getAll"],
      queryFn: () => this._getAllPokemonColor(),
      refetchOnWindowFocus: false,
    });
  };

  public useGetPokemonByColor = (color: string) => {
    return useQuery({
      queryKey: [this.baseKey, "color", color],
      queryFn: () => this._getPokemonByColor(color),
      refetchOnWindowFocus: false,
      enabled: color !== "",
    });
  };

  public useGetPokemon = () => {
    return useMutation({
      mutationFn: (name: string) => this._getPokemon(name),
    });
  };
}

type TGetPokemonByColorResponse = {
  id: number;
  name: string;
  names: any[];
  pokemon_species: TPokemonSpecie[];
};

type TPokemonSpecie = {
  name: string;
  url: string;
};
