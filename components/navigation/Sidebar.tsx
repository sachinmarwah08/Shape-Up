import React from "react";
import { IHeaderNav } from "../../Interface/INav";
import Nav from "./Nav";

const Sidebar = (props: { data: IHeaderNav[] }) => {
  return (
    <div className="items-center w-full h-full text-center">
      <nav className="p-4 mt-16">
        {props.data.map((el, index) => {
          return (
            <div key={index} className="w-full my-4">
              <Nav item={el} />
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
