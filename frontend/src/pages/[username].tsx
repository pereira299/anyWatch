import Image from "next/image";
import React from "react";

export default function User(props) {
    return (
        <div className={`${props.className} h-fit`}>
            <div>
                <Image 
                    src={props.image}
                    width={500}
                    height={500}
                    alt="Logo"
                    className="rounded-full mb-3 mx-auto"
                />
                <div>
                    
                </div>
            </div>
        </div>
    )
}