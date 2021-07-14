import React from 'react';
import Users from './Users';
import './FetchAPI.css';

const UserPerson = ({robots}) => {
    return(
        <div className="interns">
            <div className="person">
            {
            robots.map((user,i) => {
                return(
                    <Users key={i}
                    id={robots[i].id}
                    fname={robots[i].first_name}
                    lname={robots[i].last_name}
                    email={robots[i].email}
                    />

                )
            })
        }  
        </div> 
            <div className="footer">
            <p className="foot"> World Women Wide-Web Design--Designed by Mehejabin</p>
           
            </div>
            
        </div>
    );
}

export default UserPerson