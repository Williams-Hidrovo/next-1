'use client';

import Link from 'next/link';
import React from 'react'
import style from './ActiveLink.module.css';

import {usePathname} from 'next/navigation';

interface Props{
    path:string;
    text:string;
}

export const ActiveLink = ({path,text}:Props) => {

  const pathName=usePathname();
  console.log(pathName);

  return (
    <Link className={path===pathName ? style['active-link'] : style.link} href={path}>{text}</Link>
  )
}

