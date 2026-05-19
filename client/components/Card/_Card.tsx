import { useState } from "react";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string;
  status: string;
  notes: string;
}

interface CardProps {
  game: Game;
}

function Card({ game }: CardProps) {
  //  'edit mode' state (either is or isn't)
  const [isEditMode, setEditMode] = useState(false);
  //  onclick to the edit button to switch it to edit mode

  const handleEdit = (): void => {
    setEditMode(true);
    console.log("edit mode enabled");
  };

  const handleCancel = (): void => {
    setEditMode(false);
    console.log("edit mode enabled");
  };

  return (
    <div
      id="card-container"
      className="flex flex-col justify-between min-h-64 my-12 text-left outline outline-dashed outline-offset-15"
    >
      {isEditMode ? (
        // Edit mode
        <div className="flex flex-col gap-4">
          {/* Add form fields here */}
          <div className="flex gap-2">
            <a
              onClick={handleCancel}
              className="font-[GlassTTY] text-xl cursor-pointer"
            >
              {"SAVE/>"}
            </a>
          </div>
        </div>
      ) : (
        // View mode
        <div className="" id="card-top">
          <div id="title-container" className="flex flex-row justify-between">
            <h1 id="title" className="font-[GlassTTY] text-lime-500">
              {game.title}
            </h1>
            <a
              id="edit"
              onClick={handleEdit}
              className="font-[GlassTTY] text-xl cursor-pointer"
            >
              {"EDIT/>"}
            </a>
          </div>
          <div id="description-notes-container" className="font-[vt323]">
            <div
              id="description"
              className="flex items-center text-gray-500 size-4 w-full py-4"
            >
              {game.description}
            </div>
            <div id="notes" className="text-white text-lg">
              {game.notes}
            </div>
          </div>
        </div>
      )}
      <div id="card-bottom" className="my-2 flex flex-row justify-between">
        <div className="font-[vt323] text-lime-500 outline outline-lime-500 outline-dashed outline-offset-2 w-fit px-2">
          {game.status}
        </div>
        <div className="font-[vt323] text-gray-500 w-fit px-2">
          {game.genre}
        </div>
      </div>
    </div>
  );
}

export default Card;
