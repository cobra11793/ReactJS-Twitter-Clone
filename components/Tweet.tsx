import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
        <div className='flex space-x-3'>
            <img src={tweet.profileImg} className="h-10 w-10 rounded-full object-cover" alt=""/>
            <div>
                <div className='flex items-center space-x-1'>
                    <p className='mr-1 font-bold'>{tweet.username}</p>
                    <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()} · </p>

                    <TimeAgo
                    className="text-gray-500 text-sm"
                    date={tweet._createdAt}
                    />
                </div>

                <p>{tweet.text}</p>
                {tweet.image && <img src= {tweet.image} alt="" className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'/>}
            </div>
        </div>

        <div>
            <div></div>

            <div></div>
            
            <div></div>
            
            <div></div>
        </div>

    </div>
  )
}

export default Tweet
