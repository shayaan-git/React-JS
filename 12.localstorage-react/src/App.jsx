// ============================================================
// App.jsx - Pura User Card Manager Component
// Ye file ek React app hai jisme users add aur delete ho sakte hain
// ============================================================

// LINE 1: useState hook import kar rahe hain React se
// Kab use hoga: Sabse pehle, kyunki bina is import ke koi bhi state kaam nahi karegi
// Kisse connect hai: Neeche ke saare useState() calls isse hi depend karte hain
import { useState } from "react";

// ============================================================
// MAIN APP COMPONENT - Puri application yahan se shuru hoti hai
// ============================================================
const App = () => {
  // --- STATE VARIABLES (Component ki memory) ---

  // LINE: userName state - form ke "name" input ka current value store karta hai
  // Kab use hoga: Har baar jab user input field mein kuch type kare
  // Kisse connect hai: input[placeholder="Enter your name"] ke value aur onChange se
  const [userName, setUserName] = useState("");

  // LINE: userRole state - form ke "role" input ka current value store karta hai
  // Kab use hoga: Jab user apna role type kare input mein
  // Kisse connect hai: input[placeholder="Enter Role"] ke value aur onChange se
  const [userRole, setUserRole] = useState("");

  // LINE: imageURL state - image link ka current value store karta hai
  // Kab use hoga: Jab user image ka URL paste ya type kare
  // Kisse connect hai: input[placeholder="Image URL"] ke value aur onChange se
  const [imageURL, setImageURL] = useState("");

  // LINE: userDesc state - description input ka current value store karta hai
  // Kab use hoga: Jab user description type kare
  // Kisse connect hai: input[placeholder="Enter Description"] ke value aur onChange se
  const [userDesc, setUserDesc] = useState("");

  // LINE: isSubmitted state - form submit hua ya nahi, ye track karta hai
  // Kab use hoga: submitHandler ke baad true hota hai, deleteHandler ke baad false
  // Kisse connect hai: hr (divider line) ke opacity animation se - submit pe line fade hoti hai
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ============================================================
  // LOCAL STORAGE SE DATA LOAD KARNA
  // ============================================================

  // LINE: localStorage se "all-users" key ka data read kar rahe hain
  // Kab use hoga: Sabse pehle page load hone par (component mount pe)
  // Kisse connect hai: allUsers state ke initial value se
  // Agar localStorage mein kuch nahi hai to empty array [] use hoga
  const localData = JSON.parse(localStorage.getItem("all-users")) || [];

  // LINE: allUsers state - sabhi saved users ki list store karta hai
  // Kab use hoga: Add/delete operations pe update hota hai
  // Kisse connect hai: localData (localStorage se), submitHandler, deleteHandler, aur neeche cards render karne se
  const [allUsers, setAllUsers] = useState(localData);

  // ============================================================
  // SUBMIT HANDLER - Naya user add karna
  // ============================================================

  // LINE: submitHandler function - form submit hone par call hota hai
  // Kab use hoga: User "Create User" button dabaye tab
  // Kisse connect hai: <form onSubmit={...}> se directly linked hai
  const submitHandler = (e) => {
    // LINE: Default form submission behaviour rok rahe hain (page reload nahi hoga)
    // Kab use hoga: Sabse pehle is function mein, warna page refresh ho jaayega
    // Kisse connect hai: Browser ke default form submit behaviour ko override karta hai
    e.preventDefault();

    // LINE: Purani users list ka ek copy bana rahe hain (directly state mutate nahi karni chahiye)
    // Kab use hoga: Naya user add karne se pehle
    // Kisse connect hai: allUsers state se copy aata hai, aur oldUsers mein naya user push hoga
    const oldUsers = [...allUsers];

    // LINE: Naye user ka object bana ke array mein push kar rahe hain
    // Kab use hoga: Copy banane ke turant baad
    // Kisse connect hai: userName, userRole, userDesc, imageURL - ye sab state variables yahan use ho rahe hain
    oldUsers.push({ userName, userRole, userDesc, imageURL });

    // LINE: Updated users list ko state mein set kar rahe hain
    // Kab use hoga: Array update hone ke baad, taaki UI re-render ho
    // Kisse connect hai: allUsers state ko update karta hai, jo neeche map() mein cards dikhata hai
    setAllUsers(oldUsers);

    // LINE: Updated list ko localStorage mein save kar rahe hain (permanent storage)
    // Kab use hoga: State update ke baad, taaki page refresh pe bhi data bana rahe
    // Kisse connect hai: Upar ka localData variable isi key se data padhta hai page load pe
    localStorage.setItem("all-users", JSON.stringify(oldUsers));

    // LINE: Form fields ko empty kar rahe hain submit ke baad
    // Kab use hoga: localStorage save hone ke baad, form reset karne ke liye
    // Kisse connect hai: Ye sab state variables unke respective input fields se connected hain
    setUserName("");
    setUserRole("");
    setUserDesc("");
    setImageURL("");

    // LINE: isSubmitted ko true kar rahe hain
    // Kab use hoga: Sab kuch clear hone ke baad
    // Kisse connect hai: hr (divider) ke CSS class se - opacity 0 hoti hai jab isSubmitted true ho
    setIsSubmitted(true);
  };

  // ============================================================
  // DELETE HANDLER - Kisi user ko hatana
  // ============================================================

  // LINE: deleteHandler function - kisi user ka card delete karta hai
  // Kab use hoga: User "Remove" button dabaye kisi card par
  // Kisse connect hai: Neeche map() ke andar har card ke "Remove" button ke onClick se
  // idx parameter batata hai ki kaunsa user delete karna hai (uska index number)
  const deleteHandler = (idx) => {
    // LINE: Purani users list ki copy banana
    // Kab use hoga: Sabse pehle, directly state mutate nahi karni
    // Kisse connect hai: allUsers state se copy aata hai
    const copyUsers = [...allUsers];

    // LINE: Browser ka native confirm dialog dikhana - user se permission maangna
    // Kab use hoga: Copy banane ke baad, delete se pehle confirmation zaroori hai
    // Kisse connect hai: Agar true aaya to splice hoga, agar false to nahi
    const conf = confirm("Confirm to delete this element?");

    // LINE: Agar user ne confirm kiya to splice se us index ka element remove karo
    // Kab use hoga: Sirf tab jab conf === true ho
    // Kisse connect hai: copyUsers array se, idx se pata chalta hai kaunsa element hatana hai
    if (conf) {
      copyUsers.splice(idx, 1); // idx pe ek element hata do
      alert("Deletion Successful ✅"); // Success message dikhao
    } else {
      alert("Operation Cancelled ❌"); // Cancellation message dikhao
    }

    // LINE: Updated (ya unchanged) users list ko state mein set karo
    // Kab use hoga: confirm dialog ke baad, chahe delete hua ya nahi
    // Kisse connect hai: allUsers state update hoga, aur UI re-render hoga
    setAllUsers(copyUsers);

    // LINE: Updated list ko localStorage mein bhi save karo
    // Kab use hoga: State update ke baad
    // Kisse connect hai: Wahi key "all-users" jahan se page load pe data aata hai
    localStorage.setItem("all-users", JSON.stringify(copyUsers));

    // LINE: isSubmitted wapas false karo delete ke baad
    // Kab use hoga: Sab kuch update hone ke baad
    // Kisse connect hai: hr divider ki opacity wapas normal ho jaayegi
    setIsSubmitted(false);
  };

  // ============================================================
  // JSX RETURN - Jo UI screen par dikhega
  // ============================================================

  return (
    // LINE: Main wrapper div - poori app ko contain karta hai
    // min-h-screen = poori screen ki height
    // bg-[url(...)] = background mein ek image lagayi hai Pexels se
    // bg-cover bg-center = image poori screen cover kare aur center mein rahe
    // text-white = default text color white
    <div className="min-h-screen bg-[url('https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg')] bg-cover bg-center text-white">
      {/* ---- FORM SECTION ---- */}
      {/* LINE: Form element - submit hone par submitHandler call hoga */}
      {/* Kab use hoga: Jab user inputs fill karke "Create User" dabaye */}
      {/* Kisse connect hai: submitHandler function se, aur andar ke input fields se */}
      <form
        onSubmit={(e) => {
          submitHandler(e); // e (event) pass karna zaroori hai preventDefault ke liye
        }}
        className="flex flex-wrap justify-center p-2 py-10"
      >
        {/* LINE: Name input field */}
        {/* value={userName} = state se current value bind hai (controlled input) */}
        {/* onChange = har keystroke par userName state update hogi */}
        {/* Kab use hoga: User apna naam type kare tab */}
        {/* Kisse connect hai: userName state se, aur submitHandler mein oldUsers.push se */}
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value); // Jo type hua wo userName mein save karo
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          required // Ye field khali nahi chhod sakte
          placeholder="Enter your name"
        />

        {/* LINE: Image URL input field */}
        {/* value={imageURL} = state se current value bind hai */}
        {/* onChange = har keystroke par imageURL state update hogi */}
        {/* Kab use hoga: User image link paste kare */}
        {/* Kisse connect hai: imageURL state se, aur neeche <img src={elem.imageURL}> se */}
        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value); // Jo URL dala wo imageURL mein save karo
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          required
          placeholder="Image URL"
        />

        {/* LINE: Role input field */}
        {/* value={userRole} = state se current value bind hai */}
        {/* onChange = har keystroke par userRole state update hogi */}
        {/* Kab use hoga: User apna role (jaise Developer, Designer) type kare */}
        {/* Kisse connect hai: userRole state se, aur neeche <h5>{elem.userRole}</h5> se */}
        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value); // Jo role dala wo userRole mein save karo
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          required
          placeholder="Enter Role"
        />

        {/* LINE: Description input field */}
        {/* value={userDesc} = state se current value bind hai */}
        {/* onChange = har keystroke par userDesc state update hogi */}
        {/* Kab use hoga: User apne baare mein short description likhe */}
        {/* Kisse connect hai: userDesc state se, aur neeche <p>{elem.userDesc}</p> se */}
        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value); // Jo description di wo userDesc mein save karo
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          required
          placeholder="Enter Description"
        />

        {/* LINE: Submit button - form submit karta hai */}
        {/* Kab use hoga: Jab user sab fields bhar ke submit karna chahe */}
        {/* Kisse connect hai: Form ke onSubmit se, jo submitHandler trigger karta hai */}
        {/* active:scale-95 = click karne par button thoda chhota dikhega (visual feedback) */}

        <button className="bg-green-600 px-5 py-4 rounded w-[30%] m-2 font-semibold cursor-pointer active:scale-95">
          Create User
        </button>
        {/* ---- onSubmit hamesha <form> par lagta hai, button par nahi.
Lekin multiple buttons ho to kaunsa button submit trigger karega, wo important hai. ---- */}
        {/* ✅ type="submit" → form ka onSubmit trigger karega */}
        {/* ❌ type="button" → form submit nahi karega */}
        {/* ⚠ Agar type nahi likha → by default "submit" hota hai */}
      </form>

      {/* ---- DIVIDER (HR) SECTION ---- */}
      {/* LINE: Horizontal line jo form aur cards ke beech separator hai */}
      {/* Kab use hoga: Submit hone par opacity-0 (invisible) ho jaati hai */}
      {/* Kisse connect hai: isSubmitted state se - true hone par "opacity-0" class lage */}
      {/* transition-all duration-2000 = smoothly 2 second mein fade hogi */}
      <div className="flex items-center justify-center">
        <hr
          className={`w-[90%] transition-all duration-2000 ${isSubmitted ? "opacity-0" : "opacity-20"}`}
        />
      </div>

      {/* ---- USER CARDS SECTION ---- */}
      {/* LINE: Ye div sab user cards ko wrap karta hai */}
      {/* flex flex-wrap = cards side by side aayenge aur wrap bhi honge */}
      {/* gap-5 = cards ke beech space */}
      {/* justify-evenly = cards evenly distribute honge */}
      <div className="flex flex-wrap gap-5 justify-evenly">
        {/* LINE: allUsers array par map() laga rahe hain - har user ke liye ek card banega */}
        {/* Kab use hoga: Jab bhi allUsers state update ho (add/delete ke baad) */}
        {/* Kisse connect hai: allUsers state se, submitHandler aur deleteHandler se */}
        {allUsers.map(function (elem, idx) {
          // elem = current user ka object { userName, userRole, userDesc, imageURL }
          // idx = is user ka index number (0, 1, 2...) - delete ke liye zaroori

          return (
            // LINE: Har user ka card wrapper div
            // key={idx} = React ko unique identifier dena zaroori hai list mein
            // Kab use hoga: Har map iteration mein ek card render hoga
            // Kisse connect hai: allUsers array ke har element se
            <div
              key={idx}
              className="lg:w-[23vw] md:w-[42vw] sm:w-[95vw] bg-white text-black flex items-center flex-col rounded-xl p-5 px-8 py-8 text-center"
            >
              {/* LINE: Profile image */}
              {/* src={elem.imageURL} = user ne jo URL diya tha wo yahan use hoga */}
              {/* Kab use hoga: Jab card render ho */}
              {/* Kisse connect hai: imageURL state se, jo submitHandler mein save hua tha */}
              <img
                className="h-24 w-24 rounded-full object-cover object-center"
                src={elem.imageURL}
                alt="Profile-Pic"
              />

              {/* LINE: User ka naam heading */}
              {/* elem.userName = array ke is object ka userName property */}
              {/* Kab use hoga: Card render hote waqt */}
              {/* Kisse connect hai: userName state se, jo submitHandler mein push hua tha */}
              <h1 className="text-2xl mt-2 font-semibold">{elem.userName}</h1>

              {/* LINE: User ka role (blue color mein dikhega) */}
              {/* elem.userRole = array ke is object ka userRole property */}
              {/* Kab use hoga: Card render hote waqt */}
              {/* Kisse connect hai: userRole state se, jo submitHandler mein push hua tha */}
              <h5 className=" text-blue-500 font-semibold my-2 text-lg">
                {elem.userRole}
              </h5>

              {/* LINE: User ki description paragraph */}
              {/* elem.userDesc = array ke is object ka userDesc property */}
              {/* Kab use hoga: Card render hote waqt */}
              {/* Kisse connect hai: userDesc state se, jo submitHandler mein push hua tha */}
              <p className="text-sm font-medium leading-tight">
                {elem.userDesc}
              </p>

              {/* LINE: Delete button - is card ka user hatane ke liye */}
              {/* onClick = button dabate hi deleteHandler call hoga */}
              {/* idx pass karna zaroori hai - taaki pata chale kaunsa user delete karna hai */}
              {/* Kab use hoga: Jab koi user is card ko remove karna chahe */}
              {/* Kisse connect hai: deleteHandler function se, aur idx map ke andar se aata hai */}
              <button
                onClick={() => {
                  deleteHandler(idx); // Yahi idx deleteHandler mein splice ke liye use hota hai
                }}
                className="px-5 py-2 rounded bg-red-600 text-white font-semibold mt-3 text-xs cursor-pointer active:scale-95"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// LINE: App component ko export karna - taaki main entry point (main.jsx) isse import kar sake
// Kab use hoga: Sabse aakhir mein, export ke bina ye component bahar se use nahi ho sakta
// Kisse connect hai: main.jsx ya index.jsx ke import statement se
export default App;
