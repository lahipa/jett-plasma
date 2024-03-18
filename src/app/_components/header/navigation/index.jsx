import React from "react";
import Link from "next/link";

// data
import { navigations } from '@/app/_data';

const Navigation = (props) => {
  const { onCloseMenu } = props;

  return (
    <nav className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[40px]">
      
      {navigations.map((nav, x) => {
        return (
            <Link key={x.toString()} href={nav.nav_route} onClick={onCloseMenu} as={nav.nav_route}>
                <span className="">{nav.nav_title}</span>
            </Link>
        );
      })}
      
    </nav>
  );
};

export default Navigation;
