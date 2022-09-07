import {Animal} from '../../models/data'

interface Props {
  animal: Animal;
//  handleClick:
}

const AnimalCard = ({animal}: Props) => {
//console.log(animal.image)

  return (
    <section className="card" key={animal.id}>
      <img src="https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        <h3>{animal.name}</h3>
        <section className="">
            <figure></figure>
            <p>{animal.location}</p>
        </section>
        <p>{animal.age}</p>
        <p>Letat efter ett hem sedan 2018-06-12 </p>
        <button className='return'>Lämna intresseanmälan</button>
    </section>
  )
}
// onClick={(handleClick)=>}
export default AnimalCard
