import React from 'react';
import { useQuery, gql } from '@apollo/client';
import FieldPeople from './fieldPeople';
import TypeView from '../components/typeView';

const PEOPLES = gql`
    query getPeople{
        allPeople{
            
            people {
                id
                name
                eyeColor
                hairColor
                skinColor
                homeworld {
                    name
                }
                species {
                    name
                    designation
                    classification
                }
                vehicleConnection {
                    vehicles {
                        name
                        model
                    }
                }
            }
        }
    }

`
const ListPeople = () => {
    const {loading, error, data} = useQuery(PEOPLES);
    
    return (
        <>
            <h1>People of Star Wars</h1>
            <ul className="list-people">
                <TypeView data={data} loading={loading} error={error}>
                    {data?.allPeople?.people.map((res)=>(                        
                        <FieldPeople key={res.id} dataPeople={res}/>
                    ))}

                </TypeView>
            </ul>
        
        </>
            
        
      );
}
 
export default ListPeople;