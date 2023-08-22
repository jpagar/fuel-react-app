import { Menu } from "lucide-react";

import { useState } from "react";

function App() {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand((prevState) => !prevState);
  };
  const handleBackDropClick = () => {
    setExpand(false);
  };

  return (
      <>
        <Menu className="m-3 cursor-pointer" onClick={handleClick} />
        <div
            className={`absolute top-0 z-10 h-screen w-40 rounded-r bg-zinc-800 shadow translate-x-[${
                expand ? "0%" : "-100%"
            }] border border-solid border-black transition-all`}
        ></div>
        <div
            onClick={handleBackDropClick}
            className={`z-[0] h-screen w-screen bg-gray-200 backdrop-grayscale-0`}
        />

      </>
  );
}

export default App;
