import React, { useState } from "react";
import UserProfiles from "./components/UserProfiles";

const App = () => {
  const [title, setTitle] = useState("");
  const [userSkills, setuserSkills] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  // Ab Submit karte hi, browser ek event 'e' (jo form submit event ka data hai) usko fire karega, wo jakar event function 'submitHandler' mein pass hoga
  const submitHandler = (e) => {
    // page reload rokne ke liye
    e.preventDefault();

    setAllUsers((prev) => [...prev, { name: title, skills: userSkills }]);

    // (prev) = pehle wala allUsers array state
    // [...prev, title, userSkills] = purana array + naya title + naya userSkills
    // ...prev = spread operator → purane items copy kar rha hai

    // Programming Rule:
    // Jab bhi multiple related values ek entity ko represent karein → use object.
    // User ek entity hai.
    // User ke multiple attributes hote hain.

    // in short - title + useSkills ko (prev) yaani allUsers array me add kar rahe

    // submit karne ke baad input wapis se reset kar rhe
    setTitle("");
    setuserSkills("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
          // React ek event object banata hai
          // Usko (e) me bhejta hai
          // Tum usko submitHandler me forward kar dete ho

          // Direct ye use karte to bhi work karta --> onSubmit={submitHandler} Kyuki react automatically event pass kar deta hai internally.
        }}
      >
        <input
          type="text"
          pattern="[A-Za-z\s]+"
          maxLength={14}
          placeholder="Your Name"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          // Common events jaha React automatically event pass karta hai:
          // onClick
          // onChange
          // onSubmit
          // onKeyDown
          // onBlur
        />
        <input
          type="text"
          maxLength={103}
          placeholder="Your Skills"
          required
          value={userSkills}
          // NOTE HERE: value de diya yaani ek controlled component use kiya hai tumne
          // Controlled component ka rule (yaad rakho)
          // Agar:
          // value diya hai
          // To:
          // onChange dena **MANDATORY** hai
          // Warna input freeze.
          // FLOW: Ab browser agar value change karega to React bolega nahi bhai value wahi rahegi jo 'useSkills' mein hai. Result → typing blocked
          onChange={(e) => {
            setuserSkills(e.target.value);
          }}
        />

        <button>Submit Here</button>
      </form>

      <div className="users_wrapper">
        {allUsers.map((user, idx) => {
          return (
            <UserProfiles
              key={idx}
              userId={user.name}
              userSkills={user.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
