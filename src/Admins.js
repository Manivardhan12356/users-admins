import React from 'react'

const sampleAdminData=[
  {
    "id": 1,
    "name": "Karen Campbell",
    "role": "Pilot, airline",
    "email": "jorge00@gmail.com"
  },
  {
    "id": 2,
    "name": "Karen Maldonado",
    "role": "TEFL teacher",
    "email": "susanlee@gmail.com"
  },
  {
    "id": 3,
    "name": "Gregory Miller",
    "role": "Lexicographer",
    "email": "khoward@schultz-woods.net"
  },
  {
    "id": 4,
    "name": "Dennis Garza",
    "role": "Passenger transport manager",
    "email": "jenna43@gmail.com"
  },
  {
    "id": 5,
    "name": "Whitney Turner",
    "role": "Surveyor, insurance",
    "email": "paulnatalie@hotmail.com"
  },
  {
    "id": 6,
    "name": "Brittany Pena",
    "role": "Musician",
    "email": "rgibson@underwood.com"
  },
  {
    "id": 7,
    "name": "Ryan Jensen",
    "role": "Physiotherapist",
    "email": "kaylakeith@gmail.com"
  },
  {
    "id": 8,
    "name": "Jessica Payne",
    "role": "Insurance underwriter",
    "email": "jordankrause@gmail.com"
  },
  {
    "id": 9,
    "name": "Mr. Peter Aguilar",
    "role": "Surveyor, quantity",
    "email": "ryan42@moon.biz"
  },
  {
    "id": 10,
    "name": "James Scott",
    "role": "Agricultural engineer",
    "email": "aaron82@smith.com"
  },
  {
    "id": 11,
    "name": "Joseph Nicholson",
    "role": "Visual merchandiser",
    "email": "kathleen27@gmail.com"
  },
  {
    "id": 12,
    "name": "Tiffany Martin",
    "role": "Engineering geologist",
    "email": "kelleymaria@gmail.com"
  },
  {
    "id": 13,
    "name": "David Miles",
    "role": "Lexicographer",
    "email": "odyer@yahoo.com"
  },
  {
    "id": 14,
    "name": "James Travis",
    "role": "IT technical support officer",
    "email": "montgomeryronald@wilkerson.com"
  },
  {
    "id": 15,
    "name": "David Riddle",
    "role": "Journalist, newspaper",
    "email": "josephjoseph@miller.biz"
  },
  {
    "id": 16,
    "name": "Melanie Wright",
    "role": "Engineer, maintenance",
    "email": "vdixon@conley-estrada.com"
  },
  {
    "id": 17,
    "name": "Alexandra Johnston",
    "role": "Music tutor",
    "email": "brookecarroll@downs.com"
  },
  {
    "id": 18,
    "name": "Eric Sutton",
    "role": "Engineer, land",
    "email": "george16@parker.info"
  },
  {
    "id": 19,
    "name": "Mrs. Megan Harding",
    "role": "Architectural technologist",
    "email": "ronaldfrost@bryant.com"
  },
  {
    "id": 20,
    "name": "Stanley Guerrero",
    "role": "Quarry manager",
    "email": "hvazquez@delacruz-martinez.com"
  }
]


const Admin = () => {
  return (
      <div className='center-content'>
         <h2>Admin</h2>
         <table className='table-users'>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
               </tr>
            </thead>
            <tbody>
               {sampleAdminData.map((user) => (
                  <tr key={user.id}>
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
  )
}

export default Admin;