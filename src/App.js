import { useState } from "react";
import List from "./components/List";
import data from './data/data';
import "./index.css";

const App = () => {
  const [people,setPeople]=useState(data);
  return (
    <main>
      <div className='container'>
        <h3>{people.length} birthdays today</h3>
        {console.log(people)}
        <List data={people} />
        <button onClick={()=>setPeople([])}>clear all</button>
      </div>
    </main>
  )
}

export default App
