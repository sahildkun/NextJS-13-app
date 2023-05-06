'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useState,useEffect } from 'react';
import {signIn,signOut,getProviders,useSession, LiteralUnion, ClientSafeProvider} from 'next-auth/react'
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { BuiltInProviderType } from 'next-auth/providers';
type Props = {

}

const Navigation = (props: Props) => {
   const isUserSignedIn = true;
   const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
   const [toggleDropdown, setToggleDropdown] = useState(false);
 
   useEffect(() => {
     (async () => {
       const res = await getProviders();
       setProviders(res);
     })();
   }, []);
 
  return (
    <div className='flex flex-row justify-between p-5 '>
     <Link href={'/'} className='flex space-x-2'>
     <Image src={''} alt='image' height={20} width={20}/>
     <p>Complimente</p>
     </Link>

     <div className='hidden sm:block'>
       {
        isUserSignedIn ? 
        <>
        <div className='flex space-x-3 items-center'>
        <Button variant="outline" className=''>Outline</Button>
        <Button variant="outline">Sign Out</Button>
       
         <Avatar>
         <AvatarImage src="https://github.com/sahildkun.png" alt="@shadcn" className='rounded-full' height={50} width={50}/>
      <AvatarFallback className='bg-gray-400'>CN</AvatarFallback>
    </Avatar>

        </div>
        </> 
        
        
        : 
        <></>
       }
     </div>
    
    </div>
  )
}

export default Navigation