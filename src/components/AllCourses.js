import React, { useState,useEffect } from 'react'
import Course from './Course'
import base_url from '../api/bootapi'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const AllCourses = () => {
  
  useEffect(() => {
    getAllCourses();
  }, [])
  
  
  const getAllCourses = () => {
   
    axios.get(`${base_url}/courses`,
      {
        headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json', }
      }).then(
      (response) => {
          console.log(response.data)
          toast.success("Courses Loaded Successfully")
          setCourses(response.data)
      }
      , (error) => { console.log(error) }
    );
  };



    const [courses, setCourses] = useState([]);
  
  const updateCourses = (id) => { 
    setCourses(courses.filter((c) => c.id != id));
  }
    return (
      <div>
        
          <h1>All Courses</h1>
            {
          courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />):"No Courses"
            }
    </div>
  )
}

export default AllCourses