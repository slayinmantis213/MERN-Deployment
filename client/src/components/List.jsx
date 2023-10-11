import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pets.map((pet) => {
                        return <tr key={pet._id}>
                            <td>
                                {pet.petName}
                            </td>
                            <td>
                                {pet.petType}
                            </td>
                            <td>
                                <Link to={'/pets/' + pet._id}>
                                <button>View</button>
                                </Link>
                                <Link to={'/pets/' + pet._id + '/update'}>
                                <button>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default List