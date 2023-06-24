import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Registration from './Registration/Registration';
import Login from './login/Login';
import Welcome from './welcomepage/PokemonList';

function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Registration/>}/>

                <Route path='/login' element={<Login/>}/>
                <Route path='/welcome' element={<Welcome/>}/>


            </Routes>
            
        </div>
    );
}

export default AllRoutes;