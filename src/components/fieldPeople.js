import React from 'react';
import {Link} from 'react-router-dom';

const FieldPeople = ({dataPeople}) => {
    return (
        <li>
            <Link to={`/person/${dataPeople.id}`}>
                <h3>{dataPeople.name}</h3>
                <p>{dataPeople.species == null ? 'Human' : dataPeople.species.name} from {dataPeople.homeworld.name}</p>
            </Link>  
        </li>

    );
}
 
export default FieldPeople;