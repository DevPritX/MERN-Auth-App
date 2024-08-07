import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const dataObj = JSON.parse(localStorage.getItem("user"))
    console.log(dataObj)
    setUser(dataObj);
  }, []);

  return (
    <section
      id="home"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {user ? (
        <div
          id="user-card"
          className="w-[80vw] h-[60vh] flex flex-row justify-center items-center"
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*9m-WDdL_ji01bGbjEnutEw.gif"
            alt="image"
            className="w-[200px]"
          />
          <div id="content" className="flex flex-col gap-1 font-medium text-sm">
            <p>
              Your Email:
              <span className="ml-5 text-red-600 font-bold tracking-wider">
                {user.email}
              </span>
            </p>
            <p>
              Your Username:
              <span className="ml-2 text-green-600 font-bold tracking-wider">
                {user.username}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <h1>User Does not exist</h1>
      )}
    </section>
  );
};

export default Home;
