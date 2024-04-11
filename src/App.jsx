import "./index.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <Header />
      <div className="card__big__container">{cards}</div>
    </>
  );
}

export default App;

//https://shimmering-nasturtium-4a4ccc.netlify.app
