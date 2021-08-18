import React, { useState, useEffect } from "react"
import axios from "axios"

const Posts = function(){
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const showData = function(arr){
    return arr.map((info, idx) => {
      return <div key={idx}>{info.title}</div>
    })
  }

  return (
    <div>
      <h3>Posts</h3>
      { showData(data) }
    </div>
  )
}

export default Posts