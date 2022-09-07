import {Animal} from '../../models/data'
import AnimalCard from '../AnimalCard/AnimalCard'

interface Props {
    animals: Animal[];
//    handleClick: 
}

const AnimalGrid = ({animals}: Props) => (
	<div className="book-grid">
		{animals.map(animal => (
			<AnimalCard key={animal.id} animal={animal}/>
		))}
	</div>
)

export default AnimalGrid
