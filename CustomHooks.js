import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function useCustomHook(initializer, componentName) {
  const [counter, setCounter] = useState(initializer);

  function resetCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log(`The button of the ${componentName} is clicked ${counter} times.`);
  }, [counter, componentName]);

  return { counter, resetCounter };
}

export default  function Custom() {
  const { counter, resetCounter } = useCustomHook(0, "Counter Component");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook Counter</h1>
      <p>The button has been clicked {counter} times.</p>
      <button onClick={resetCounter}>Click Me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Custom />
);
