import React from 'react';
import {ANDROID_APP} from "../../constants";
import Image from "next/image";
import PropTypes, {InferProps} from "prop-types";
import clsx from "clsx";

export default function DownloadGoogle({className}: InferProps<typeof DownloadGoogle.propTypes>) {

    return (
        <div className={clsx("flex", className)}>
            <a
                href={ANDROID_APP}
                target="_blank"
                rel="noreferrer"
                className="text-white min-w-full bg-slate-900 flex p-2 rounded-md cursor-pointer"
            >
                <div className="flex items-center">
                    <Image
                        width={32}
                        height={32}
                        src="/google-play.png"
                        alt="Google Play"
                    />
                </div>

                <div className="pl-2">
                    <div
                        style={{fontSize: "0.65rem"}}
                        className="text-gray-300"
                    >
                        GET IT ON
                    </div>
                    <div className="text-xl p-0 font-semibold">
                        Google Play
                    </div>
                </div>
            </a>
        </div>
    )
}

DownloadGoogle.propTypes = {
    className: PropTypes.string
}
