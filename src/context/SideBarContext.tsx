import React, {createContext, SetStateAction} from "react";

const SidebarContext =
    createContext<{expand: boolean, setExpand: React.Dispatch<SetStateAction<boolean>> } >({expand: false, setExpand: () => {}});

export default SidebarContext;