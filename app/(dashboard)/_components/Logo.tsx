import React from 'react';
import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image 
        height={65}
        width={65}
        alt="Logo"
        src="/logo.svg"
      />
    </div>
  )
}

