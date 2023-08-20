import {Sidebar} from "../components/Sidebar.tsx";
import {Boxes, LifeBuoy, Package, Settings, ShoppingCart} from "lucide-react";
import {SidebarItem} from "../components/SidebarItem.tsx";


export const SidebarNavigation = () => {
    return (
        <Sidebar>
            <SidebarItem icon={<Boxes size={20}/>} text="Shop" to="shop"/>
            <SidebarItem icon={<ShoppingCart size={20}/>} text="Cart" to="cart"/>
            <SidebarItem icon={<Package size={20}/>} text="Orders" to="orders"/>
            <SidebarItem icon={<Settings size={20}/>} text="Settings" to="settings"/>
            <SidebarItem icon={<LifeBuoy size={20}/>} text="Help" to="help"/>
        </Sidebar>
    );
};