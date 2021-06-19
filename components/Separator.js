export default function Separator({ verticalAt }) {
  // Tailwind does not have a runtime
  const className = {
    md: {
      big: "hidden md:grid",
      small: "block md:hidden",
    },
    xl: {
      big: "hidden xl:grid",
      small: "block xl:hidden",
    },
  };

  if (verticalAt) {
    return (
      <>
        <div className={className[verticalAt].big}>
          <div className="w-[2px] min-w-[2px] bg-separator"></div>
        </div>
        <div className={className[verticalAt].small}>
          <div className="w-full h-[2px] min-h-[2px] bg-separator"></div>
        </div>
      </>
    );
  }

  return <div className="block w-full h-[2px] min-h-[2px] bg-separator"></div>;
}
