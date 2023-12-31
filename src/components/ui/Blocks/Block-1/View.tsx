/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

interface Props {
  block: any
}

export default function View(props: Props) {
  const { block } = props
  const [content, setContent] = useState({} as any)
  const [config, setConfig] = useState({} as any)
  const [link1, setLink1] = useState('')
  const [link2, setLink2] = useState('')

  useEffect(() => {
    if (block && block.config) {
      const configParse = JSON.parse(block.config)
      setConfig(configParse)
    }
    if (block && block.content) {
      const contentParse = JSON.parse(block.content)
      setContent(contentParse)
      if (contentParse.buttonName1 && contentParse.buttonLink1) {
        setLink1(
          contentParse.buttonLink1.indexOf('http') !== -1
            ? contentParse.buttonLink1
            : `/page/${contentParse.buttonLink1}`
        )
      }
      if (contentParse.buttonName2 && contentParse.buttonLink2) {
        setLink2(
          contentParse.buttonLink2.indexOf('http') !== -1
            ? contentParse.buttonLink2
            : `/page/${contentParse.buttonLink2}`
        )
      }
    }
    return () => {
      setContent({} as any)
      setConfig({} as any)
      setLink1('')
      setLink2('')
    }
  }, [block])

  return (
    <section
      style={{
        backgroundColor:
          config.bgMode === 'custom' && config.bgColor ? config.bgColor : null,
      }}
      className={cn('mx-auto flex items-center justify-center flex-col', {
        ['hidden']: config.view === 'hide',
        ['md:hidden']: config.view === 'sm',
        ['hidden md:block']: config.view === 'lg',
        ['px-0']: config.padX && config.padX === 'none',
        ['px-4']: !config.padX || config.padX === 'small',
        ['px-8']: config.padX && config.padX === 'normal',
        ['px-12']: config.padX && config.padX === 'large',
        ['px-24']: config.padX && config.padX === 'extra',
        ['py-0']: config.padY && config.padY === 'none',
        ['py-4']: !config.padY || config.padY === 'small',
        ['py-8']: config.padY && config.padY === 'normal',
        ['py-12']: config.padY && config.padY === 'large',
        ['py-24']: config.padY && config.padY === 'extra',
        ['bg-accent-1']: config.bgMode === 'auto',
      })}
    >
      {content.imageUrl && (
        <div
          className={cn('lg:max-w-lg lg:w-3/6 md:w-4/6 w-5/6 mb-10', {
            [`shadow${content.viewShadow}`]:
              content.viewShadow && content.viewShadow !== '-none',
            [`p-${content.viewBorder}`]:
              content.viewBorder && content.viewBorder !== '0',
            [`bg-accent-${content.viewBgColor}`]:
              content.viewBgColor && content.viewBgColor !== 'none',
            [`rounded${content.viewRounded}`]:
              content.viewRounded && content.viewRounded !== '-none',
          })}
        >
          <Image
            alt=""
            className={cn('object-cover object-center', {
              [`rounded${content.viewRounded}`]:
                content.viewRounded && content.viewRounded !== '-none',
            })}
            src={content.imageUrl}
            width={
              content.aspectRatio ? content.aspectRatio.split(':')[0] : 100
            }
            height={
              content.aspectRatio ? content.aspectRatio.split(':')[1] : 100
            }
            layout="responsive"
          />
        </div>
      )}
      <div className="text-center lg:w-2/3 w-full">
        {content.title && (
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-accent-9">
            {content.title}
          </h1>
        )}
        {content.description && (
          <div dangerouslySetInnerHTML={{ __html: content.description }}></div>
        )}
        {(link1 || link2) && (
          <div className="pt-8 flex justify-center">
            {link1 && (
              <Link href={link1}>
                <span className="inline-flex text-white bg-tertiary-2 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                  {content.buttonName1}
                </span>
              </Link>
            )}
            {link2 && (
              <Link href={link2}>
                <span
                  className={`${link1 && 'ml-4'
                    } inline-flex text-accent-7 bg-accent-2 border-0 py-2 px-6 focus:outline-none hover:bg-accent-5 rounded text-lg`}
                >
                  {content.buttonName2}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
