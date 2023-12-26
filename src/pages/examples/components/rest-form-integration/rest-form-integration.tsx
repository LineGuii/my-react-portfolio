import { Box, Flex, MainBox, SubTitle, Title } from "@ui";
import { PokemonApi } from "@api";
import { useCallback, useMemo, useState } from "react";
import { PokemonTypeChip } from "@ui/chip";

export function RestFormIntegration() {
  const [color, setColor] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<any>();
  const [error, setError] = useState<string>();

  const { data: colors } = PokemonApi.useGetAllPokemonColor();
  const { data: pokemonByColor } = PokemonApi.useGetPokemonByColor(color);
  const { mutate: getPokemon } = PokemonApi.useGetPokemon();

  const pokemonShowable = useMemo(() => {
    if (pokemon != null) {
      console.log(
        pokemon.types.map((t: { type: { name: any } }) => t.type.name)
      );
      return {
        pokemonName: pokemon.name,
        pokemonType: [
          ...pokemon.types.map((t: { type: { name: any } }) => t.type.name),
        ],
        sprite: pokemon.sprites.front_default,
      };
    } else {
      return null;
    }
  }, [pokemon]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (pokemonName)
        getPokemon(pokemonName.trim().toLowerCase(), {
          onSuccess: (data) => {
            setPokemon(data);
          },
          onError: (_) => {
            setError("Esse pokemon não existe");
          },
        });
    },
    [getPokemon, pokemonName]
  );

  return (
    <>
      <Box
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <Title>Integração RestAPI em formulário</Title>
        <p>
          Esse exemplo consiste em integrar uma API REST num formulário. Tanto
          os selects, quanto o botão enviar fazem requisições para o{" "}
          <a target="_blank" href="https://pokeapi.co/docs/v2" rel="noreferrer">
            PokeAPI
          </a>
          .
        </p>

        <Box>
          <form onSubmit={handleSubmit}>
            <Flex style={{ gap: "8px" }}>
              <input
                type="text"
                placeholder="Buscar por nome"
                onChange={(e) => setPokemonName(e.target.value)}
                value={pokemonName}
              />
            </Flex>
            <Flex style={{ gap: "8px" }}>
              <select
                placeholder="Selecione uma cor"
                disabled={colors?.count === 0}
                onChange={(e) => setColor(e.target.value)}
                value={color}
              >
                <option key={"blank"} value={""}>
                  Selecione uma cor
                </option>
                {colors?.results.map((color: any) => (
                  <option key={color.name} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select>

              <select
                placeholder="Selecione um pokemon"
                disabled={
                  color === "" || pokemonByColor?.pokemon_species.length === 0
                }
                onChange={(e) => setPokemonName(e.target.value)}
                value={pokemonName}
              >
                <option key={"blank"} value={""}>
                  Selecione um Pokemon
                </option>
                {pokemonByColor?.pokemon_species.map((pokemon) => (
                  <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>
            </Flex>

            <button type="submit" disabled={pokemonName === ""}>
              Buscar
            </button>
          </form>

          <Flex>
            {pokemon && (
              <pre
                style={{
                  width: "100%",
                  height: "300px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {JSON.stringify(pokemon, null, 2)}
              </pre>
            )}
            {pokemonShowable && (
              <Box style={{ padding: "0", alignItems: "center" }}>
                <p>{pokemonShowable.pokemonName}</p>
                <img
                  src={pokemonShowable.sprite}
                  alt={pokemonShowable.pokemonName}
                />
                <Flex>
                  {pokemonShowable.pokemonType.map((t) => {
                    return <PokemonTypeChip type={t}>{t}</PokemonTypeChip>;
                  })}
                </Flex>
              </Box>
            )}
            {error && <span>{error}</span>}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
