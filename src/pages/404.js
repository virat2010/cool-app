'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic'
let path = null;
const DynamicComponentWithNoSSR = dynamic(
    () => {
        if (typeof window !== "undefined") {
        path = window.location.href
        }
        return (<span>{path}</span>)},
    { ssr: false }
)

export default function Custom404() {
    const pathname = usePathname();
    return (
    <div>
        <div className="card bg-neutral-700 rounded-2xl text-white w-[50%] mx-auto mt-24">
            <div className="text-center align-middle 404-text p-8 leading-normal xl:text-8xl lg:text-6xl md:text-4xl sm:text-xl">404 <br/>Page Not Found</div>
            <p>Are you sure you are supposed at this url: <DynamicComponentWithNoSSR />?</p>
        </div>
    </div>)
}