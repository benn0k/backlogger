import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import axios from "axios";
import Card from "./_Card";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string;
  status: string;
  notes: string;
}

function CardWrapper() {
  const dispatch = useDispatch();
  const games = useSelector((store: RootState) => store.games.gameInventory);

  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
  }, []);

  // const [games, setGames] = useState<Game[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {

  }, []);

  console.log(games);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && games.length === 0 && <p>No games found</p>}

      {games.map((game) => (
        <Card key={game.id} game={game}></Card>
      ))}
    </>
  );
}

export default CardWrapper;
