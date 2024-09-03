"use client";

import { useEffect, useState } from "react";
import useDeviceContext from "@/hooks/useDeviceContext";
import NavbarMob from "@/components/Navbar/NavbarMob";
import NavbarDesk from "@/components/Navbar/NavbarDesk";
import navItems from "@/db/nav-items";

const Navbar = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const device = useDeviceContext();

    
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; 

    return (
        <>
            {device?.isDesktop ? (
                <NavbarDesk navItems={navItems} />
            ) : (
                <NavbarMob navItems={navItems} />
            )}
        </>
    );
};

export default Navbar;
