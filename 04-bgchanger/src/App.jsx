// Importing the useState hook from React
import { useState } from "react"

// Defining the App component
function App() {
  // Declaring a state variable 'color' with initial value 'olive' and a function 'setColor' to update it
  const [color, setColor] = useState("olive")

  // Returning the JSX to render
  return (
    // A div that takes the full width and height of the screen, with a transition duration of 200ms
    <div className="w-full h-screen duration-200"
      // Setting the background color of the div to the value of 'color' state
      style={{ backgroundColor: color }}
    >
      <h1 className="fixed flex flex-wrap justify-center top-52 inset-x-0 px-2 text-8xl black: text-grey">Background Changer</h1>
      {/* A fixed positioned div at the bottom of the screen, centered horizontally */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* A div containing the buttons, with some styling */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Button to change the background color to red */}
          <button
            // On click, set the color state to 'red'
            onClick={() => setColor("red")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // Setting the background color of the button to red
            style={{ backgroundColor: "red" }}
          >Red</button>
          
          {/* Button to change the background color to green */}
          <button
            // On click, set the color state to 'green'
            onClick={() => setColor("green")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // Setting the background color of the button to green
            style={{ backgroundColor: "green" }}
          >Green</button>

          {/* Button to change the background color to blue */}
          <button
            // On click, set the color state to 'blue'
            onClick={() => setColor("blue")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // Setting the background color of the button to blue
            style={{ backgroundColor: "blue" }}
          >Blue</button>

          {/* Button to change the background color to olive */}
          <button
            // On click, set the color state to 'olive'
            onClick={() => setColor("olive")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // Setting the background color of the button to olive
            style={{ backgroundColor: "olive" }}
          >Olive</button>

          {/* Button to change the background color to purple */}
          <button
            // On click, set the color state to 'purple'
            onClick={() => setColor("purple")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // Setting the background color of the button to purple
            style={{ backgroundColor: "purple" }}
          >Purple</button>

          {/* Button to change the background color to yellow */}
          <button
            // On click, set the color state to 'yellow'
            onClick={() => setColor("yellow")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            // Setting the background color of the button to yellow
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>

          {/* Button to change the background color to Grey */}
          <button
            // On click, set the color state to 'yellow'
            onClick={() => setColor("grey")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            // Setting the background color of the button to grey
            style={{ backgroundColor: "grey" }}
          >Grey</button>

          {/* Button to change the background color to black */}
          <button
            // On click, set the color state to 'black'
            onClick={() => setColor("black")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // Setting the background color of the button to black
            style={{ backgroundColor: "black"}} 
          >Black</button>

          {/* Button to change the background color to pink */}
          <button
            // On click, set the color state to 'pink'
            onClick={() => setColor("pink")} 
            // Styling for the button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            // Setting the background color of the button to pink
            style={{ backgroundColor: "pink" }}
          >Pink</button>

          
          
         </div>
      </div>
    </div>
  )
}

// Exporting the App component as the default export
export default App