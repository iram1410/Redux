import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Rest from './Rest'
 function Adminlogin(){
     let [data,updatedata]=useState({id:'',pwd:''})
     function getdata(event)
     {
         updatedata({...data,[event.target.name]:event.target.value});
     }
     function submits(event)
     {
         event.preventDefault();
         if(data.id==="admin" && data.pwd==="12345")
         {
            ReactDOM.render(
                <React.StrictMode >
                <BrowserRouter>
               <Rest/>
               </BrowserRouter>
            </React.StrictMode>,
                document.getElementById('root')
           );
           
                 
        }
        else
        {
            alert("invalid id and password");
        }
        
     }
     return(
         <>
         <div className="container">
         <form action="" onSubmit={submits}>
         <div className='form-group'>
         <label>ID</label>
         <input type="text" name="id" value={data.id} onChange={getdata} className="form-control"
         placeholder="enter id"></input>
         </div>
         <div className='form-group'>
          <label>PASSWORD</label>
           <input type="password" name="pwd" value={data.pwd} onChange={getdata} className="form-control"
         placeholder="enter password"></input>
         </div>
         <button className="btn btn-primary">Login</button>
         </form>
         </div>
         </>
     )
    }
    export default Adminlogin;