import React from 'react'

const TaskListNumber = ({data}) => {
    
  return (
    <div id='list' className='flex  mt-10  overflow-x-auto justify-between gap-5 screen  '>
        <div className=" rounded-xl w-[45%] px-10 py-6 bg-blue-600">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=" rounded-xl w-[45%] px-10 py-6 bg-green-400">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className=" rounded-xl w-[45%]  px-10 py-6 bg-yellow-300">
            <h2 className='text-3xl text-black font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl text-black font-medium'>Active Task</h3>
        </div>
        <div className=" rounded-xl w-[45%] px-10 py-6 bg-red-700">
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
