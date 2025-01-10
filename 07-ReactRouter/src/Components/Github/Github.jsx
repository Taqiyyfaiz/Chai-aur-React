import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
// "This line imports the React library and two hooks, useState and useEffect, from the react package. useState is used to manage state in a functional component, and useEffect is used to perform side effects in the component.
function Github() { // This line defines a functional component named Github.
  // This line declares a state variable data and a function setData to update it. The initial state is set to null.
  const data = useLoaderData() // This line declares a state variable data and a function setData to update it. The initial state is set to null.


  // const [data, setData] = useState(null) 

  
  // useEffect(() => {
    
  //   fetch('https://api.github.com/users/Taqiyyfaiz')
  //     .then(response => response.json()) 
  //     .then(data => setData(data)) 
  //     .catch(error => console.error('Error fetching data:', error))
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl p-4'>
      {data ? (
        <>
          <img src={data.avatar_url} alt="Git Avatar" width={300} />
          <p>Github Followers: {data.followers}</p>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => { // This line defines an asynchronous function named githubInfoLoader.
    const response = await fetch('https://api.github.com/users/Taqiyyfaiz') // This line fetches data from the GitHub API.
    return response.json() // This line returns the response as JSON.
}