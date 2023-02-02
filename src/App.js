import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight} from "@fortawesome/free-solid-svg-icons"



import headerPhoto from "./iPhone Images/responLap.jpg"
import iPhone7 from "./iPhone Images/iphone_11.png"
import iPhone6 from "./iPhone Images/iphone_6.png"
import iphone_6_plus from "./iPhone Images/iphone_6_plus.png"
import iphone_7_plus from "./iPhone Images/iphone_7_plus.png"
import iphone_8_plus from "./iPhone Images/iphone_8_plus.png"
import iphone_8 from "./iPhone Images/iphone_8.png"
import iphone_11 from "./iPhone Images/11-pro.png"
import iphone_11_pro_max from "./iPhone Images/iphone_11_pro_max.png"
import iphone_xr from "./iPhone Images/iphone_xr.png"
import iphone_xs_max from "./iPhone Images/iphone_xs_max.png"
import iphone_se from "./iPhone Images/iphone_se.png"
import iphone_xs from "./iPhone Images/iphone_xs.png"
import C5 from "./iPhone Images/5C.png"
import CS from "./iPhone Images/5S.png"
import S from "./iPhone Images/5.png"
import productService from './Services/productService.js';
import { useState, useEffect } from 'react';
import { Pagination } from './Pagination';



function App() {
  const [product, setProduct] = useState([])
  const [searchText, setSearchText] = useState("")
  const [postPerPage, setPostPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(6)
  const lastIndex = postPerPage * currentPage
  const firstIndex = lastIndex - postPerPage
  const currentPost = product.slice(firstIndex, lastIndex)

  




  const productPhoto = [
    {
      src:iPhone7
    },
    {
      src:iPhone6
    },
    {
      src:iphone_6_plus
    },
    {
      src:iphone_7_plus
    },
    {
      src:iphone_8_plus
    },
    {
      src:iphone_8 
    },
    {
      src: iphone_11
    },
    {
      src: iphone_11_pro_max
    },
    {
      src: iphone_xr
    },
    {
      src: iphone_xs_max
    },
    {
      src:iphone_se 
    },
    {
      src:iphone_xs
    },
    {
      src:C5
    },
    {
      src:CS
    },
    {
      src:S
    },
    
  ]

   useEffect(() =>{
    productService
          .getAllData()
          .then(Response => {
          setProduct(Response)
    })
  
   }, []) 
  

  return (
    <div className=" min-h-screen bg-black dark:bg-black dark:text-white">
      <div className='w-full bg-slate-900 h-auto text-white p-2 flex '>
        <div className='text-xl flex flex-col w-full bg-slate-900 h-auto text-white p-2'>
            <div className='w-25 '>
              <h1 className=' text-7xl'>SHOP OUR LATEST</h1>
              <span className=' text-7xl' >AVAILABLE STOCK HERE</span>
            </div>
            <div className='flex flex-col sm:flex-row gap-2 mt-5'>
              <input 
                type="text" 
                className=' w-full h-10 rounded-md sm:w-80 text-black' 
                placeholder = "search item e.g iPhoneX, 128GB,, A1"
               // value={searchText}
                //onChange ={(e) => handleChange(e.target.value)}
                />
              <button className='bg-blue-600 text-white p-1 rounded-md'><span className='p-1'>Search </span>
              <FontAwesomeIcon icon={faCircleArrowRight} />
              </button>
            </div>
        </div>
        <div className='hidden md:block'>
          <img src={headerPhoto} alt=''/>
        </div>
      </div>


      <div className='w-full h-auto p-2 flex flex-col self-center md:flex-row'>
        <div className='text-xl flex flex-col bg-slate-900 text-white h-auto p-2 md:w-56'>
          <div className=''>
            <span>Categories</span>
            <ul>
              <li className='m-4'>All</li>
              <li className='m-4'>iPhone</li>
              <li className='m-4'>Samsung</li>
              <li className='m-4'>iPad</li>
              <li className='m-4'>macBook</li>
              <li className='m-4'>Airpod</li>
            </ul>
          </div>
          <div className='hidden md:block gap-10 column-4 '>
            <span>Price Filter</span>
            <form className='flex flex-col'>
              <label for="vol">100</label>
              <input type="range" id="vol" name="vol" className='w-40 mb-4' min="0" max="50"/>
              <input type="text" className='w-40 h-8 rounded-sm mt-2 text-black' placeholder ="min"/>
              <input type="text" className='w-40 h-8 rounded-sm mt-2 text-black' placeholder ="max"/>
            </form>
          </div>
          <div className='hidden md:block'>
            <span>Storage</span>
            <div className='flex flex-row gap-10'>
              <input type="checkbox" className='ml-1' /><span>32GB</span>
            </div>
            <div className='flex gap-10'>
              <input type="checkbox" className='ml-1'  /><span>64GB</span>
            </div>
            <div className='flex gap-10'>
              <input type="checkbox" className='ml-1' /><span>128GB</span>
            </div>
            <div className='flex gap-10'>
              <input type="checkbox" className='ml-1' /><span>256GB</span>
            </div>
          </div> 
        </div>
        <div className=' mx-6'>
          <div className=' flex flex-col flex-wrap gap-2 ml-4 sm:flex-row'>
          <Pagination
              totalPost ={product.length}
              postPerPage={postPerPage}
              setCurrentPage = {setCurrentPage}
            />
              {
                currentPost.map((p,i) =>{
                  return (
                    <div id={p.id} key={i} className=' text-white flex flex-col w-full mt-1 md:w-56 border-solid border-white bg-slate-900 rounded-md items-center relative'>
                      <span className=' absolute top-0 right-0'>{p.Grade}</span>
                      <img className='w-16 h-24' src={iPhone7} alt=''/>
                      <h4>{p.name}</h4>
                      <span><small>unlocked | {p.storageSize}</small></span>
                      <span><small>unit Price</small></span>
                      <h2 className='text-4xl'>{p.Price}</h2>
                      <span className=''><small>1500 Available</small></span>
                      <button className='bg-blue-600 text-white self-center p-1 w-32 sm:w-20 rounded-md m-2'>Buy</button>    
                   </div>
                  )
                })
              }
               <Pagination
              totalPost ={product.length}
              postPerPage={postPerPage}
              setCurrentPage = {setCurrentPage}
            />
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
