import Image from "next/image";
import React from "react";
import THANHDIEU_DATA from "../../public/data/pronounce/ThanhDieu";

function ThanhDieu() {
    const data = THANHDIEU_DATA.thanhdieu;
    const rules = THANHDIEU_DATA.rules;

    return (
        <div className="container">
            <div className="general-container grid grid-cols-1 md:grid-cols-2">
                {data.map((thanhdieu) => {
                    return (
                        <div
                            key={thanhdieu.chinese}
                            className="grid grid-cols-12"
                        >
                            <div className="col-span-3">
                                <p className="font-semibold pl-4">
                                    {thanhdieu.title}
                                </p>
                                <Image
                                    src={`${thanhdieu.img}`}
                                    alt={thanhdieu.title}
                                    width={170}
                                    height={190}
                                />
                            </div>
                            <div className="col-span-9 pt-6 md:pt-8">
                                {thanhdieu.guide}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="rules mt-6">
                <h2 className="font-semibold text-xl text-sky-500">
                    Các quy tắc biến điệu
                </h2>
                <div className="rule-list">
                    {rules.map((rule, idx) => (
                        <div className="rule" key={idx}>
                            <div className="rule-title font-semibold">
                                {idx + 1}. {rule.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThanhDieu;
