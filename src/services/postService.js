import axios from 'axios';



    class Post {
        create(form){
            const url = "http://localhost:16000/api/create-post";
            const config ={
                headers:{
                    'content-type': 'multipart/form-data',
                }
    
            };
            return axios.post(url, config);
    
        }
    }
    
  


export default new Post()
