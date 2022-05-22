import React from 'react'
import video from '../data/video'
import {useState} from 'react'

function Video(props) {
  const [likes, setLikes] = useState(0)

  function upVote() {
    setLikes(likes => likes + 1)
  }

  function handleClick() {
    upVote()
  }

  const comment = video.map(videos => videos.comments.map(comment => 
      <div>
        <li><strong>{comment.user}</strong></li>
        <li>{comment.comment}</li>
        
      </div>
    ))
  return (

    <>
      <iframe width="560" height="315" src={props.embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2>{props.title}</h2>
      {props.views} Views | Uploaded {props.createdAt}
      <div>
      <button onClick={handleClick} className='button'>{props.upvotes}	&#128077;</button>
      <button onClick={handleClick} className='button'>{props.downvotes}		&#128078;</button>
      </div>
      <div>
        <button className='button'>Hide Comments</button>
        <hr style={{width: "60%"}}></hr>
      </div>
      <div>
        <h3>{props.comments.length} Comments</h3>
          {comment}
      </div>
    </>
  )
}

export default Video