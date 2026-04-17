import { useEffect, useState } from "react";
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

  useEffect(() => {});

  return (
    <>
      <Card></Card>
      <Card></Card>
    </>
  );
}

export default CardWrapper;
