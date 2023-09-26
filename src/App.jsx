import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
   //console.log(featuredPup)

  return (
    <>
    <div className="flex">
    <h1>Puppy Pals</h1>
      <div>
      { featPupId && (
        <div className='featpup'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      ) }
        {
          puppies.map((puppy) => {
            return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id} className='card'>{puppy.name}</p>;
          })
        }
      </div>
      </div>
    </>
  )
}

export default App
