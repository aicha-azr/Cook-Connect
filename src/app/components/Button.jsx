"use client"
import React, { Children } from 'react';
import { cn } from './Cn/cn';

const Button = ({ className, children, ...rest }) =>{
    return(        
        
        <button className={cn(className,'px-6 py-3 bg-jaune text-black-maron font-bold rounded-full hover:bg-bleu-ciel transition duration-200 font-BodyFont' )} {...rest}>{children}</button>
               
    )
}
export default Button;