import Add from "./Add";
import Filter from "./Filter";
import Logo from "./Logo";

function Header() {
  return (
    <div
      id="header"
      className="sticky top-0 z-50 w-full h-16 flex text-4xl  bg-lime-500 font-[GlassTTY] "
    >
      <Logo></Logo>
      <div id="filter-add" className="flex w-full ">
        <Filter></Filter>
        <Add></Add>
      </div>
    </div>
  );
}

export default Header;
