
export default function Event({title}) {
  return (
    <div className ={`py-[15%] px-[4%] max-w-40 flex-1 max-h-40 md:max-h-72 min-h-32 
    flex-col flex justify-start items-center pt-4 bg-secondary border border-1 border-main rounded-2xl`}>
     <h2 className='text-sm sm:text-base md:text-xl  lg:text-3xl spac font-sans'>{title}</h2>
    </div>
  )
}
