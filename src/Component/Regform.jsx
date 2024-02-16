import React from "react";
import { useForm } from "react-hook-form";
function Regform() {

  const {

    register, handleSubmit
  } = useForm()

  const onsubmit = (data) => {
    console.log(data);

  }

  return (

    <div>

      <form>
        <input type="text" placeholder="enter your name" {...register("first name")} />
        <br />
        <br />
        <input type="text" placeholder="enter your email" {...register("email")} />
        <br />
        <br />

        <input type="text" placeholder="enter your age" {...register("age")} />
        <br />
        <br />

        <input type="text" placeholder="enter your d.o.b"{...register("d.o.b")} />
        <br />
        <br />

        <button onClick={handleSubmit(onsubmit)}>submit</button>


      </form>

    </div>
  )
}

export default Regform;

