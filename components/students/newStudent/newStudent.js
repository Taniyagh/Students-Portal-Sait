import React,{useEffect} from 'react';
import classes from './newStudent.module.css';
import Button from '../../UI/button/button';
import WithClass from '../../hoc/WithClass';

const NewStudent =(props)=>{
    useEffect(()=>{
        console.log(props)
    },[])
    const{studentName, studentClass, studentPhoneNumber, studentEmail}=props
    const {studentNameHandler, studentClassHandler, studentPhoneNumberHandler, studentEmailHandler} = props;
    return(
        <React.Fragment>

                <h1>اضافه کردن دانش آموز جدید</h1>
                <label>نام و نام خانوادگی</label>
                <input type="text" value={studentName} onChange={studentNameHandler} />
                <label>کلاس</label>
                <input type="number" value={studentClass} onChange={studentClassHandler} maxLength={3} />
                <label>شماره تلفن</label>
                <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler} />
                <label>ایمیل</label>
                <input type="email" value={studentEmail} onChange={studentEmailHandler} />
                <Button clicked={props.clicked} btnType="danger">اضافه کردن</Button>
            </React.Fragment>
    )
}
export default React.memo(WithClass(NewStudent, classes.NewPost));
