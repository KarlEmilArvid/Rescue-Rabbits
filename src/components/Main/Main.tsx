import {useState} from "react"
import "./Main.scss"
import AnimalGrid from '../AnimalGrid/AnimalGrid'
import {Animal} from '../../models/data'
import jsonData from '../../data/animals.json'

const Main = () => {
  const [animals, clickAnimals] = useState<Animal[]>(jsonData.animals)

  return (
    <main>
      <section>
        <input type="text" />
        <select>{}</select>
      </section>
      <AnimalGrid animals={animals}/>
      <button>läs in fler</button>
    </main>
  )
}

export default Main
