import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharactersAllowed, setCharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //Useref Hook
  const passwordref = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (NumberAllowed) str += "0123456789";
    if (CharactersAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char) + pass;
    }

    setPassword(pass);
  }, [length, NumberAllowed, CharactersAllowed, setPassword]);

  const copyPasswordTocClipBoard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  useEffect(() => {
    PasswordGenerator()
  }, [length, NumberAllowed, CharactersAllowed, PasswordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
          onClick={copyPasswordTocClipBoard} 
          className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={CharactersAllowed}
              id="CharactersInput"
              onChange={() => {
                setCharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="CharactersInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
