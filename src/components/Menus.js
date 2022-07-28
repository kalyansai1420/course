import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup,ListGroupItem } from 'reactstrap'
const Menus = () => {
  return (
      <div>
          <ListGroup>
              <Link className='list-group-item list-group-item-action' tag="a" to="/" action>Home</Link>
              <Link className='list-group-item list-group-item-action' tag="a" to="/add-course" action>Add Course</Link>
              <Link className='list-group-item list-group-item-action' tag="a" to="/view-courses" action>View Courses</Link>
          </ListGroup>
      </div>
  )
}

export default Menus