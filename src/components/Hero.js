import { FaTimes } from 'react-icons/fa'

const Hero = ({ hero, onDelete }) => {
  return (
    <div className='hero'>
        <h3>{hero.name} 
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(hero.name)}/>
        </h3>
      <p>H:{hero.height}, M:{hero.mass}, C:{hero.eyeColor}, S:{hero.gender}</p>
    </div>
  )
}

export default Hero
