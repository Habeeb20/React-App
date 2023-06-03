import { useState } from "react";
import postService from '../services/postService'

import { useRef } from 'react'

const input = {useRef}



function CreateComponent(){
    const {title, setTitle} = useState("");
    const {date, setDate} = useState("");
    const {message, setMessage} = useState("");





    


    const handleSubmit = async(event) => {
        event.preventDefault();
       
        

       const formData= new FormData();

       formData.append('title', title);
       formData.append('date', date);

       const response = await postService.create(formData);
       if (response.data.success = true){
        setMessage('post added')
       } else {
        setMessage("post not created")
       }
       setTimeout(function(){
        setMessage('')
       }, 2000)
      
       event.target.reset();


    }
    
    return(
        <div>
            <h2>create post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="title"
                placeholder="Enter Post Title" 
                value={title}
                onChange={event => setTitle(event.target.value)}
                required/>

                <br /><br />
                <input type="date" 
                onChange={event => setDate(event.target.value)}
                value={date}
                required/>
                <br /> <br />
                <button>submit</button>
                
            </form>
            <p>{message}</p>
        </div>
    );

    }




export default CreateComponent;