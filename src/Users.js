import React from 'react';

const sampleUserData = [
   {
      "id": 1,
      "name": "Jared Chambers",
      "email": "edward74@santiago.info"
   },
   {
      "id": 2,
      "name": "Tara Mendoza",
      "email": "bcase@gmail.com"
   },
   {
      "id": 3,
      "name": "Jasmine Simpson",
      "email": "linda73@yahoo.com"
   },
   {
      "id": 4,
      "name": "Bradley Smith",
      "email": "lmacdonald@mendez.net"
   },
   {
      "id": 5,
      "name": "Gregory Young",
      "email": "evelyn41@morales.info"
   },
   {
      "id": 6,
      "name": "Timothy Green",
      "email": "williamsluis@yahoo.com"
   },
   {
      "id": 7,
      "name": "Anthony Bean",
      "email": "edixon@yahoo.com"
   },
   {
      "id": 8,
      "name": "Matthew Rogers",
      "email": "qfuller@hotmail.com"
   },
   {
      "id": 9,
      "name": "Jeremy Thomas",
      "email": "mark63@yahoo.com"
   },
   {
      "id": 10,
      "name": "Dr. William Nelson",
      "email": "tsanders@perez-bishop.com"
   },
   {
      "id": 11,
      "name": "Jason Lutz",
      "email": "rlittle@hotmail.com"
   },
   {
      "id": 12,
      "name": "Omar Jones",
      "email": "bennettkaren@gmail.com"
   },
   {
      "id": 13,
      "name": "Shawn Holt",
      "email": "andrewweaver@yahoo.com"
   },
   {
      "id": 14,
      "name": "Eric Obrien",
      "email": "richardsparks@gmail.com"
   },
   {
      "id": 15,
      "name": "Patrick Rivas",
      "email": "christinafuller@gmail.com"
   },
   {
      "id": 16,
      "name": "Paul Hill",
      "email": "sean69@jones.net"
   },
   {
      "id": 17,
      "name": "Julian Kelly",
      "email": "millernathaniel@gmail.com"
   },
   {
      "id": 18,
      "name": "Shane Roberts",
      "email": "joelburke@gmail.com"
   },
   {
      "id": 19,
      "name": "Eric Peterson",
      "email": "michael15@adams.com"
   },
   {
      "id": 20,
      "name": "Amy Ferguson",
      "email": "andrea09@hotmail.com"
   }
]

const Users = () => {
   return (
      <div className='center-content'>
         <h2>Users</h2>
         <table className='table-users'>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
               </tr>
            </thead>
            <tbody>
               {sampleUserData.map((user) => (
                  <tr key={user.id}>
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Users;
