import React from 'react';
import Image from 'next/image';

export default function ProjectItem({ title, img, url }) {
  return (
    <div className="w-full relative shadow rounded-3xl">
      <div className=" h-8 w-full bg-orange-50 flex items-center px-4 rounded-t-3xl">
        <div className=" w-3 h-3 rounded-full bg-tag-red mr-1"></div>
        <div className=" w-3 h-3 rounded-full bg-tag-yellow  mr-1"></div>
        <div className=" w-3 h-3 rounded-full bg-tag-blue"></div>
      </div>
      <div className="aspect-video w-full">
        <Image
          src={img}
          className="rounded-b-3xl object-cover"
          width={500}
          height={300}
          layout="responsive"
          alt={'web'}
          priority
        />
      </div>
      <div
        className="absolute w-full h-full bg-gradient-to-t from-zinc-900 
        rounded-3xl top-0 opacity-0 hover:opacity-100 transition-all ease-in-out duration-500"
      >
        <div className="px-3 w-full h-full grid place-content-center text-center">
          <h3 className=" font-inter text-lg font-bold text-white">{title}</h3>
          {url}
        </div>
      </div>
    </div>
  );
}
