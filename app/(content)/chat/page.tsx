import Link from 'next/link'
import React from 'react'

const Chat = () => {
  return (
    <div className='pt-10 flex gap-x-2'>
       <Link href="/chat/supabase" className="border border-gray-500 p-2">
          Supabase
        </Link>
       <Link href="/chat/cfws" className="border border-gray-500 p-2">
          CF WebSocket
        </Link>
    </div>
  )
}

export default Chat
