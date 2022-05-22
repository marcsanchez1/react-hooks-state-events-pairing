import React from 'react'
import video from '../data/video'
import Video from './Video'

function VideoList(props) {
  console.log(props)
  return (
    <div className='container'>
      {props.video.map(videos => 
        <Video
          id={videos.id}
          title={videos.title}
          embedUrl={videos.embedUrl}
          views={videos.views}
          createdAt={videos.createdAt}
          upvotes={videos.upvotes}
          downvotes={videos.downvotes}
          comments={videos.comments}
          key={videos.id}
        />
      )}
    </div>
  )
}

export default VideoList