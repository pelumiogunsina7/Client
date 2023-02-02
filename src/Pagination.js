import React from 'react'

export const Pagination = ({totalPost, postPerPage, setCurrentPage}) => {
  let pages = []
  for (let index = 1; index <= Math.ceil(totalPost/postPerPage); index++) {
    pages.push(index)

    
  }
  return (
    <div className=' text-white flex flex-wrap sm:flex-row gap-4'>
        {
          pages.map((page, index) => {
            return <button className=' w-6 rounded-sm h-6 border-solid my-3 border-white bg-blue-900' onClick={() => setCurrentPage(page)} key={index}>{page}</button>
          })
        }
    </div>
  )
}
