const ReservationSideBar = () => {
  return (
    <aside className='mt-4 p-6 col-span-2 rounded-xl border-gray-300 shadow-xl '>
      <h2 className='mb-5 text-2xl '>
        200$ per night
      </h2>
    <div className= 'mb-6 p-3 border border-gray-400 rounded-xl '>
      <label className= 'mb-2 block font-bold text-xs' >Guests</label>
      <select  className = 'w-full -ml-1 text-sm 'name="" id="">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
      </select>
    </div>

    <div className ='mb-4 flex justify-between align-center '>
      <p>200*3 nights </p> 
      <p>800</p>
    </div>
    <div className ='mb-4 flex justify-between align-center '>
      <p>fees:  </p> 
      <p>600</p>
    </div>
    <div className ='mb-4 flex justify-between align-center '>
      <p>tax :  </p> 
      <p>200</p>
    </div>
    <hr />
    <div className ='mb-4 flex justify-between align-center '>
      <p>total :  </p> 
      <p>1000</p>
    </div>

    <div className = 'w-full py-6 mb-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl '>
    Book
    </div>
    </aside>
  )

}


export default ReservationSideBar;