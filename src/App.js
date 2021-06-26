import React from "react";

function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Enterprise</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="spageti" />
      <Food fav="wine" />
    </div>
  );
}

export default App;
