import { useEffect, useState } from "react";
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
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:3000/api/games");
        setGames(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

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
