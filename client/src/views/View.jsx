import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const View = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);

    const deletePet = (id) => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log("deleted", res)
                navigate('/pets')
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>{pet.petName}'s Details</h3>
            <p>Name: {pet.petName}</p>
            <p>Type: {pet.petType}</p>
            <p>Description: {pet.description}</p>
            <p>Skill1: {pet.skill1}</p>
            <p>Skill2: {pet.skill2}</p>
            <p>Skill3: {pet.skill3}</p>
            <div>
                <Link to={"/pets/" + pet._id + "/update"}>Edit</Link>
                <button onClick={(e)=>{deletePet(pet._id)}}>Adopt</button>
            </div>
        </div>
    )
}

export default View