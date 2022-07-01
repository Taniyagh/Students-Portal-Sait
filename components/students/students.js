import React,{useEffect} from 'react';
import Student from './student/student';
import './student/students.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
const Students=(props)=>{
    useEffect(()=>{
        //console.log(props.studentsList)
    },[props.studentsList])
    let students = props.studentsList.map((student,index)=>
    <ErrorBoundary key={index}>
         <Student
        
        id={student.student_id}
        name={student.student_name}
        classNumber={student.student_class}
        phoneNumber={student.studeny_phone_number}
        email={student.student_email}
        
        deleted={()=>props.deleted(student.student_id)}
        edited={()=>props.edited(
            student.student_id,student.student_name,student.student_class,student.studeny_phone_number,student.student_email
            )}
        
    />
    </ErrorBoundary>
   
    )
    if(props.toggle){
        return(
            <div className="student-section">
                {
                   students
                }
            </div>
        )
    }
    return students
}
export default React.memo(Students);
Students.propTypes={
    studentsList:PropTypes.array.isRequired,
    nameChanged:PropTypes.func.isRequired,
    deleted:PropTypes.func.isRequired,
    toggle:PropTypes.bool.isRequired
}