import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLike } from "react-icons/bi"

const Card = ({ result }) => {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-90 transition-opacity duration-200 '
                    alt='image is nor available'
                    style={
                        {
                            maxWidth: "100%",
                            height: "auto",
                        }
                    }
                ></Image>

                <div className='p-2'>
                    <p className="line-clamp-2 text-md opacity-70">{result.overview}</p>
                    <h2 className="line-clamp-1 text-lg font-bold py-2">{result.title || result.name}</h2>
                    <p className="flex justify-between">
                        {result.release_date || result.first_air_date}
                        <div className="flex items-center">
                            <BiLike className='h-5 mr-1 ml-3' /> {result.vote_count}
                        </div>
                    </p>
                </div>
            </Link>

        </div>
    )
}

export default Card