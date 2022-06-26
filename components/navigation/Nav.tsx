import React from "react";

//next
import Link from "next/link";

//interface
import { IHeaderNav } from "../../Interface/INav";

const Nav = (props: { item: IHeaderNav }) => {
  return (
    <div className="flex flex-col items-center px-4 overflow-hidden text-base text-center w-max lg:text-base group">
      <Link href={props.item.link}>
        <a className="text-black lg:text-white group-hover:text-[#254FE4] font-medium transition-all">
          {props.item.name}
        </a>
      </Link>
    </div>
  );
};

export default Nav;
