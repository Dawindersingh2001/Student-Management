import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import moment from 'moment'

import { NavLink } from 'react-router-dom'




const Navbaar = () => {
    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
    const searchHandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.get(`http://localhost:8001/search/${search}`)
        console.log("Himanshu", search);
        console.log("Data", data);
        setRecord(data);

    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light  navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">STUDENTS MANAGEMENT</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-danger" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={searchHandler}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            {record &&
                                <table class="table">
                                    <thead>
                                        <tr className="table-dark">
                                            <th scope="col">id</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Father Name</th>
                                            <th scope="col">Mother Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Home Address</th>
                                            <th scope="col">Registration Date</th>

                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            record.map((element, id) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <th scope="row">{id + 1}</th>
                                                            <td>{element.name}</td>
                                                            <td>{element.email}</td>
                                                            <td>{element.fname}</td>
                                                            <td>{element.mname}</td>
                                                            <td>{element.age}</td>
                                                            <td>{element.add}</td>
                                                            <td>{moment(element.rdate).format("MMMM Do YYYY")}{" "}</td>


                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            }


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}
export default Navbaar
