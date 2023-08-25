import {useState} from "react";
import {Menu} from "lucide-react";
import {DummyLogo} from "../icons/DummyLogo.tsx";


export const CustomSideBar = () => {
    const [expand, setExpand] = useState(false);
    const handleClick = () => {
        setExpand((prevState) => !prevState);
    };
    const handleBackDropClick = () => {
        setExpand(false);
    };

    const menuTransition = expand ? "translate-x-[0%]" : "translate-x-[-100%]";

    return (
        <>
            <Menu className="relative m-3 cursor-pointer" onClick={handleClick} />
            <div
                className={`absolute left-0 top-0 flex h-screen w-32 rounded-r border border-solid border-black bg-zinc-800 shadow-lg transition-all ease-in-out ${menuTransition}`}
            >
                <div className="w-full mt-2">
                    <figure className="bg-white">
                        <DummyLogo/>
                    </figure>
                    <ul className="bg-gray my-6 flex flex-col items-center gap-6 text-white">
                        <li>item1</li>
                        <li>item2</li>
                        <li>item3</li>
                        <li>item4</li>
                    </ul>
                </div>
            </div>
            <div
                className={`absolute left-0 top-0 z-[-10] h-screen w-screen ${
                    expand ? "bg-zinc-400 opacity-70" : "bg-white"
                } ease-in-out} transition-all`}
                onClick={handleBackDropClick}
            />
        </>
    )
}


