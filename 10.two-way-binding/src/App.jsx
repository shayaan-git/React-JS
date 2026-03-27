import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    // page reload rokne ke liye
    e.preventDefault();

    const newAllUsers = [...allUsers];
    // new inputs push honge allUsers named array mein
    newAllUsers.push(title);
    console.log(newAllUsers);

    // setAllUsers named ke empty array (see line 6) mein saare newAllUsers write ho ke fir update hojayga automatically
    setAllUsers(newAllUsers);

    // submit karne ke baad input wapis se reset kar rhe
    setTitle("");
  };

  return (
    <div>
      <form
        className="flex gap-10 p-10"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="text-4xl bg-white rounded"
          // User type karta hai
          type="text"
          placeholder="Enter name"
          value={title}
          required
          // onChange fire hota hai
          onChange={(e) => {
            // setTitle() state update karta hai
            setTitle(e.target.value);
            // Component re-render hojata hai
          }}
        />
        <button className="text-3xl bg-green-500 px-5 rounded">Submit</button>
      </form>

      {allUsers.map((e, idx) => {
        return (
          <h1 key={idx} className="text-7xl font-semibold">
            {e}
          </h1>
        );
      })}
    </div>
  );
};

export default App;
