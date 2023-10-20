import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import { Device } from '@capacitor/device'
import { useTheme } from 'next-themes'
import { Mic, Play, Thumbnail } from 'components/icons'
import Link from 'next/link'
import { useScreen } from 'hooks/useScreen'
import { useUserAuth } from 'components/userAuth/context'
import { useChat } from 'ai/react';

interface Props { }

const IAClientes: FC<Props> = ({ }) => {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const { screenWidth } = useScreen()
  const { user } = useUserAuth()

  return (<div className='p-4 lg:p-8'>

    <div className="flex flex-col w-full max-w-md mx-auto stretch">
      {messages.length > 0
        ? messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap my-2">
            <div className={cn("chat", {
              'chat-end': m.role === 'user',
              'chat-start': m.role !== 'user',
            })}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  {m.role === 'user' && <img alt="" src={`${process.env.MIDIA_CLOUDFRONT}${user.avatar}`}
                    onError={(e: any) => {
                      e.target.onerror = null
                      e.target.src = '/user/user.png'
                    }} />}
                  {m.role !== 'user' && <img alt="" src="/images/ia.jpg" />}
                </div>
              </div>
              <div className={cn("chat-bubble", {
                'bg-slate-200 text-slate-700': m.role === 'user'
              })}>{m.content}</div>
            </div>

          </div>
        ))
        : null}

      <div className='bg-primary fixed bottom-0 w-full'>
        <form onSubmit={handleSubmit} className='mb-8'>
          <Link
            href={`${process.env.HOME}`}
          >
            <span className="pr-3 text-xs justify-center inline-block text-center py-2">
              <Thumbnail />
            </span>
          </Link>
          <input
            style={{ width: screenWidth - 100 }}
            className="border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Como posso lhe ajudar?"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>



  </div>)
}

export default IAClientes
