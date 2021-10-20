import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProgramDetails = () => {
    const {detailsId} = useParams();
   
    const [programs, setPrograms] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() =>{
        fetch('/Category.json')
        .then( res => res.json())
        .then(data => setPrograms(data))
    } ,[]);

    useEffect( ()=>{
        const programDetails = programs.find(program => program.id == detailsId  ); 
        // console.log(programDetails);
        setDetails(programDetails); 
     
    },[programs]);

    return (
        <div className="p-5 m-5 border border-danger">
            <small className="btn pb-5 bg-light">This is program - {detailsId}</small>
          <div className="d-flex">
            <div>
                <img width="450px" src={details?.img} alt="" />
            </div>
            <div className="p-5">
                    <h2>{details?.name}</h2>
                    <p>{details?.description}</p>
            </div>
          </div>
        </div>
    );
};

export default ProgramDetails;