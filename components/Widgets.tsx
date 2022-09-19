import { SearchCircleIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
    return (
        <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
            <div className='mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
                <SearchIcon className="h-5 w-5 text-gray-600" />
                <input className="flex-1 outline-none bg-transparent" type="text" placeholder="Search Twitter.." />
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Cats"
                options={{ height: 1000 }}
            />

        </div>
    )
}

export default Widgets