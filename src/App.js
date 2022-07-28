import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
           
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add-course" element={<AddCourse />} />
                <Route exact path="/view-courses" element={<AllCourses />} />
                
              </Routes>
            </Col>
          </Row>
        </Container>
 

      </Router>
      
      
    </div>
  );
}

export default App;
