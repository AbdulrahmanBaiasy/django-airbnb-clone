import Image from 'next/image'

const MyReservationsPage = () => {
  return (


    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className='my-6 text-2xl'>
        My Reservations
      </h1>

      <div className='space-y-4' >

        <div className='p-5 grid grid-cols-1 md:grid-cols-4  shadow-md gap-4 border border-gray-300 rounded-xl   '>
          <div className="col-span-1  ">
            <div className='relative overflow-hidden aspect-square rounded-xl '>
              <Image
                fill
                src='/beach_1.jpg'
                className='hover:scale-110 object-cover transition h-full w-full '
                alt='beach house'
              />
            </div>
          </div>
          <div className='col-span-1 md:col-span-3 '>
            <h2 className='mb-4 text-xl'>
              Property Name
            </h2>
            <p className = 'mb-2'><strong>Check in date: 10-2-24</strong></p>
            <p className = 'mb-2'><strong>Check out date: 12-2-24</strong></p>
            <p className = 'mb-2'><strong>Number of nights: 2</strong></p>
            <p className = 'mb-2'><strong>Total Price: 200$</strong></p>

            <div className="mt-6 inline-block  cursor-pointer py-4 px-4 bg-airbnb text-white rounded-xl ">Check</div>

          </div>
        </div>


        <div className='p-5 grid grid-cols-1 md:grid-cols-4  shadow-md gap-4 border border-gray-300 rounded-xl   '>
          <div className="col-span-1  ">
            <div className='relative overflow-hidden aspect-square rounded-xl '>
              <Image
                fill
                src='/beach_1.jpg'
                className='hover:scale-110 object-cover transition h-full w-full '
                alt='beach house'
              />
            </div>
          </div>
          <div className='col-span-1 md:col-span-3 '>
            <h2 className='mb-4 text-xl'>
              Property Name
            </h2>
            <p className = 'mb-2'><strong>Check in date: 10-2-24</strong></p>
            <p className = 'mb-2'><strong>Check out date: 12-2-24</strong></p>
            <p className = 'mb-2'><strong>Number of nights: 2</strong></p>
            <p className = 'mb-2'><strong>Total Price: 200$</strong></p>

            <div className="mt-6 inline-block  cursor-pointer py-4 px-4 bg-airbnb text-white rounded-xl ">Check</div>

          </div>

        </div>



      </div>
    </main>
  )
}

export default MyReservationsPage;