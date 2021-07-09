import { getMyClasses } from 'functions/api'
import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import './carousel.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// const track = document.querySelector('.carousel_track')
// const slides = Array.from(track.children)
// const nextButton = document.querySelector('.carouselbutton--right')
// const prevButton = document.querySelector('.carouselbutton--left')
// const dotsNav = document.querySelector('.carousel_nav')
// const dots = Array.from(dotsNav.children);

// const slideSize = slides[0].getBoundingClientRect()
// const slideWidth = slideSize.width;


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

const Comments = () => {
    const [classes, setClasses] = useState(example)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        // axios.get('http://xnor.space/api/account/courses', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        getMyClasses()
            .then(res => {
                console.log(res)
                setClasses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(classes)
    const length = classes.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)
    // if (!Array.isArray(classes) || classes.length <= 0) {
    //     return null
    // }
    return (
        <div className="carousel">
            {/* <button className="carouselbutton carouselbutton--left">
                <img src="" alt="" />
            </button> */}
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <div className="carousel_track-container">
                {/* {classes.map((lesson, i) => <CommentCard key={lesson.id} class={lesson} color={i % 2} />)} */}
                {classes.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<ul className="carousel_track">
                                <li className="carousel_slide">
                                    <div className="class">
                                        <CommentCard class={slide} key={slide.id} />


                                    </div>



                                </li>
                            </ul>)}
                        </div>
                    )
                })}
            </div>

            {/* <button className="carouselbutton carouselbutton--right">
                <img src="" alt="" />
            </button> */}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {/* <div className="carousel_nav">
                <button className="carousel_indicator current-slide"></button>
                <button className="carousel_indicator"></button>
                <button className="carousel_indicator"></button>

            </div> */}
        </div>
    )

}

export default Comments