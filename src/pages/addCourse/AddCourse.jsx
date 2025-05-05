import React, { useState } from 'react'
import "./addcourse.css";

const AddCourse = () => {
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[category,setCategory]=useState("");
    const[visibility,setVisibility]=useState("");

    const createCourse=async (e)=>
    {
      e.preventDefault();
      if(title.trim()&&description.trim()&&category.trim()&&visibility.trim())
      {
         fetch("http://localhost:8081/api/courses",{method:"POST",
          headers:
          {
            'Content-Type':'application/json',
          },
          body:JSON.stringify(
            {
              title,description,category,visibility
            }
          )
         })
         .then(res=>{res.json();console.log(res);
         })

         setTitle("");
         setDescription("");
         setCategory("");
         setVisibility("");
         
      }
       
    }
  return (
    <div className='add-course-container'>
        <div className="container">
            <h3 className='adduser'>create course</h3>
            <form className='createcourse'>
                <div className='inputGroup'>
                <label className="text1" htmlFor="title">Title</label>
                <input type='text' id='title' value={title} onChange={e=>setTitle(e.target.value)} placeholder='enter the Title'></input>

                <label htmlFor="description" className="text1">Description</label>
                <input type='text' id='description' value={description} onChange={e=>setDescription(e.target.value)} placeholder='enter the Description'></input>

                <label htmlFor="category" className="text1">Category</label>
                <input type='text' id='category' value={category} onChange={e=>setCategory(e.target.value)} placeholder='enter the Category'></input>

                <label htmlFor="visibility" className="text1">Visibility</label>
                {/* <input type='text' id='visibility' value={visibility} onChange={e=>setVisibility(e.target.value)} placeholder='enter the Visibility'></input> */}
                <select id="visibility" value={visibility} onChange={e => setVisibility(e.target.value)}>
  <option value="">Select Visibility</option>
  <option value="public">Public</option>
  <option value="private">Private</option>
</select>

                <button type="submit" onClick={(e)=>createCourse(e)} className="btn btn-primary">CREATE COURSE</button>

                </div>
            </form>
            
        </div>
    </div>
  )
}

export default AddCourse