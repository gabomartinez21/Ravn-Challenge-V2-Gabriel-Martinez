import React from 'react';
import Spinner from './spinner';

/*
    This component is helpful to encapsulate the result of useQuery
*/
const TypeView = ({loading, error, data, children}) => {
    if (error) {
        return (<p className="error">{error.message}</p>);
    }
    if (loading) {
        return (
            <div className="carga">
                <Spinner/>
                <p>Loading</p>
                
            </div>
        );
    }
    if (!data) {
        return <p>Nothing to show...</p>;
    }else{
        return children;
    }
}
 
export default TypeView;