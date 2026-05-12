import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { Game } from "../../redux/reducers/games.reducer";
import Card from "./_Card";

function CardWrapper() {
  const dispatch = useDispatch();
  const games = useSelector((store: RootState) => store.games.gameInventory);

  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
  }, [dispatch]);

  return (
    <>
      {games.map((game: Game) => (
        <Card key={game.id} game={game}></Card>
      ))}
    </>
  );
}

export default CardWrapper;
