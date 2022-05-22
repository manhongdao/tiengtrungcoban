import Image from 'next/image';

import { IBasicDrawing, IVariantDrawing } from "../../interfaces/writing";

interface NetChuProps {
    basic_drawing: IBasicDrawing[];
    variant_drawing: IVariantDrawing[];
}

const note = `Chữ Hán có nhiều thể chữ được sử dụng trong viết tay và in ấn. Trong các chữ Hán khác nhau hoặc các thể chữ khác nhau.
Các nét chữ có thể có nhiều dạng biến thể: như các dạng nét chấm.
Hoặc được đồng nhất: như ngang xiên móc (⺄) và ngang gập cong móc (㇈/乙), sổ gập gập (𠃑) và sổ gập phẩy (ㄣ), ngang gập gập (㇅) và ngang gâp cong (㇍), móc nằm (㇃) và xiên móc (㇂).
Song nhìn chung, thể chữ Khải thường được chọn làm mẫu chữ tiêu chuẩn để tập viết và luyện viết.
`;

function NetChu({ basic_drawing, variant_drawing }: NetChuProps) {

    return (
        <>
            <pre className="bg-gray-100 rounded-md mb-4 whitespace-pre-wrap p-2">
                {note}
            </pre>
            <div className="font-medium bg-blue-500 text-white px-2 py-1.5 mb-2">I. Các nét cơ bản</div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]">
                {
                    basic_drawing.map((el: IBasicDrawing, index: number) =>
                        <div className="px-2" key={index.toString()}>
                            <div className="font-medium mb-1">{index + 1}. {el.title}</div>
                            <Image
                                src={'/images/writing/' + el.titleImg}
                                alt={el.title}
                                height={125}
                                width={125}
                            />
                            <div className="mb-1 mt-2">{el.description}</div>
                            <div className="italic font-light mb-1 mt-2">Một số từ minh họa:</div>
                            <div className="mb-4">
                                {
                                    el.sampleImgs.map((img: string, sampleIndex: number) =>
                                        <span key={`img1 ${sampleIndex}`} className="pr-4">
                                            <Image
                                                src={'/images/writing/' + img}
                                                alt={`Ảnh minh họa ${sampleIndex + 1}`}
                                                height={125}
                                                width={125}
                                            />
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="font-medium bg-blue-500 text-white px-2 py-1.5 mb-2">II. Các nét biến thể</div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]">
                {
                    variant_drawing.map((el: IVariantDrawing, index: number) =>
                        <div className="px-2" key={index.toString()}>
                            <div className="font-medium mb-1">{index + 1}. {el.title}</div>
                            <Image
                                src={'/images/writing/' + el.titleImg}
                                alt={el.title}
                                height={100}
                                width={100}
                            />
                            {
                                el.sampleImgs && el.sampleImgs.length > 0 &&
                                <>
                                    <div className="italic font-light mb-1 mt-2">Một số từ minh họa:</div>
                                    <div className="mb-4">
                                        {
                                            el.sampleImgs.map((img: string, sampleIndex: number) =>
                                                <span key={`img2 ${sampleIndex}`} className="pr-4">
                                                    <Image
                                                        src={'/images/writing/' + img}
                                                        alt={`Ảnh minh họa ${sampleIndex + 1}`}
                                                        height={100}
                                                        width={100}
                                                    />
                                                </span>
                                            )
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default NetChu;
