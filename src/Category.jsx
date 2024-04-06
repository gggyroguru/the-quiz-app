import { useEffect, useState } from 'react'
import quizzes from './api/quizzes'

const Category = ({x, y}) => {

  const [category, setCategory] = useState(x);
  const [types, setTypes] = useState(y);
  const [quiz, setquiz] = useState(quizzes[0][category][0][types]);
  const [courses, setCourses] = useState(Object.keys(quizzes[0][category][0]));

  console.log(category, types, quiz, courses);
  
  return (
    <>
    </>
  );
};

export default Category;