import axios from 'axios';
import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from 'reactstrap';
import base_url from '../api/bootapi';

const Course = ({ course,update }) => {
    
    const deleteCourse = (id) => { 
        axios.delete(`${base_url}/courses/${id}`, {
            headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json', }
        }).then(
            (response) => {
                console.log("deleted")
                update(id);
            }
            , (error) => { console.log(error) }
        )
    }
    return (
        
        <Card className='text-center'>
            
                <CardBody>
                    
                <CardSubtitle className='font-weight-bold'>{ course.title}</CardSubtitle>
                <CardText>{course.description }</CardText>
                <Container className='text-center'>
                    <Button onClick={() => {
                        deleteCourse(course.id);
                    }} color='danger'>Delete</Button>
                    <Button color='warning ml-3'>Update</Button>
                </Container>
                </CardBody>
               
            </Card>
       
    );
}

export default Course