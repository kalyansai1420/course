import axios from 'axios';
import React,{Fragment, useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from '../api/bootapi';

const AddCourse = () => {

    useEffect(() => {
        postData(course);
  
    }, []);
    const [course, setCourse] = useState({})
    
    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);

        
    }

    const postData = (data) => {
        axios.post(`${base_url}/courses`, {
            headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json', }
        },data).then(
            (response) => { 
                console.log(response.data)
                //toast.success("Course Added Successfully")
            }
        , (error) => { console.log(error) }
        )
    }
 

  return (
      <Fragment>
          <h1 className='text-center my-3'>Fill Course Details</h1>
          <Form onSubmit={handleForm}>
              <FormGroup>
                  <label for="userId"> Course Id</label>
                  <Input 
                      type='text' placeholder='Enter Course Id' name='userId' id='userId'
                      onChange={(e) => { setCourse({ ...course, id: e.target.value }) }} />
              </FormGroup>
              <FormGroup>
                  <label for="title"> Course Title</label>
                  <Input 
                      type='text' placeholder='Enter Course title' name='title' id='title'
                      onChange={(e) => { setCourse({ ...course, title: e.target.value }) }} />
              </FormGroup>
              <FormGroup>
                  <label for="description"> Course Description</label>
                  <Input 
                      type='textarea' placeholder='Enter Course Description' name='description' id='description'
                      onChange={(e) => { setCourse({ ...course, description: e.target.value }) }} />
              </FormGroup>
              <Button type="submit" color="success">Add Course</Button>
              <Button type="reset" color="warning ml-2">Clear</Button>

          </Form>
     
      </Fragment>
          
  )
};

export default AddCourse