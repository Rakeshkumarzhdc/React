import "./App.css";
import Title from   "./Title.jsx";

function Description(){
return <h3>I am the Description </h3>;
}

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Title/>
    </div>
  );
}

export default App;
   