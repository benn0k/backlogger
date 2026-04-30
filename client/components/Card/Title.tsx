interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <h1 id="title" className="font-[GlassTTY] text-lime-500">{title}</h1>;
}

export default Title;
