import React, { useState, useEffect } from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';



const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};


const Banner = ({ title }) => (
  <h1 className="title">{ title }</h1>
);

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
)

const buttonState = selected => (
  selected ? `button is-success is-selected` : 'button'
);

const TermSelector = ({ state }) => (
  <div className="field has-addons">
  { Object.values(terms)
      .map(value => 
        <button key={value}
          className={ buttonState(value === state.term) }
          onClick={ () => state.setTerm(value) }
          >
          { value }
        </button>
      )
  }
  </div>
);
  
const Course = ({ course }) => (
  <button className="button">
    { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
  </button>
);

const CourseList = ({ courses }) => {
  const [term, setTerm] = React.useState('Fall');
  const termCourses = courses.filter(course => term === getCourseTerm(course));
  
  return (
    <React.Fragment>
      <TermSelector state={ { term, setTerm } } />
      <div className="buttons">
        { termCourses.map(course =>
           <Course key={ course.id } course={ course }  />) }
      </div>
    </React.Fragment>
  );
};

const App = () => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php'

  useEffect(() => {
      const fetchSchedule = async () => {
        const response = await fetch(url);
        if (!response.ok) throw response;
        const json = await response.json();
        setSchedule(json);
      }
      fetchSchedule();
  }, [])

  return (
    <Container>
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </Container>
  )
};

export default App;
