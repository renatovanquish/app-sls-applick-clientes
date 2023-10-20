import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useMidia } from 'hooks/useMidia'
import cn from 'classnames'

interface Props {
  photo: string
  objectFit?: string
  viewFormat?: string
}

export default function Card5(props: Props): JSX.Element {
  const { photo, objectFit, viewFormat } = props
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { listMidiaByKey } = useMidia()

  useEffect(() => {
    let isMounted = true
    const fetchMidia = async () => {
      if (isMounted) {
        const midia = await listMidiaByKey({ key: photo, limit: 1 })
        setTitle(midia && midia.title ? midia.title : '')
        setDescription(midia && midia.description ? midia.description : '')
      }
    }
    fetchMidia()
    return () => {
      isMounted = false
      setTitle('')
      setDescription('')
    }
  }, [photo])

  return (
    <div className="relative h-full w-full z-10">
      <Image
        alt=""
        className={`absolute object-${objectFit ? objectFit : 'cover'} object-center`}
        src={`${process.env.MIDIA_CLOUDFRONT}${photo}`}
        layout="fill"
        priority
      />
      <div className={cn("absolute z-20 w-full font-sans text-accent-0 whitespace-normal",{
        ['text-center text-xs font-bold bottom-4 grid justify-items-stretch p-0']: viewFormat && viewFormat === 'circle-sm',
        ['text-center text-base font-semibold bottom-6 grid justify-items-stretch p-0']: viewFormat && viewFormat === 'circle-md',
        ['text-center text-xl font-semibold bottom-8 grid justify-items-stretch p-0']: viewFormat && viewFormat === 'circle-lg',
        ['bottom-0 text-xs font-bold p-1']: viewFormat && viewFormat === 'square-sm',
        ['bottom-0 text-base font-semibold p-1']: viewFormat && viewFormat === 'square-md',
        ['bottom-0 text-xl font-semibold p-2']: viewFormat && viewFormat === 'square-lg',
        ['bottom-0 p-3 text-2xl font-semibold']: !viewFormat || (
          viewFormat !== 'square-lg' && 
          viewFormat !== 'square-md' && 
          viewFormat !== 'square-sm' && 
          viewFormat !== 'circle-lg' && 
          viewFormat !== 'circle-md' && 
          viewFormat !== 'circle-sm')
      })}>
        <div className='line-clamp-2' style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.6)' }}>{title}</div>
        <p
          style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.6)' }}
          className={cn({
            ['text-xs line-clamp-1']: viewFormat && (viewFormat === 'circle-sm' || viewFormat === 'square-sm'),
            ['text-xs line-clamp-2']: viewFormat && (viewFormat === 'circle-md' || viewFormat === 'square-md'),
            ['text-sm line-clamp-3']: !viewFormat || (viewFormat !== 'circle-sm' && viewFormat !== 'circle-md' && viewFormat !== 'square-sm' && viewFormat !== 'square-md')
          })}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
