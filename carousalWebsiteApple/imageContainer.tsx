"use client";

export default function ImageContainer({ index, id, className }: { index: number, id: string, className: string }) {
    return (
        <div id={id} className={className} style={{ width: 200, height: 200, left: 20 }}>
            <img style={{ objectFit: 'contain' }} src={`/appleProducts/${index}.jpeg`}></img>
        </div>
    )
}