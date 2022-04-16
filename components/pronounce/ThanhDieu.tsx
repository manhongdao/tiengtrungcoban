import Image from "next/image";
import React from "react";
// import THANHDIEU_DATA from "../../public/assets/data/pronounce/ThanhDieu";
import THANHDIEU_DATA from "../../public/data/pronounce/ThanhDieu";
// import "../../assets/images/pronounces/";

function ThanhDieu() {
    const data = THANHDIEU_DATA.thanhdieu;
    const rules = THANHDIEU_DATA.rules;

    return (
        <div className="container">
            {data.map((thanhdieu) => {
                return (
                    <div key={thanhdieu.chinese}>
                        <Image
                            src={`${thanhdieu.img}`}
                            alt={thanhdieu.title}
                            width={170}
                            height={190}
                        />
                        {/* <img src="/images/pronounces/thanh1.png" alt="" /> */}
                        {/* {thanhdieu.img} */}
                    </div>
                );
            })}
        </div>
    );
}

export default ThanhDieu;
