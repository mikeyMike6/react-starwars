import { useState } from 'react'

const Filter = ({ filterMass, filterHeight }) => {
    const [height, setHeight] = useState('0')
    const [mass, setMass] = useState('0')
  return (
      
    <div>
      <div className='form-control'>
          <label>Height Filter</label>
          <h4> &lt; {height}</h4>
          <input type='range' value={height} min="50" max="300" onChange={
              (e) => {
                setHeight(e.target.value)
                filterHeight(e.target.value)
              }
          }/>
      </div>
      <div className='form-control'>
          <label>Mass Filter</label>
          <h4> &lt; {mass}</h4>
          <input type='range' value={mass} min="20" max="200" onChange={
              (e) => 
              { 
                  setMass(e.target.value)
                  filterMass(e.target.value) 
                }
          }/>
      </div>
    </div>
  )
}

export default Filter
