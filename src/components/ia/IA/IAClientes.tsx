import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import { Device } from '@capacitor/device'
import { useTheme } from 'next-themes'
import { Mic, Play, ArrowLeft } from 'components/icons'
import Link from 'next/link'
import { useScreen } from 'hooks/useScreen'
import { useUserAuth } from 'components/userAuth/context'
import { useChat } from 'ai/react';
import { theme } from '../../../../tailwind.config'
import { useRouter } from 'next/router'

interface Props { }

const IAClientes: FC<Props> = ({ }) => {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const { screenWidth } = useScreen()
  const { user } = useUserAuth()
  const { theme } = useTheme()

  const [device, setDevice] = useState({} as any)
  const [isPWA, setIsPWA] = useState(false)

  const router = useRouter()
  const { query } = router

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      const logDeviceInfo = async () => {
        const info = await Device.getInfo()
        setDevice(info)
        if (window.matchMedia('(display-mode: standalone)').matches) {
          setIsPWA(true)
        }
      }
      logDeviceInfo()
    }
    return () => {
      setDevice({} as any)
    }
  }, [])

  return (<div className='p-4 lg:p-8'>

    <div className="flex flex-col w-full stretch">
      {messages.length > 0
        ? messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap my-2">
            <div className={cn("chat", {
              'chat-end': m.role === 'user',
              'chat-start': m.role !== 'user',
            })}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  {m.role === 'user' && <img alt="" src={(user && user.avatar) ? `${process.env.MIDIA_CLOUDFRONT}${user.avatar}` : '/user/user.png'}
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

      <div
        className={cn(
          'z-50 block fixed inset-x-0 bottom-0 border-t-2 backdrop-blur-md rounded-t-box',
          {
            'pb-4': isPWA && device.model === 'iPhone',
            'bg-white/80 border-slate-200': theme === 'light',
            'bg-black/50 border-slate-500 text-accent-4': theme === 'dark',
          }
        )}
      >
        <div className='flex flex-start gap-4'>
          <Link
            href={`${query.t
              ? `${process.env.HOME}?t=` +
              encodeURIComponent(query.t.toString())
              : `${process.env.HOME}`
              }`}
          >
            <span className="m-2 w-full text-xs justify-center inline-block text-center py-2">
              <ArrowLeft />
            </span>
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              className='mt-2 border-accent-2'
              style={{ width: screenWidth - 100 }}
              value={input}
              placeholder="Como posso lhe ajudar?"
              onChange={handleInputChange}
            />
            <button className='ml-2' type="submit">
              <Play />
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>)
}

export default IAClientes
