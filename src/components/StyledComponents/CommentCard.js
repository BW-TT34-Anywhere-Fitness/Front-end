import axios from 'axios';
import { getMyClasses } from 'functions/api'
import axiosWithAuth from '../../functions/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
const example = [
    {
        "id": 1,
        "name": "Boxing Test",
        "type": "Boxing",
        "duration": "PT20M",
        "intensity": 7,
        "location": "Mars",
        "attenndees": 0,
        "maxsize": 50,
        "starttime": "2021-03-27T16:39:48Z",
        "users": [],
        "instructor": 'Bob'
    },
    {
        "id": 2,
        "name": "Boxing Test",
        "type": "Boxing",
        "duration": "PT20M",
        "intensity": 7,
        "location": "Mars",
        "attenndees": 0,
        "maxsize": 50,
        "starttime": "2021-03-27T16:39:48Z",
        "users": [],
        "instructor": 'Bob'
    },
    {
        "id": 3,
        "name": "Boxing Test",
        "type": "Boxing",
        "duration": "PT20M",
        "intensity": 7,
        "location": "Mars",
        "attenndees": 0,
        "maxsize": 50,
        "starttime": "2021-03-27T16:39:48Z",
        "users": [],
        "instructor": 'Bob'
    },

]




const CommentCard = (props) => {
    const {
        instructor,
        type,
        starttime: time,
        duration,
        intensity,
        maxsize,
        id,

    } = props.class
    const commentInitial = { title: "", bodytext: "" }
    const [classes, setClasses] = useState(example)
    const [comments, setComments] = useState(commentInitial)


    useEffect(() => {
        getMyClasses()
            .then(res => {

                setClasses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        // axiosWithAuth()
        //     .get(`https://xnor.space/api/courses/${id}/comments`)
        //     .then(res => {
        //         setComments(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post(`https://xnor.space/api/courses/${id}/comments`, comments)
            .then(res => {
                // console.log(res)
                setComments(res.data)
            })

    }
    console.log(comments)
    const handleChange = e => {
        setComments({ ...comments, [e.target.name]: e.target.value })
    }
    return (
        <Stylediv>
            <h3>{type}</h3>
            <p>{instructor.firstName}{` ` + instructor.lastName}</p>
            <p>Comments: {comments.bodytext}</p>
            {/* <form onSubmit={handleSubmit}>
                <Stylelabel>

                    <input
                        value={comments.title}
                        name="title"
                        type='text'
                        onChange={handleChange}
                    >
                    </input>
                    <Styletextbox
                        value={comments.bodytext}
                        name="bodytext"
                        type="text"
                        onChange={handleChange}
                    />
                </Stylelabel>
                <button>Submit Comment</button>
            </form> */}
        </Stylediv>
    )


    //     <ul className="carousel_track">
    //     <li className="carousel_slide">
    //         <div className="class">
    //             {props.class.type}
    //             <button>reviews</button>
    //         </div>


    //     </li>
    // </ul>
}

export default CommentCard

const Stylediv = styled.div`
input{
    width:50px;
}
`
const Stylelabel = styled.label`
//    padding: 0.5rem 1.5rem;
   display: flex;
   justify-content: space-between;
   width: 50%;
`;
const Stylenamebox = styled.div`
   justify-content: flex-start;
`;
const Styletextbox = styled.textarea`
   display: flex;
//    margin: 10px;
   width: 60%;

   justify-content: flex-end;
`;