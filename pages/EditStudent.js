import React,{useState} from 'react';
import Button from '../components/UI/button/button';
import './style/editStudent.css';

const EditStudent = (props)=>{
   const {id,name,classNumber,phoneNumber,email} = props.location.state;
   const[student_name,setName] = useState(name);
   const[student_classNumber,setNumber] = useState(classNumber);
   const[student_phoneNumber,setPhoneNumber] = useState(phoneNumber);
   const[student_emai,setEmail] = useState(email);
   const [message,setMessage]= useState('');
    const editStudent = ()=>{
        
        fetch('http://192.168.119.2/student/updateStudent.php',{
            method:'POST',
            headers:{
                'Accept' : 'applicaion/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_id:id,
                student_name:student_name,
                studet_class:student_classNumber,
                student_phone_number:student_phoneNumber,
                student_email:student_emai
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                if(responseJson==='succefull'){
                    props.history.replace('/')
                }
                else{
                    setMessage(responseJson)
                }
            }).catch((error)=>{
                setMessage(error)
            })
    }
    return(
        <div className="NewPost">
                <h1>ویرایش دانش آموز</h1>
                <h2>{message}</h2>
                <label>نام و نام خانوادگی</label>
                <input type="text" value={student_name} onChange={(event)=>setName(event.target.value)}  />
                <label>کلاس</label>
                <input type="number"  value={student_classNumber} onChange={(event)=>setNumber(event.target.value)} />
                <label>شماره تلفن</label>
                <input type="number" value={student_phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}  />
                <label>ایمیل</label>
                <input type="email" value={student_emai} onChange={(event)=>setEmail(event.target.value)} />
                <Button clicked={editStudent} btnType="danger">ویرایش اطلاعات</Button>
        </div>
    )
}
export default EditStudent;