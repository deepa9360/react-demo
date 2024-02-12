import React from "react";
import { useForm } from "react-hook-form";


 function Regform(){


      const{
        register,handlesubmit
        
      }=useForm

     const onsubmit=(menu)=>{
          console.log(menu);
     }

   return(

    <div>
 <h1>React hook form</h1>
 <form>
 <input type="text" placeholder="enter your name"{...register("name")}  />
 <br/>
 <input type="text" placeholder="enter your email"{...register("email")} />
 <br/>
 <input type="text" placeholder="enter your age" {...register("age")} />
 <br/>
 <input type="text" placeholder="enter your d.o.b"{...register("d.o.b")} />
 <br/>
 <button onClick={handlesubmit(onsubmit)}>osubmit</button>



 </form>


   </div>
   )
}

export default Regform;


