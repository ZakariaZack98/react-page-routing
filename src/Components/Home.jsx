import React from 'react'

const Home = () => {
  return (
    <div>
      <section class="w-full">
    <div class="w-full h-[520px] bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
    
        <div>
            <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl :text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">Discover Your New Home</h1>
        </div>
        <div class="w-full mx-auto">
            <form>
                <div class="xl:w-1/2 lg:w-[60%] sm:w-[70%] w-[90%] mx-auto flex gap-2 md:mt-6 mt-4 ">
                    <input type="text" class="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                            placeholder="" />
                    <button type="submit" class="px-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold">Search</button>
                </div>
            </form>
        </div>
    </div>
</section>
    </div>
  )
}

export default Home
