import { ReactNode } from "react";

type CategoryTileProps = {
  pageTitle: string;
  children: ReactNode;
};

export const Categories = ({ pageTitle, children }: CategoryTileProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="mt-2 text-xl">{pageTitle}</h1>
      <div className="container mt-4 px-2">
        <div className="grid w-full grid-cols-1 gap-2  md:grid-cols-2 md:gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};
