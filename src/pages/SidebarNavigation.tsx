import {Sidebar} from "../components/Sidebar.tsx";
import {Boxes, LifeBuoy, Package, Settings, ShoppingCart} from "lucide-react";
import {SidebarItem} from "../components/SidebarItem.tsx";
import {useShoppingCartStore} from "../stores/useShoppingCartStore.ts";


export const SidebarNavigation = () => {
    const {getShoppingCartQuantity} = useShoppingCartStore()
    return (
        <Sidebar>
            <SidebarItem icon={<Boxes size={20}/>} text="Shop" to="shop"/>
            <SidebarItem badgeText={String(getShoppingCartQuantity())} hasBadge={true} icon={<ShoppingCart size={20}/>} text="Cart" to="cart"/>
            <SidebarItem icon={<Package size={20}/>} text="Orders" to="orders"/>
            <SidebarItem icon={<Settings size={20}/>} text="Settings" to="settings"/>
            <SidebarItem icon={<LifeBuoy size={20}/>} text="Help" to="help"/>
        </Sidebar>
    );
};