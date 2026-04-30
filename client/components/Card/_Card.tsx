import Genre from "./Genre";
import Status from "./Status";
import Title from "./Title";
import Edit from "./Edit";
import Description from "./Description";
import Notes from "./Notes";

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
  return (
    <div
      id="card-container"
      className="flex flex-col min-h-64 my-12 text-left outline outline-dashed outline-offset-15 "
    >
      <div id="title-container" className="flex flex-row justify-between">
        //todo - undo this component mess — move styles onto this level, then
        just dish out the props here
        <Title title={game.title}></Title>
        <Edit gameId={game.id}></Edit>
      </div>
      <div id="description-notes-container" className="font-[vt323]">
        <Description description={game.description}></Description>
        <Notes notes={game.notes}></Notes>
      </div>
      <div id="card-bottom" className="my-2 flex flex-row justify-between">
        <Status status={game.status}></Status>
        <Genre genre={game.genre}></Genre>
      </div>
    </div>
  );
}

export default Card;
