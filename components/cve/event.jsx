
export default function Event({title,first}) {
  return (
    <div className ={`w-full sm:w-5/12 mb-2 ml-0 lg:mb-12 mx-8 mt-4 max-h-72 ${first && 'ml-4' } 
    flex-col flex justify-start items-center pt-4 bg-CveEvent border border-1 border-main rounded-2xl`}>
     <h2 className='text-sm sm:text-base md:text-xl  lg:text-3xl spac font-sans'>{title}</h2>
    </div>
  )
}
