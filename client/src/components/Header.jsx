import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 px-10 flex justify-between items-center">
      <div className="logo text-emerald-40 text-xl font-bold tracking-wider">
        <a href="/">Auth-App</a>
      </div>
      <nav className="links flex items-center">
        {["register", "login"].map((item, index) => (
          <a
            href={item}
            key={index}
            className="inline-block px-5 text-base font-medium text-red-700 border-b-2 border-transparent hover:border-red-500 hover:text-red-500 transition ease-in duration-100"
          >
            {item}
          </a>
        ))}

        {/* Logout */}
        {/* <a href="logout">Logout</a> */}
      </nav>
    </div>
  );
};

export default Header;
