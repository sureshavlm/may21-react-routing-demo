import { useEffect, useState } from "react";

//functional component
const Users = () => {

    console.log('******* My Users Component loaded ******');
    const [ count, setCount ] = useState(0); 
    const [ users, setUsers ] = useState([]);

    /*
        You are telling to ReacJS your component has to do something after render()
        useEffect() is hook provided by ReactJS
        this gets invoked after the render method 
        let's assume you want to some REST API call, Real DOM manipulation,
        Send some logs, Network calls etc., 
    */    
   useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('****** useEffect from Users component invoked ***');
    });

   /* buttonClick() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        });
    }*/

    return (
        <div>
            <h2>I'm from Users built using functional component</h2>
            <button onClick = { () => setCount( count + 1 ) } >Click me</button>
        </div>
    );
}

export default Users;