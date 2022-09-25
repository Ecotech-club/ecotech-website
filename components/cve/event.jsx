
export default function Event({title}) {
  return (
    <div className ={`max-w-40 flex-1   mb-2 ml-0 lg:mb-12 mx-8  max-h-40 md:max-h-72 min-h-32 
    flex-col flex justify-start items-center pt-4 bg-CveEvent border border-1 border-main rounded-2xl`}>
     <h2 className='text-sm sm:text-base md:text-xl  lg:text-3xl spac font-sans'>{title}</h2>
    </div>
  )
}
