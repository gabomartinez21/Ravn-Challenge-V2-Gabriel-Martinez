import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ListPeople from '../components/listPeople';
import Person from '../pages/person';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ListPeople}/>
            <Route path="/person/:id" component={Person}/>
        </Switch>
    )
}

export default Routes;
