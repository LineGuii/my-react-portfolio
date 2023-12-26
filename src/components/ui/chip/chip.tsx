import { styled } from "@stitches/react";

export const Chip = styled("span", {
  backgroundColor: "black",
  color: "white",
  padding: "5px 10px",
  borderRadius: "10px",
  fontSize: "small",
  boxSizing: "border-box"
});

export const PokemonTypeChip = styled(Chip, {
  display: "inline-block",
  fontFamily: "monospace",
  textShadow: "1px 1px 2px rgba(0,0,0,.7)",
  textTransform: "uppercase",
  textAlign: "center",
  border: "1px solid rgba(0,0,0,.2)",
  color: "#fff",
  fontSize: "0.75rem",
  fontWeight: "normal",
  lineHeight: "1.5rem",
  height: "24px",
  width: "66px",
  borderRadius: "4px",
  padding: 0,
  variants: {
    type: {
      dark: {
        backgroundColor: "#754",
      },
      ghost: {
        backgroundColor: "#66b",
      },
      grass: {
        backgroundColor: "#7c5",
      },
      psychic: {
        backgroundColor: "#f59",
      },
      water: {
        backgroundColor: "#39f",
      },
      fire: {
        backgroundColor: "#f42",
      },
      electric: {
        backgroundColor: "#fc3",
      },
      ice: {
        backgroundColor: "#6cf",
      },
      fighting: {
        backgroundColor: "#b54",
      },
      poison: {
        backgroundColor: "#a59",
      },
      ground: {
        backgroundColor: "#db5",
      },
      flying: {
        backgroundColor: "#89f",
      },
      bug: {
        backgroundColor: "#ab2",
      },
      rock: {
        backgroundColor: "#ba6",
      },
      dragon: {
        backgroundColor: "#76e",
      },
      steel: {
        backgroundColor: "#aab",
      },
      fairy: {
        backgroundColor: "#e9e",
      },
      normal: {
        backgroundColor: "#aa9",
      },
    },
  },
});
