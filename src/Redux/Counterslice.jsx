import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({


  name:"counter",
  initialState:{
    rice:1
  },

reducers:{

  increment:(state)=>{
    state.rice  += 1
 },
 decrement:(state)=>{
    state.rice -= 1
 }

}

})

export default counterSlice.reducer;
export const counterAction = counterSlice.actions;






      {/*ecommerce card END*/}

      {/*best selling*/}

    //  <div className='col-3 pic'>
  //       <div className='pic'>
  //         <h4 className='hh'>Best Selling Products</h4>
  //         <img src="src/images/pic 11.png" width={250} height={200} />
  //         <p className='ca'>The North Coat</p>
  //       </div>

  //       <div className='col-3 pic'>
  //         <div className=' pic '>
  //           <img src="src/images/pic 12.png" width={250} height={200} />
  //           <p className='bag'>Gucci Duffle Bag</p>
  //         </div>
  //       </div>
  //     </div>

  //     <div className='col-3 pic'>
  //       <div className=' pic'>
  //         <img src="src/images/pic 13.png" width={250} height={200} />
  //         <p className='cpu'>RGB Liquid CPU Cooler</p>
  //       </div>
  //     </div>

  //     <div className='col-3 pic'>
  //       <div className='pic'>
  //         <img src="src/images/pic 14.png" width={250} height={200} />
  //         <p className='book'>Small Bookself</p>
  //       </div>
  //     </div>

  //     <div className='col-5'>
  //       <div className='col-5'>
  //         <p>Catagories</p>
  //         <h3>Enhance Your Music Experience</h3>
  //         <h4 className='hrs'>23</h4>
  //         <h4 className='hrs'>Hours</h4>
  //         <h4 className='hr'>05 </h4>
  //         <h4 className='hr'>Days</h4>
  //         <h4 className='ss'>59 </h4>
  //         <h4 className='ss'>Minutes</h4>
  //         <h4 className='ms'>35</h4>
  //         <h4 className='ms'>Seconds</h4>
  //         <h4 className='buy'>Buy Now!</h4>
  //       </div>
  //     </div>
  //     <div className='col-7 '>
  //       <div className='radio'>
  //         <img src='src/images/radio.png' width={300} height={150} />
  //       </div>
  // </div>


