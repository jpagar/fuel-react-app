import React from "react";

type ScrollableContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollableContent = ({
  children,
  className,
}: ScrollableContentProps) => {
  return (
    <section className={`flex h-screen w-screen justify-center ${className}`}>
      <div className="overflow-hidden">
        <div className="flex h-full overflow-hidden">
          <div className="flex-1 overflow-auto">
            <div className="lg:grid lg:grid-cols-2">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
