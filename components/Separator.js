export default function Separator({ vertical }) {
  if (vertical) {
    return <div className="block w-[3px] bg-separator"></div>;
  }

  return <div className="block w-full h-[3px] bg-separator"></div>;
}
