package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CourseDao;
import com.example.demo.model.Course;

@Service
public class CourseServiceImp implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
	// List<Course> list;
	
	public CourseServiceImp() {
		// list = new ArrayList<>();
		
		// list.add(new Course(145,"java course","basics of java"));
		// list.add(new Course(155,"python","basics of python"));
	}
	
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}
	
	@Override
	public Course getCourse(long courseId) {
		
//			Course c = null;
//			for(Course course:list) {
//				if(course.getId()==courseId) {
//					c=course;
//					break;
//				}
//			}
			return courseDao.getOne(courseId);
		
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		// list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		list.forEach(e ->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		// TODO Auto-generated method stub
		// list = this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		
	}

}
