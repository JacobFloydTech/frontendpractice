'use client'

import Button from "./button"

export default function Grid()  { 
    return ( 
        <div className="w-full h-[80px] 2xl:h-[120px] fixed z-50 block">
            <div id='buttonGrid' className="grid md:grid-cols-[10fr_1fr_10fr]   3xl:grid-cols-[49%_2%_49%]  md:grid-rows-[30px_10px_30px] 2xl:mt-8 2xl:grid-rows-[40%_10%_40%] top-1/2 -translate-y-1/2 absolute  headerButton w-full">
                    <Button e={'Home'} />
                    <div />
                    <Button e={'Contact'} />
                    <div />
                    <div />
                    <div />
                    <Button e={'Product'} />
                    <div />
                    <Button e={'Internal'} />
                </div>
        </div>
    )
}

