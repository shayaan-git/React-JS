# Lifting State Up

## Ye hi React ka data flow rule hai:
> Data upar se neeche aata hai.
> Update karne ke liye neeche se function upar jata hai.

## React me functions bhi props hote hain.

React me state update directly child se nahi hota.
Child parent ka state change nahi kar sakta.

To kya karte hain?

Parent ek function deta hai.
Child us function ko call karta hai.
Value parameter ke through pass hoti hai.

----------------------------------------

`props.changeTheme(newTheme)` tabhi value accept karega jab parent ne function pass kiya ho. Tumne sahi kiya hai — function ke through value pass karna hi React ka standard tareeka hai. Agar function pass nahi hua ya galat bind hua, to kuch nahi chalega.

---

Chalo seedha point pe aate hain.

Tumne parent me likha:

```js
const changeTheme = (newTheme) => {  
  setTheme(newTheme);  
};
```

Aur fir child ko diya:

```js
<Child changeTheme={changeTheme} />
```

Ab child me jab tum call karte ho:

```js
props.changeTheme("dark");
```

Toh kya ho raha hai?

👉 Child parent ka function chala raha hai.
👉 `"dark"` value parent ke `changeTheme` function me jaa rahi hai.
👉 `setTheme("dark")` state update kar raha hai.

Bas. Itna simple.

---

## Ye kaise kaam karta hai?

React me **functions bhi props hote hain**.

Socho parent ek remote control de raha hai child ko.

> "Beta, jab mood aaye, ye button daba dena."

Child ne button dabaya → parent ka TV channel change ho gaya.

Same logic.

---

## Kab value accept nahi karega?

### 1️⃣ Agar parent ne function pass hi nahi kiya

```js
<Child />
```

Phir child me:

```js
props.changeTheme("dark");
```

To error aayega:

> props.changeTheme is not a function

Kyuki function diya hi nahi.

---

### 2️⃣ Agar galti se function call karke pass kar diya

Yeh galti log karte hain:

```js
<Child changeTheme={changeTheme()} />
```

Ab kya hua?

Function turant execute ho gaya render ke time pe.
Aur jo return hua (shayad undefined), woh prop me chala gaya.

Phir child ke paas function hi nahi bacha.

Correct tareeka:

```js
<Child changeTheme={changeTheme} />
```

Reference pass karo, execution nahi.

---

## Tumhara doubt — "kya function use karne ki wajah se value accept ho rahi hai?"

Bilkul.

React me state update directly child se nahi hota.
Child parent ka state change nahi kar sakta.

To kya karte hain?

Parent ek function deta hai.
Child us function ko call karta hai.
Value parameter ke through pass hoti hai.

Ye hi React ka **data flow rule** hai:

> Data upar se neeche aata hai.
> Update karne ke liye neeche se function upar jata hai.

Source: React official docs – "Lifting State Up"
[https://react.dev/learn/sharing-state-between-components](https://react.dev/learn/sharing-state-between-components)

---

## Ek real example

Parent:

```js
const [theme, setTheme] = useState("light");

const changeTheme = (newTheme) => {
  setTheme(newTheme);
};
```

Child button:

```js
<button onClick={() => props.changeTheme("dark")}>
  Dark Mode
</button>
```

Click → state change → re-render → theme update.

Simple.

---

## Understand this

Agar tum React me function as prop ka concept clear nahi rakhoge, to state management me ulajh jaoge.

Ye foundation hai.

Redux, Context, Zustand — sab baad ki baat hai.
Pehle ye clear karo.

---

## Ek last cheez socho

Agar React me child directly parent ka state change kar pata...

To pura app spaghetti ban jata.

Isliye React strict hai.

---

Samjho — React me function pass karna luxury nahi hai.
Wo survival rule hai.

Aur agar ye samajh gaya, to aadha React jeet liya.
