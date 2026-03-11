import Genre from "./Genre";
import Status from "./Status";
import Title from "./Title";
import Edit from "./Edit";
import Description from "./Description";
import Notes from "./Notes";

function Card() {
  return (
    <div
      id="card-container"
      className="flex flex-col text-left outline outline-dashed outline-offset-15 "
    >
      <div id="title-container" className="flex flex-row justify-between">
        <Title></Title>
        <Edit></Edit>
      </div>
      <div id="description-notes-container" className="font-[vt323]">
        <Description></Description>
        <Notes></Notes>
      </div>
      <div id="card-bottom" className="my-2 flex flex-row justify-between">
        <Status></Status>
        <Genre></Genre>
      </div>
    </div>
  );
}

export default Card;
