import { useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Minus, Plus, Trash2, TimerReset } from "lucide-react";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    setPlayers([...players, { id: Date.now(), name: "Player", score: 0 }]);
  };

  const updateName = (id, newName) => {
    setPlayers(players.map((p) => (p.id === id ? { ...p, name: newName } : p)));
  };

  const changeScore = (id, amount) => {
    setPlayers(
      players.map((p) => (p.id === id ? { ...p, score: p.score + amount } : p))
    );
  };

  const handleScoreChange = (id, newScore) => {
    const parsedScore = parseInt(newScore, 10);
    if (!isNaN(parsedScore)) {
      setPlayers(
        players.map((p) => (p.id === id ? { ...p, score: parsedScore } : p))
      );
    }
  };

  const resetScores = () => {
    setPlayers(players.map((p) => ({ ...p, score: 0 })));
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  const removeAllPlayers = () => {
    setPlayers([]);
  };

  const resetPlayersScore = (id) => {
    setPlayers(players.map((p) => (p.id === id ? { ...p, score: 0 } : p)));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl space-y-6 bg-white shadow-2xl rounded-xl p-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-5xl font-extrabold text-center text-purple-700 drop-shadow-lg">
            🏆 Scoreboard
          </h1>
        </div>
        <Button
          onClick={addPlayer}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 cursor-pointer"
        >
          Add Player
        </Button>

        {players.map((player) => (
          <Card
            key={player.id}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-purple-100 via-white to-blue-100 p-4 rounded-lg border shadow-sm transition duration-300 hover:shadow-md"
          >
            <Input
              className="flex-grow text-lg font-medium bg-white rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={player.name}
              onChange={(e) => updateName(player.id, e.target.value)}
            />

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                className="bg-red-200 hover:bg-red-300 cursor-pointer"
                onClick={() => changeScore(player.id, -1)}
              >
                <Minus />
              </Button>

              <Input
                type="text"
                className="w-16 text-center text-xl font-semibold border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={player.score}
                onChange={(e) => handleScoreChange(player.id, e.target.value)}
              />

              <Button
                size="icon"
                className="bg-green-200 hover:bg-green-300 cursor-pointer"
                onClick={() => changeScore(player.id, 1)}
              >
                <Plus />
              </Button>

              <Button
                size="icon"
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure you want to remove ${player.name}?`
                    )
                  ) {
                    removePlayer(player.id);
                  }
                }}
              >
                <Trash2 />
              </Button>

              <Button
                size="icon"
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure you want to reset ${player.name} score?`
                    )
                  ) {
                    resetPlayersScore(player.id);
                  }
                }}
              >
                <TimerReset />
              </Button>
            </div>
          </Card>
        ))}

        {players.length > 0 && (
          <div className="flex flex-col items-center justify-between gap-4">
            <Button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to reset all scores?")
                ) {
                  resetScores();
                }
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 cursor-pointer"
            >
              Reset All Scores
            </Button>

            <Button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to remove all players?")
                ) {
                  removeAllPlayers();
                }
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 cursor-pointer"
            >
              Remove All Players
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
