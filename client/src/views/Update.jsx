import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const[petName, setPetName] = useState("");
    const[pn, setPN] = useState("");
    const[petType, setPetType] = useState("");
    const[description, setDescription] = useState("");
    const[skill1, setSkill1] = useState("");
    const[skill2, setSkill2]= useState("");
    const[skill3, setSkill3] = useState("");
    const[errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setPetName(res.data.petName);
                setPN(res.data.petName);
                setPetType(res.data.petType);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            }).catch(err => console.error(err));
    }, []);

    const updatePet = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/pets/' + id, {
            petName,
            petType,
            description,
            skill1,
            skill2,
            skill3
            }
        ).then(res =>{
            console.log(res);
            navigate('/pets/')
        }) 
        .catch(err =>{ 
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log(errorArr)
        });
    }

    return (
        <div>
            <h1>Edit {pn}</h1>
            <form onSubmit={updatePet}>
            <div>
                <div>
                    <label>Pet's Name</label>
                    <input onChange={e=>setPetName(e.target.value)} value={petName} name='petName'/>
                    <label>Pet's Type</label>
                    <input onChange={e=>setPetType(e.target.value)} value={petType} name='petType'/>
                    <label>Description</label>
                    <input onChange={e=>setDescription(e.target.value)} value={description} name='description'/>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                </div>
                <div>

                    <p>Skills (optional)</p>
                    <label>Skill1</label>
                    <input onChange={e=>setSkill1(e.target.value)} value={skill1} name='skill1'/>
                    <label>Skill2</label>
                    <input onChange={e=>setSkill2(e.target.value)} value={skill2} name='skill2'/>
                    <label>Skill3</label>
                    <input onChange={e=>setSkill3(e.target.value)} value={skill3} name='skill3'/>
                </div>
            </div>
            <input type="submit" />
        </form>
        </div>
    )
}

export default Update;
