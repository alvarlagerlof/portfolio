export default function Separator({ vertical }) {
  if (vertical) {
    return (
      <>
        <div className={vertical + ":hidden"}>
          <div className="block w-full h-[2px] min-h-[2px] bg-separator"></div>
        </div>
        <div className={"hidden " + vertical + ":block"}>
          <div className={`block h-full w-[2px] min-w-[2px] bg-separator`}></div>
        </div>
      </>
    );
  }

  return <div className="block w-full h-[2px] min-h-[2px] bg-separator"></div>;
}
