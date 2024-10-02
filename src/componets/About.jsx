import React from 'react'

const About = () => {
  return (
    <div className='md:container md:w-1/2 md:mx-auto md:my-5 rounded-xl p-5 bg-white text-gray-500 min-h-[80vh] shadow-2xl dark:bg-gray-800 dark:text-white'>
      <h1 className='text-3xl font-extrabold mb-5 text-blue-800 dark:text-blue-400'>About This App</h1>
      <p>Welcome to the <b>Todo List App!</b></p>
      <br />
      <p>This simple yet powerful application is designed to help you stay organized and keep track of your daily tasks. With an intuitive interface, you can easily add, edit, and delete tasks as you manage your to-do list.</p>
      <br />
      <h2 className='text-xl font-bold'>Key Features:</h2>
      <br />
      <ul className='list-disc list-inside'>
        <li><b>Add Tasks:</b> Quickly jot down your tasks and organize your day.</li>
        <li><b>Edit Tasks:</b> Modify tasks on the fly to reflect any changes.</li>
        <li><b>Delete Tasks:</b> Remove completed or unnecessary tasks from your list.</li>
      </ul>
      <br />
      <p>This app is perfect for anyone looking to boost productivity and stay on top of their schedule.</p >
    </div>
  )
}

export default About
