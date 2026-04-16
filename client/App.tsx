import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/_Card";
import Header from "./components/Header/_Header";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string;
  status: string;
  notes: string;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch();
  });

  return (
    <>
      <div id="page-wrapper">
        <Header></Header>
        <div id="body-wrapper" className=" px-8">
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default App;
