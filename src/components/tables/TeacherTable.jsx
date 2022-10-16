import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsPhone } from 'react-icons/bs'
import { Link, useParams } from "react-router-dom"
import Endpoint from '../../api/Api';
import '../../css/table.css'

export default function TeacherTable() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("")
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'users/show/teachers', { headers: { "Authorization": `Bearer ${token}` } });
                setData(response);
                console.log(response)
            } catch (error) {
                console.error(error.message);
            }

        }

        fetchData();
    }, []);
  return (
    <div className='table'>
        <input type="search" placeholder='search' className='search' onChange={event => setQuery(event.target.value)} />
        <div className="boxes">
                {data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                    else if (post.lastname.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((data) => (
                    <Link to={`/teacher/${data.id}`} className='link'>

                        <div className="box" key={data.id}>

                            <div className='card' >
                                <div className='top'>
                                    <div className='user'>
                                        <img className='userImageCard' src="https://media.herworld.com/public/2019/03/image/lisa_rec.png?compress=true&quality=80&w=400&dpr=2.6" alt="" />
                                        {/* <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000" alt="" /> */}
                                    </div>
                                    <div className='info'>
                                        <p className='name'>{data.name} {data.lastname}</p>
                                        <p className='subject'>{data.subjectName}</p>
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <p className='phone'> <BsPhone className='icon' /> {data.phoneNumber}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
    </div>
  )
}
