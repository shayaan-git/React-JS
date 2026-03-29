import React, { useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [username, setUsername] = useState("");
  const [userRole, setuserRole] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [userDesc, setuserDesc] = useState("");
  const [allUsers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setallUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        username: username,
        userRole: userRole,
        imgURL: imgURL,
        userDesc: userDesc,
      },
    ]);

    // console.log(allUsers);

    setUsername("");
    setuserRole("");
    setimgURL("");
    setuserDesc("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];
    copyUsers.splice(idx, 1);

    setallUsers(copyUsers);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <form
        className="flex flex-wrap justify-center p-2 py-10"
        onSubmit={submitHandler}
      >
        <input
          // Username
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[45%] m-2 bg-gray-900 outline-none"
          type="text"
          required
          placeholder="Enter name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          // imgURL
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[45%] m-2 bg-gray-900 outline-none"
          type="text"
          required
          placeholder="Img URL"
          value={imgURL}
          onChange={(e) => {
            setimgURL(e.target.value);
          }}
        />
        <input
          // userRole
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[45%] m-2 bg-gray-900 outline-none"
          type="text"
          required
          placeholder="Enter Role"
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value);
          }}
        />
        <input
          // userDesc
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[45%] m-2 bg-gray-900 outline-none"
          type="text"
          required
          placeholder="Enter Details"
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value);
          }}
        />

        <div className="center-btn flex items-center justify-center w-[91%]">
          <button className="bg-green-600 px-5 py-3 rounded w-[40%] m-2 font-semibold cursor-pointer active:scale-95">
            Create User
          </button>
        </div>
      </form>

      <div className="flex flex-wrap gap-5 justify-evenly">
        {allUsers.map((elem, idx) => {
          return (
            <Cards
              key={elem.id}
              username={elem.username}
              userRole={elem.userRole}
              imgURL={elem.imgURL}
              userDesc={elem.userDesc}
              deleteHandler={deleteHandler}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
