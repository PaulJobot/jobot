import { useState, useEffect } from 'react';
import { listReviews } from "../../data/review";
import classes from "./Reviews.module.css";

const Reviews = () => {

    const [review, setReview] = useState(listReviews)
    const [currentPerson, setCurrentPerson] = useState(0)

    const paginationSlide = (page) => {
        setCurrentPerson(page)
    }

    useEffect(() => {

      const myInterval = setInterval(() => {
        if (currentPerson <= review.length - 2) { // à modifier, logique bizarre
          setCurrentPerson(currentPerson + 1)
        }
        else  {
          setCurrentPerson(0)
        }
      }, 10000);

      return () => clearInterval(myInterval)

    }, [currentPerson]);

  return (
    <div className={classes.slider}>
        <div className={classes.slider_container}>
            {review.map((person, personIndex) => {
                return (
                    <article
                        className={`${classes.slide}`}
                        style={{transform: `translateX(${100 * (personIndex - currentPerson)}%)`}}
                        key={person.id}>
                        <img src={person.image} alt={person.image} />
                        <div>
                            <h2>{person.name}</h2>
                            <h4>{person.title}</h4>
                            <p>{person.review}</p>
                        </div>
                    </article>
                )
            })}
        </div>
        <div className={classes.paginationSlider}>
            {
                review.map(person => {
                    return (
                        <div
                            className={classes.pagination}
                            style={currentPerson === person.id - 1 ? { backgroundColor: '#555' } : {}}
                            onClick={() => paginationSlide(person.id - 1)}
                            key={person.id}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Reviews
