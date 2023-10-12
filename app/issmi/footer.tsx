import { ButtonSVG } from "./whatWeDo"

export default function Footer() {
    return (
        <div className="w-full h-auto mt-24 bg-gray-800 text-white ">

            <div className="w-4/5 grid grid-cols-2 mx-auto  h-auto gap-x-48">
                <Logo />
                <p >ISSIMI is a full-service marketplace to buy and sell the most extraordinary motor vehicles in the world. Our team of automotive experts, with over 100 years of combined experience, deliver a transparent and delightful experience with every transaction. Whether you're looking to buy or sell a vintage classic or a modern supercar, ISSIMI was built with your collection in mind.</p>
                <div className="flex flex-col mx-auto w-full px-4">
                    <div className="flex flex-row justify-between w-full items-center">
                        <p>Follow Our Journey</p>
                        <div className="flex flex-row space-x-4 items-center">
                            <Facebook />
                            <Instagram />
                            <Youtube />
                            <TikTok />
                            <LinkedIn />
                        </div>
                    </div>
                    <div className="flex items-center flex-row py-2">
                        <p className="mr-4 font-semibold">Sign up for our newsletter</p>
                        <ButtonSVG white />
                    </div>
                    <p className="text-sm pt-2" >FAQs</p>
                    <p className="text-sm pt-2">Contact</p>
                </div>
            </div>
            <div className="bg-gray-400 w-4/5 mx-auto h-[1px] my-4"></div>
            <div className="flex flex-row w-4/5 mx-auto justify-between text-sm pb-12">
                <p>© 2023 ISSIMI Technologies, Inc. All rights reserved.</p>
                <div className="flex flex-row space-x-4">
                    <button>Terms of Service</button>
                    <button>Privacy Policy</button>
                    <button>Cookie Policy</button>
                </div>
            </div>
        </div>
    )
}

function Facebook() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M25.5 13C25.5 6.1 19.9 0.5 13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.05 4.8 24.0875 10.5 25.25V16.75H8V13H10.5V9.875C10.5 7.4625 12.4625 5.5 14.875 5.5H18V9.25H15.5C14.8125 9.25 14.25 9.8125 14.25 10.5V13H18V16.75H14.25V25.4375C20.5625 24.8125 25.5 19.4875 25.5 13Z" fill="currentColor"></path></svg>
    )
}

function Instagram() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M7.44444 0.5C3.61528 0.5 0.5 3.61528 0.5 7.44444V18.5556C0.5 22.3847 3.61528 25.5 7.44444 25.5H18.5556C22.3847 25.5 25.5 22.3847 25.5 18.5556V7.44444C25.5 3.61528 22.3847 0.5 18.5556 0.5H7.44444ZM7.44444 3.27778H18.5556C20.8528 3.27778 22.7222 5.14722 22.7222 7.44444V18.5556C22.7222 20.8528 20.8528 22.7222 18.5556 22.7222H7.44444C5.14722 22.7222 3.27778 20.8528 3.27778 18.5556V7.44444C3.27778 5.14722 5.14722 3.27778 7.44444 3.27778ZM19.9444 4.66667C19.5761 4.66667 19.2228 4.813 18.9624 5.07346C18.7019 5.33393 18.5556 5.6872 18.5556 6.05556C18.5556 6.42391 18.7019 6.77718 18.9624 7.03765C19.2228 7.29811 19.5761 7.44444 19.9444 7.44444C20.3128 7.44444 20.6661 7.29811 20.9265 7.03765C21.187 6.77718 21.3333 6.42391 21.3333 6.05556C21.3333 5.6872 21.187 5.33393 20.9265 5.07346C20.6661 4.813 20.3128 4.66667 19.9444 4.66667ZM13 6.05556C9.17083 6.05556 6.05556 9.17083 6.05556 13C6.05556 16.8292 9.17083 19.9444 13 19.9444C16.8292 19.9444 19.9444 16.8292 19.9444 13C19.9444 9.17083 16.8292 6.05556 13 6.05556ZM13 8.83333C15.2972 8.83333 17.1667 10.7028 17.1667 13C17.1667 15.2972 15.2972 17.1667 13 17.1667C10.7028 17.1667 8.83333 15.2972 8.83333 13C8.83333 10.7028 10.7028 8.83333 13 8.83333Z" fill="currentColor"></path></svg>
    )
}

function Youtube() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none"><path d="M26.5573 1.42769C27.8327 2.75154 28 4.85462 28 10C28 15.1454 27.8327 17.2485 26.5573 18.5723C25.2818 19.8954 23.9533 20 14 20C4.04674 20 2.71821 19.8954 1.44274 18.5723C0.167263 17.2492 0 15.1454 0 10C0 4.85462 0.167263 2.75154 1.44274 1.42769C2.71821 0.103846 4.04674 0 14 0C23.9533 0 25.2818 0.104615 26.5573 1.42769ZM11.6126 14.5638L18.7725 10.2331L11.6126 5.96923V14.5638Z" fill="currentColor"></path></svg>
    )
}

function TikTok() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48" fill="none"><path fill="currentColor" d="M34.145 0h-8.09v32.696c0 3.895-3.11 7.095-6.982 7.095-3.872 0-6.984-3.2-6.984-7.095 0-3.826 3.043-6.957 6.776-7.096v-8.209C10.637 17.531 4 24.278 4 32.696 4 41.183 10.776 48 19.142 48s15.141-6.887 15.141-15.304V15.93A18.732 18.732 0 0 0 45 19.548v-8.209C38.916 11.13 34.145 6.122 34.145 0Z"></path></svg>
    )
}

function LinkedIn() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none"><path d="M21.1429 0H2.85714C1.28 0 0 1.22667 0 2.7381V20.2619C0 21.7733 1.28 23 2.85714 23H21.1429C22.72 23 24 21.7733 24 20.2619V2.7381C24 1.22667 22.72 0 21.1429 0ZM7.42857 8.7619V19.1667H4V8.7619H7.42857ZM4 5.73357C4 4.96691 4.68571 4.38095 5.71429 4.38095C6.74286 4.38095 7.38857 4.96691 7.42857 5.73357C7.42857 6.50024 6.78857 7.11905 5.71429 7.11905C4.68571 7.11905 4 6.50024 4 5.73357ZM20 19.1667H16.5714C16.5714 19.1667 16.5714 14.0957 16.5714 13.6905C16.5714 12.5952 16 11.5 14.5714 11.4781H14.5257C13.1429 11.4781 12.5714 12.6062 12.5714 13.6905C12.5714 14.1888 12.5714 19.1667 12.5714 19.1667H9.14286V8.7619H12.5714V10.1638C12.5714 10.1638 13.6743 8.7619 15.8914 8.7619C18.16 8.7619 20 10.2569 20 13.2852V19.1667Z" fill="currentColor"></path></svg>
    )
}

function Logo() {
    return (
        <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width={150} height={150} viewBox="0 0 4223.93 885.89"><path fill="currentColor" d="M1317.2,170.74h-46.42V679.13h46.42Zm620.92,127.09h44.93c-3.48-77.2-70.25-134.29-164.83-134.29-93.84,0-166.08,56.35-166.08,138.27,0,65.28,46.18,106.24,125.86,129.82l60.82,17.88c63,18.37,106.25,41.95,106.25,93.83,0,61.07-55.36,102-131.32,102-68.51,0-122.14-33-127.1-93.34H1639c5.46,80.43,71,135.79,174.76,135.79C1924,687.82,1990,625.51,1990,544.09c0-84.41-73.48-118.16-138-136.29l-53.62-15.39c-49.4-13.9-101.28-39-101.28-92.59,0-54.61,48.9-94.58,119.89-94.58C1884.25,205.24,1932.41,241.24,1938.12,297.83Zm649.34,0h44.93c-3.48-77.2-70.25-134.29-164.83-134.29-93.84,0-166.07,56.35-166.07,138.27,0,65.28,46.17,106.24,125.86,129.82l60.81,17.88c63.06,18.37,106.25,41.95,106.25,93.83,0,61.07-55.36,102-131.32,102-68.51,0-122.13-33-127.1-93.34h-47.66c5.46,80.43,71,135.79,174.76,135.79,110.22,0,176.25-62.31,176.25-143.73,0-84.41-73.48-118.16-138-136.29l-53.62-15.39c-49.4-13.9-101.28-39-101.28-92.59,0-54.61,48.9-94.58,119.9-94.58C2533.59,205.24,2581.75,241.24,2587.46,297.83Zm419.73-127.09h-46.44V679.13h46.44Zm344.85,0V679.13h43.72V268.79h3.95l171.56,410.34h42.18L3785,268.79h4V679.13h43.68V170.74H3779L3594.59,613.59h-4.46L3405.68,170.74Zm871.89,0h-46.41V679.13h46.41Z"></path><circle cx="442.94" cy="442.94" r="442.94" fill="#006603"></circle><polygon points="301.7 685.37 368.7 685.37 573.21 168.6 506.21 168.6 301.7 685.37" fill="#fff"></polygon></svg>
    )
}