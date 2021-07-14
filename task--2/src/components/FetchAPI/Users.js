import React from 'react';
import  './FetchAPI.css'

const Users = ({ fname,email ,id, lname}) => {
    return(
        <div className="user">
            <div className="image">
            <img alt='images' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
            </div>
            <div className="content">             
                <h3>{fname} {lname}</h3>
                      
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Users
