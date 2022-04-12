import Select from 'react-select'
import { useState } from 'react'

const AddHero = ({ onAdd }) => {
    const eyeColors = [
        { value: 'blue', label: 'Blue'},
        { value: 'brown', label: 'Brown'},
        { value: 'green', label: 'Green'},
        { value: 'gray', label: 'Gray'},
        { value: 'red', label: 'Red'},
        { value: 'yellow', label: 'Yellow'},
        { value: 'orange', label: 'Orange'},
    ]
    const genders = [
        { value: 'male', label: 'Male'},
        { value: 'female', label: 'Female'},
        { value: 'n/a', label: 'N/A'},
    ]
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !birhtday || !eyeColor || !gender) {
            alert('Missing data')
        }
        onAdd({ name, birhtday, height, mass, eyeColor, gender})
        setName('')
        setBirhtday('')
        setHeight('180')
        setMass('70')
        setEyeColor('')
        setGender('')
    }

    const [name, setName] = useState('')
    const [birhtday, setBirhtday] = useState('')
    const [height, setHeight] = useState('180')
    const [mass, setMass] = useState('70')
    const [eyeColor, setEyeColor] = useState('')
    const [gender, setGender] = useState('')

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Hero</label>
          <input type='text' placeholder="Add Hero" value={name} onChange={
              (e) => setName(e.target.value)
          }/>
      </div>
      <div className='form-control'>
          <label>Birhtday</label>
          <input type='date' value={birhtday} onChange={
              (e) => setBirhtday(e.target.value)
          }/>
      </div>
      <div className='form-control'>
          <label>Height</label>
          <h5>{height}</h5>
          <input type='range' min="50" max="300" value={height} onChange={
              (e) => setHeight(e.target.value)
          }/>
      </div>
      <div className='form-control'>
          <label>Mass</label>
          <h5>{mass}</h5>
          <input type='range' min="20" max="200" value={mass} onChange={
              (e) => setMass(e.target.value)
          }/>
      </div>
      <div className="form-control">
            <label>Choose eye color:</label>
            <Select options={eyeColors} label={eyeColor} onChange={
              (e) => setEyeColor(e.label)
          }/>
        </div>
        
        <div className="form-control">
            <label>Choose gender:</label>
            <Select options={genders} label={gender} onChange={
              (e) => setGender(e.label)
          }/>
        </div>
      <input className='btn btn-block' type='submit' value="Add Hero"/>
    </form>
  )
}

export default AddHero
