import React from 'react'
import './basiccomp.css'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { PiAppleLogo } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";




export default function BasicComp() {

  return (



    <div>

      {/* top-block-page */}

      <div className='fluid'>
        <p className='shop'>Summer Sale for All Swim Suits And Free Express Delivery-OFF 50% <a href='#' className='aa'> ShopNow</a></p>
      </div>
      {/* header content */}

      <div className='container'>
        <div className='row pt-4'>
          <div className='col-3'> <h1>Exclusive</h1></div>
          <div className='col-5' >
            <a href='#' className='p-2 text-block'>Home</a>
            <a href='#' className='p-2 text-block'>Contact</a>
            <a href='#' className='p-2 text-block'>About</a>
            <a href='#' className='p-2 text-block'>Sign Up</a>
          </div>

          <div className='col-4'>
            <input type='text' placeholder='enter are you looking for' className='header input' />
            <CiHeart className="love" />
            <CiShoppingCart className='thinks' />
          </div>
          <hr />
        </div>

        {/* Headercontent END*/}

        {/*Left Slidebar*/}
        <div className='row'>
          <div className='col-3 LeftslI'>
            <p>Women's Fasstion</p>
            <p>Men's Fastion</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sport & Outdoor</p>
            <p>Groceries & pets</p>
            <p>Health & Beauty</p>
          </div>

          {/* iphone image */}
          <div className='col-9 text-block'>
            <div className='container iphone'>
              <div className='row'>
                {/* iphone content */}
                <div className='col-5 iphone-content'>
                  <div className='bg'>
                    <p className='phone'> <PiAppleLogo className='apple' /> iphone 14 series</p>
                    <h1>Up to 10%</h1>
                    <h1>Off Voucher</h1>
                    <h2 className='now'><a href='#'>Shop now <FaArrowRight /></a></h2>
                  </div>
                </div>

                {/* iphone image */}

                <div className='col-7'>
                  <img src='src/images/iphone.png' width={500} height={302} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left &iphone content END*/}

        {/* First card */}

        <div className='box'>
          <div className='today'>Today's</div>
        </div>
        <div className='line'>
          <div className='row' >
            <div className='col-3 img'>
              <h1>Flash sales</h1><div className='card'><div className='card-body text-center'>
                <img src="src/images/pic 1.png" width={100} height={150} />
                <div className='G92'>
                  <p>HAVIT HAV-G92 Gamepad</p>
                  <p className='color'>$120</p>
                  <p className='game'><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(88)</p></div></div>
              </div>
            </div>

            {/* first card END*/}

            {/*second card*/}


            <div className='col-3 img' >
              <h1 className='num'>03 : 23 : 19 : 56</h1><div className='card'><div className='card-body text-center'>
                <img src="src/images/pic 2.png" width={100} height={150} />
                <div className='G92'>
                  <h2 className='cart'>Add to cart</h2>
                  <p className='board'>AK-900 Wired keyboard</p>
                  <p className='color'>$960</p>
                  <p className='key'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(75)</p></div></div>
              </div>
            </div>

            {/*second card END*/}

            {/*third card*/}


            <div className='col-3 img'><div className='card'><div className='card-body text-center'>
              <img src="src/images/pic 3.png" width={160} height={240} />
              <div className='G92'>
                <p className='moniter'>IPS LCD Gaming Monitor</p>
                <p className='color'>$370</p>
                <p className='ips'><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(99)</p></div></div>
            </div>
            </div>

            {/*third card END*/}

            {/* fourth card*/}


            <div className='col-3 img'><div className='card'><div className='card-body text-center'>
              <img src="src/images/pic 4.png" width={180} height={200} />
              <div className='G92'>
                <p className='chair'>S-Series Comfort Chair</p>
                <p className='color'>$375</p>
                <p className='series'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(99)</p></div></div>
            </div>
            </div>


            {/*fourth card END*/}
            <hr />
          </div>
          <div className='but'>
            <button className='all'>View All Products</button>
          </div>
        </div>

        {/*ecommerce card*/}

        <div className='box'>
          <div className='cata'>Catagories</div>
        </div>
        <div><h3 className='brouse'>Brouse By Catagory</h3></div>

        {/*card 1*/}

        <div className='row'>
          <div className='col-2 '><div className="card"><div className="card-body text-center">
            <img src="src/images/pic 9.png" width={60} height={50} /><br /><br />
            <p>Cellphone</p></div></div>
          </div>

          {/*card 2*/}

          <div className='col-2 '><div className="card"><div className="card-body text-center">
            <img src="src/images/pic 10.png" width={60} height={50} /><br /><br />
            <p>Computer</p></div></div>
          </div>

          {/*card 3*/}

          <div className='col-2 '><div className="card"><div className="card-body text-center">
            <img src="src/images/pic 5.png" width={60} height={50} /><br /><br />
            <p>Smort watch</p></div></div>
          </div>

          {/*card 4*/}

          <div className='col-2'><div className="card bg-danger"><div className="card-body text-center ">
            <img src="src/images/pic 6.png" width={60} height={50} className='' /><br /><br />
            <p className='com'>Camera</p></div>
          </div>
          </div>

          {/*card 5*/}

          <div className='col-2 '>
            <div className='card'><div className="card-body text-center">
              <img src="src/images/pic 7.png" width={60} height={50} /><br /><br />
              <p className=''>HeadPhones</p></div></div>
          </div>

          {/*card 6*/}

          <div className='col-2 '>
            <div className='card'><div className="card-body text-center">
              <img src="src/images/pic 8.png" width={60} height={50} /><br /><br />
              <p className=''>Gaming</p></div></div>
          </div>
        </div>

        {/*card pages*/}

        <div className='box'>
          <div className='month'>This Month</div>
        </div>
        <h4 className='sell'>Best Selling Products</h4>
        <div className='row'>
          <div className='col-3 '><div className="card"><div className="card-body text-center">
            <img src="src/images/pic 11.png" width={190} height={150} /><br /><br />
            <p className='coat'>The north coat</p>
            <p className='color'>$260</p>
            <p className='north'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(65)</p></div></div>
          </div>

          {/*card page 1*/}

          <div className='col-3 '><div className="card"><div className="card-body text-center">
            <img src="src/images/pic 12.png" width={190} height={150} /><br /><br />
            <p className='gucci'>Gucci duffle bag</p>
            <p className='color'>$960</p>
            <p className='duffle'><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='gray' /> (65)</p></div></div>
          </div>

          {/*card page 2*/}
          <div className='col-3 '><div className="card"><div className="card-body text-center">
            <img src="src/images/pic 13.png" width={190} height={150} /><br /><br />
            <p className='cooler'>RGC Liquid CPU Cooler</p>
            <p className='color'>$160</p>
            <p className='rgc'><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='gray' />(65)</p></div></div>
          </div>

          {/*card page 3*/}

          <div className='col-3'><div className="card "><div className="card-body text-center ">
            <img src="src/images/pic 14.png" width={190} height={150} /><br /><br />
            <p className='small'>Small Bookself</p>
            <p className='color'>$360</p>
            <p className='self'><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /> (65)</p></div></div>
          </div>
        </div>

        {/*radio page*/}

        <div className='container con'>
          <div className='row bg-black con'>
            <div className='col-6 radio card-body text-center'>
              <div className='text-success mt-3 text'>Catagories</div>
              <h1 className='your'>Enhance Your</h1>
              <h1 className='music'>Music Experience</h1>
              <div className='bul'>
                <div className='whole'>
                  <button className='hdms'>23 Hours</button>
                  <button className='hdms'>05 Days </button>
                  <button className='hdms'>59 Minutes</button>
                  <button className='hdms'>35 Seconds</button>
                </div>
              </div>
              <button className='buy mt-2'>Buy Now!</button>
            </div>

            <div className='col-6 card bg-black card-body text-center'>
              <img src='src/images/radio.png' alt='...' width={500} height={260} className='bg-black pic' />
            </div>
          </div>
        </div>


        { /*product page */}

        <div className='box'>
          <div className='our'>Our Products</div>
        </div>
        <h1 className='explore'>Explore Our Products <FaArrowRight className='arr' /><FaArrowLeftLong className='ars' /> </h1>

        { /*product page 1*/}

        <div className='row'>
          <div className='col-3 '>
            <div className="card-body text-center">
              <img src="src/images/pic 15.png" alt='...' width={230} height={200} /><br /><br /></div>
            <p className='dog'>Breed Dry Dog Food</p>
            <p className='rs'>$100</p>
            <p className='cesar'><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='gray' /><FaStar className='gray' /> (35)</p>
          </div>


          { /*product page 2*/}

          <div className='col-3 '>

            <div className="card-body text-center">
              <img src="src/images/pic 16.png" alt='...' width={230} height={200} /><br /><br />  </div>
            <p className='cart'>Add to Cart</p>
            <p>CANON EOS DSLR Cemara</p>
            <p className='rs'>$360 </p>
            <p className='photo'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='gray' />(95)</p>
          </div>

          { /*product page 3*/}

          <div className='col-3 '>
            <div className="card-body text-center">
              <img src="src/images/pic 17.png" alt='...' width={230} height={200} /><br /><br /></div>
            <p className=''>ASUS FHD Gaming Laptop</p>
            <p className='rs'>$700 </p>
            <p className='fhdlap'><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(325)</p>
          </div>

          { /*product page 4*/}

          <div className='col-3 '>
            <div className="card-body text-center">
              <img src="src/images/Cart.png" alt='...' width={230} height={200} /><br /><br /></div>
            <p className=''>Curology Product Set </p>
            <p className='rs'>$500</p>
            <p className='two'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='gray' />(145)</p>
          </div>


          { /*product page 5*/}


          <div className='col-3'>
            <img src='src/images/pic 18.png' alt='...' width={150} height={170} />
            <p>Kids Electric Car</p>
            <p className='rs'>$960</p>
            <p className='kids'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(65)</p>

            </div>

          { /*product page 6*/}

          <div className='col-3'>
            <img src='src/images/pic 19.png' alt='...' width={200} height={170} />
            <p>Jr.Zoom Soccor Cleats</p>
            <p className='rs'>$1160</p>
            <p className='shoes'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' />(35)</p>
          </div>

          { /*product page 7*/}

          <div className='col-3'>
            <img src='src/images/pic 24.png' alt='...' width={180} height={170} />
            <p>GP11 Shooted Gamepad</p>
            <p className='rs'>$660</p>
            <p className='gamepad'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='gray' />(55)</p>
          </div>

          { /*product page 8*/}

          <div className='col-3'>
            <img src='src/images/pic 23.png' alt='...' width={180} height={170} />
            <p>Quilted Satin Jacket</p>
            <p className='rs'>$660</p>
            <p className='satin'> <FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='colour' /><FaStar className='gray' />(55)</p>
          </div>
        </div>

        <div className='but'>
            <button className='all'>View All Products</button>
          </div>

       
          { /*new arrival page*/}

          <div className='box'>
          <div className='our'>Featured</div>
          <h1 className='new'>New Arrival</h1>
        </div>
          <br/><br/>
        { /*featured page 1*/}
         <div className=''>
        <div className='col-6'><div className='card -img-top'>
          <img src="src/images/play station.png" alt='...' height={545} className='bg black'/> </div>
        </div>
        </div>

         <div className='row'>
          
         </div>
























































































































      </div>
    </div>

  )
};
