import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Spinner from '../components/spinner';


//This is the query for the person we want information
const PERSON = gql`
    query getPerson($id: ID) {
        person(id: $id) {
          name
          eyeColor
          hairColor
          skinColor
          birthYear
          homeworld {
            name
          }
          vehicleConnection {
            vehicles {
              name
              model
            }
          }
          species {
            name
            designation
            classification
          }
        }      
    }

    `
    

const Person = (props) => {
    //Took the information with props
    const {match:{params}} = props;
    const personId = params.id
    
    //And in this case i send extra information in useQuery like "variables"
    const {loading, error, data} = useQuery(PERSON, {
        variables:{
            id:personId
        },
    });
    if (error) {
        return (<p className="error">{error.message}</p>);
    }
    if (loading) {
        return (
            <>
                <h1>Person</h1>
                <div className="carga">
                    <Spinner/>
                    <p>Loading</p>
                    
                </div>
            </>
        );
    }
    return ( 
        <>
            <h1>{data.person.name}</h1>
                <h3 key="gen-info">General Information</h3>
                <ul className="info">
                    <li>
                        <p>Eye Color</p>
                        <p>{data.person.eyeColor}</p>
                    </li>
                    <li>
                        <p>Hair Color</p>
                        <p>{data.person.hairColor}</p>
                    </li>
                    <li>
                        <p>Skin Color</p>
                        <p>{data.person.skinColor}</p>
                    </li>
                    <li>
                        <p>Birth Day</p>
                        <p>{data.person.birthYear}</p>
                    </li>
                </ul>
                <h3 key="veh">Vehicles</h3>
                <ul className="info-veh">
                    {data.person.vehicleConnection.vehicles.map(vehicle=>(
                        <li key={vehicle.id}>{vehicle.name}</li>

                    ))}
                </ul>
            
        </>
     );
}
 
export default Person;