import Hero from "./Hero"

const Heroes = ({ heroes, onDelete }) => {
  return (
    <>
      {heroes.map((hero) => (
        <Hero key={hero.name} hero={hero} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Heroes
