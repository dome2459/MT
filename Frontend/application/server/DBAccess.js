import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App(){

    const [Name, setName] = useState('')
    const [ConnectionId, setConnection] = useState('')

    const submitHanlder = e => {
        axios.post('http://localhost:3005/signup', {Name: Name, ConnectionId: ConnectionId})
        .then((data) => {
            console.log(data)
            setName('')
            setConnection('')
        })
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h3> SignUp</h3>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' value={Name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor='connectionId'>ConnectionId</label>
                <input id='connectionId' type='integer' value={ConnectionId} onChange={(e) => setConnection(e.target.value)}/>
                <div>
                <button type='button'>Cancel</button>
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}
export default App;

 