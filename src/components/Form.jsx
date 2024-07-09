
import memeData from '../MemeList'

const Form = () => {
    const Print = () => {
        event.preventDefault() ; 
        console.log(memeData) ; 
    }
  return (
    <>
      <form onSubmit={Print}>
            <div className='flex justify-between ml-48 mr-48 mt-20'>
                    <div className='flex flex-col'>
                        <label htmlFor="input1">Top Text</label> 
                        <input type="text" id = "input1" className='border-2 rounded-md border-gray-500 w-72 h-9 mt-2'/>
                    </div>
                    <div className='flex flex-col'>                     
                        <label htmlFor="input2">Bottom Text</label>
                        <input type="text" id = "input2" className='border-2 rounded-md border-gray-500 w-72 h-9 mt-2'/>
                    </div>
            </div>
            <div className='justify-center flex'>
                <div className='mt-8 bg-purple-600 w-96 h-10 rounded-md text-white font-bold flex justify-center'>
                    <button type="submit" className=''>Generate Meme!</button>  
                </div>  
            </div>
      </form>
    </>
  )
}

export default Form