import { WithChildren } from "types";

type WithDividersProps = {
  direction: "horizontal" | "vertical";
};

export default function WithDividers({ direction, children }: WithChildren<WithDividersProps>) {
  const map = {
    vertical: "inflate-y-8 md:inflate-y-14 divide-y-2 divide-separator divide-solid",
    horizontal:
      "inflate-y-8 md:inflate-x-14 md:inflate-y-0 divide-y-2 md:divide-y-0 md:divide-x-2 dividie-solid divide-separator divide-solid flex flex-col md:flex-row",
  };

  return <div className={map[direction]}>{children}</div>;
}
