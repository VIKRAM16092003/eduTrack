import React, { useState } from 'react'
import "./AddLesson.css";
import { useParams } from 'react-router-dom';
const AddLesson = () => {
    const{courseId}=useParams();
    const[title,setTitle]=useState("");
    const[videoLink,setVideoLink]=useState("");
    const[notes,setNotes]=useState("");
    

    const AddLessons=async (e)=>
    {
      e.preventDefault();
      if(title.trim()&&videoLink.trim()&&notes.trim())
      {
         fetch(`http://localhost:8081/api/courses/${courseId}/lessons`,{method:"POST",
          headers:
          {
            'Content-Type':'application/json',
          },
          body:JSON.stringify(
            {
              title,videoLink,notes
            }
          )
         })
         .then(res=>{res.json();console.log(res);
         })

         setTitle("");
         setVideoLink("")
         setNotes("");
         
      }
      
       
    }
  return (
    
    <div className='add-course-container'>
        <div className="container">
            <h3 className='adduser'>add lesson</h3>
            <form className='createcourse'>
                <div className='inputGroup'>
                <label className="text1" htmlFor="title">Title</label>
                <input type='text' id='title' value={title} onChange={e=>setTitle(e.target.value)} placeholder='Enter The Title'></input>

                <label htmlFor="description" className="text1">videoLink</label>
                <input type='text' id='description' value={videoLink} onChange={e=>setVideoLink(e.target.value)} placeholder='Enter The Description'></input>

                <label htmlFor="category" className="text1">Notes</label>
                {/* <input type='text' id='category' value={notes} onChange={e=>setNotes(e.target.value)} placeholder='enter the Category'></input> */}
                <textarea id="message" name="message" rows="5" value={notes} onChange={e=>setNotes(e.target.value)}  required></textarea>

               

                <button type="submit" onClick={(e)=>AddLessons(e)} className="btn btn-primary">ADD LESSON</button>

                </div>
            </form>
            
        </div>
    </div>
  )
}

export default AddLesson