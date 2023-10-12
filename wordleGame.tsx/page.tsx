"use client";
import '../public/globals.css';


export default function WordleGame() {
    let words = ['world', 'gamer']
    return (
        <div className="w-1/2 grid grid-cols-5">
            {words[0].split("").map((s) => {
                return (
                    <p style={{
                        width: '20px'
                    }}>{s}</p>
                )
            })}
        </div>
    )
}
