import React from "react";
import Link from "next/link";
import { navigations } from '../../data';

const Navigation = () => {
  return (
    <nav className="flex items-center gap-[40px]">
      
      {navigations.map((nav, x) => {
        return (
            <Link key={x.toString()} href={nav.nav_route}>
                <span className="">{nav.nav_title}</span>
            </Link>
        );
      })}
      
    </nav>
  );
};

export default Navigation;
