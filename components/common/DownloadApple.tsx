import React from 'react';
import {IOS_APP} from "../../constants";
import Image from "next/image";
import PropTypes, {InferProps} from "prop-types";
import clsx from "clsx";

export default function DownloadApple({className}: InferProps<typeof DownloadApple.propTypes>) {

    return (
        <div className={clsx("flex", className)}>
            <a
                href={IOS_APP}
                target="_blank"
                rel="noreferrer"
                className="text-white min-w-full bg-slate-900 flex p-2 rounded-md cursor-pointer"
            >
                <div className="flex items-center">
                    <Image
                        width={32}
                        height={32}
                        src="/apple.png"
                        alt="App Store"
                    />
                </div>

                <div className="pl-2">
                    <div
                        style={{fontSize: "0.7rem"}}
                        className="text-gray-300"
                    >
                        Download on the
                    </div>
                    <div className="text-xl font-semibold">App Store</div>
                </div>
            </a>
        </div>
    )
}

DownloadApple.propTypes = {
    className: PropTypes.string
}
