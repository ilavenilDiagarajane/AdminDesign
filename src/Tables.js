import {useState} from "react";
export function Tables() {
    var [data]=useState([
        {
        id:1,
         Name: "Anakin",
         Gender: "male", 
         Homeworld: "Tatooine",
         Born: "41.9BBY",
       
        },
        {
        id:2,
         Name: "Amidala",
         Gender: "female", 
         Homeworld: "Naboo",
         Born: "46BBY",
        
        },

        {
        id:3,
         Name: "R2-D2",
         Gender: "unknown",
         Homeworld: "Naboo",
         Born: "33BBY",
        
        },
        {
            id:4,
             Name: "John",
             Gender: "Male",
             Homeworld: "Naboo",
             Born: "32BBY",
            
            },
            {
                id:5,
                 Name: "Doe",
                 Gender: "Male",
                 Homeworld: "Naboo",
                 Born: "23BBY",
                
                }
    ])
   
  return (
    <div>
      <h1>Tables</h1>
      <table  className="table">
        <thead  className="thead-light">
          <tr>
            <th >#</th>
            <th >Name</th>
            <th>Gender</th>
            <th >Homeworld</th>
            <th>Born</th>
          </tr>
        </thead>
        <tbody>
         {data.map((element)=>
           <tr  key={element.id}>
            <th>{element.id}</th>
            <td>{element.Name}</td>
            <td>{element.Gender}</td>
            <td>{element.Homeworld}</td>
            <td>{element.Born}</td>
          </tr>)} 
         {}
        </tbody>
      </table>
    </div>
  );
}
