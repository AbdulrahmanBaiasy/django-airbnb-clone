import Image from 'next/image';


const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">



      <div className='pb-4 flex flex-col items-center space-y-2 hover:border-gray-200 border-b-2 opacity-60 border-white hover:opacity-100 '>
        <Image
          src='/icn_category_beach.jpg'
          alt='category - beach'
          width={20}
          height={20}
        />
        <span className='text-xs'>Beach</span>
      </div>
      <div className='pb-4 flex flex-col items-center space-y-2 hover:border-gray-200 border-b-2 opacity-60 border-white hover:opacity-100 '>
        <Image
          src='/icn_category_beach.jpg'
          alt='category - beach'
          width={20}
          height={20}
        />
        <span className='text-xs'>Villas</span>
      </div>
      <div className='pb-4 flex flex-col items-center space-y-2 hover:border-gray-200 border-b-2 opacity-60 border-white hover:opacity-100 '>
        <Image
          src='/icn_category_villas.jpg'
          alt='category - beach'
          width={20}
          height={20}
        />
        <span className='text-xs'>Cabins</span>
      </div>
      <div className='pb-4 flex flex-col items-center space-y-2 hover:border-gray-200 border-b-2 opacity-60 border-white hover:opacity-100 '>
        <Image
          src='/icn_category_beach.jpg'
          alt='category - beach'
          width={20}
          height={20}
        />
        <span className='text-xs'>Tiny Homes</span>
      </div>





    </div>

  )
}

export default Categories; 