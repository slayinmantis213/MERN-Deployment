import { useEffect, useState } from 'react'
import axios from 'axios';
import List from '../components/List';

const Main = (props) => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data);
                setLoaded(true);
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = id => {
        setPets(pets.filter(pet => pet._id != id));
    }

    return (
        <div>
            <fieldset>
                {loaded ? <List pets={pets} removeFromDom={removeFromDom}/> : "loading..."}
            </fieldset>
        </div>
    )
}

export default Main;