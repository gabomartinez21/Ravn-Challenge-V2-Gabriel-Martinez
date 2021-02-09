import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TypeView from '../components/typeView';


const Person = (props) => {
    const {match:{params}} = props;
    const personId = params.id
    const PERSON = gql`
    query getPerson($personId: ID) {
        person(personID: $personId) {
          name
          eyeColor
          hairColor
          skinColor
          
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
    const {loading, error, data} = useQuery(PERSON, {
        variables:{personId}
    });
    if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;
    console.log(data)
    return ( 
        <>
            <h1>Person</h1>
            {JSON.stringify(data)}
            {/* <TypeView data={data} loading={loading} error={error}> */}
                {/* {data?.data?.person.map((res)=>(                        
                ))} */}

            {/* </TypeView> */}
        </>
     );
}
 
export default Person;