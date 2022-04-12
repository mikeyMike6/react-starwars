import Header from "./components/Header";
import Heroes from "./components/Heroes";
import AddHero from "./components/AddHero";
import Filter from "./components/Filter";
import { useState } from 'react'

const App = () => {
const [showAddHero, setShowAddHero] = useState(false)

  const [heroes, setHeroes] = useState([
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
])

  const filterHeroesByMass = (mass) => {
    setHeroes(heroes.filter((hero) => parseInt(hero.mass) >= mass))
  }

  const filterHeroesByHeight = (height) => {
    setHeroes(heroes.filter((hero) => parseInt(hero.height) >= height))
  }

  const addHero = (hero) => {
    setHeroes([...heroes, hero])
  }

  const deleteHero = (name) => {
    setHeroes(heroes.filter((hero) => hero.name !== name))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddHero(!showAddHero)} showAdd={showAddHero}/>
      {showAddHero ? <AddHero onAdd={addHero}/> : <Filter filterMass={filterHeroesByMass} filterHeight={filterHeroesByHeight}/>}
      {heroes.length > 0 ?  
        <Heroes heroes={heroes} onDelete={deleteHero}/>
      : 'Han solo shot first'}
    </div>
  );
}


export default App;
