"use client";


export default function MonsterCatArrow(props: { state: boolean }) {
    return (
        <div>
            {props.state ? <svg width="20" height="20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="50" x2="100" y2="150" strokeWidth={20} stroke="white"></line>
                <line x1="150" y1="50" x2="100" y2="150" strokeWidth={20} stroke="white"></line>
            </svg> :
                <svg width="20" height="20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50" y1="150" x2="100" y2="100" strokeWidth={20} stroke="white"></line>
                    <line x1="50" y1="50" x2="100" y2="100" strokeWidth={20} stroke="white"></line>
                </svg>
            }
        </div>
    )
}