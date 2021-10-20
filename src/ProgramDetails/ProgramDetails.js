import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProgramDetails = () => {
    const {detailsId} = useParams();
   
    const [programs, setPrograms] = useState([]);
    // const [detail, setDetail] = useState([]);

    useEffect(() =>{
        fetch('../Category.json')
        .then( res => res.json())
        .then(data => setPrograms(data))
    } ,[]);

    useEffect( ()=>{
        const singleProgram = programs?.find(program => program.id === detailsId  ); //I will try my best but i can't 
        // setDetails(singleProgram); 
        console.log(singleProgram);

    },[])

    return (
        <div>
            <h2 className="m-5">This is Program Details {detailsId}</h2>
        </div>
    );
};

export default ProgramDetails;