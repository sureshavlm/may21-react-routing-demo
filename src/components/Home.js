import React from 'react';

class Home extends React.Component {

    //invoked when the component gets instantiated
    constructor(props) {
        super(props);

        this.state = {
             date : new Date() 
        }; //component state initialized with default value

        console.log('**** constructor from Home Component ***');
    }

    //invokes immediately after render() invoked
    componentDidMount() {
        this.timerObj = setInterval(() => {
            this.tick();//task
        }, 1000);

        console.log('**** componentDidMount from Home Component ***');
    }

    //invokes when state of component changes
    componentDidUpdate() {
        console.log('**** componentDidUpdate from Home Component ***');
    }
    //invoked when component detaches from DOM
    componentWillUnmount() {
        console.log('**** componentWillUnmount from Home Component ***');
        clearInterval(this.timerObj); // clear the time interval to avoid memory leaks at browser
    }

    tick() {
        //updating the date with new date and time
        this.setState({
            date: new Date()
        });

       // this.state.date = new Date(); //don't do this
    }
    

    render() {
        console.log('**** render from Home Component ***');
        return(
        <>
           { /* this is the comment in JSX */ }
            <h1>I'm from Home Component</h1>
            <p>It is: { this.state.date.toLocaleTimeString() }</p>
        </>
        )
    }
}

export default Home;