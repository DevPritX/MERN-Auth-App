import React, { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // setUser(window.localStorage.getItem("user"))
    const dataObj = JSON.parse(localStorage.getItem("user"));
    setUser(dataObj);
  }, []);

  const logoutUserHandler = (ev) => {
    localStorage.removeItem("user");
  };

  return (
    <div className="w-full h-20 px-2 flex justify-between items-center">
      <div className="logo text-emerald-40 text-lg font-bold tracking-wider md:text-xl">
        <a href="/">Auth-App</a>
      </div>
      <nav className="links flex items-center">
        {!user ? (
          ["register", "login"].map((item, index) => (
            <a
              href={item}
              key={index}
              className="inline-block px-2 capitalize text-sm font-medium text-red-700 border-b-2 border-transparent hover:border-red-500 hover:text-red-500 transition ease-in duration-100 md:capitalize md:text-base"
            >
              {item}
            </a>
          ))
        ) : (
          <button
            className="inline-block px-5 text-base font-medium text-red-700 border-b-2 border-transparent hover:border-red-500 hover:text-red-500 transition ease-in duration-100"
            onClick={logoutUserHandler}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
