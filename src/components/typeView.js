import React from 'react';
import Spinner from './spinner';

const TypeView = ({loading, error, data, children}) => {
    if (error) {
        return <p className="error">ERROR: {error.message}</p>;
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