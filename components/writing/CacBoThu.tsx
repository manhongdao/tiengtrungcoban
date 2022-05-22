import Image from 'next/image';

import { IBuShou, IBuShouExample } from "../../interfaces/writing";

interface CacBoThuProps {
    bushou: IBuShou[];
}

const note = `Tiếng Hán có 214 bộ thủ, cấu tạo nên các chữ Hán, dưới đây là một số bộ thủ phổ biến:`;

function CacBoThu({ bushou }: CacBoThuProps) {
    console.log(bushou);
    return (
        <>
            <pre className="bg-gray-100 rounded-md mb-4 whitespace-pre-wrap p-2">
                {note}
            </pre>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]">
                {
                    bushou.map((el: IBuShou, index: number) =>
                        <div className="px-2" key={index.toString()}>
                            <div className="font-medium mb-1 text-lg">{index + 1}. {el.title}</div>
                            <div>Cách viết: {
                                el.drawing.map((text: string, drawIndex: number) =>
                                    <span key={`drawing ${drawIndex}`}>
                                        <span className="text-blue-500 text-3xl">{text}</span>
                                        {
                                            drawIndex < el.drawing.length - 1 &&
                                            <span> hoặc </span>
                                        }
                                    </span>
                                )
                            }
                            </div>
                            <div className="mb-1 mt-2">{el.description}</div>
                            <div className="italic font-light mb-1 mt-2">Ví dụ:</div>
                            <div className="mb-8">
                                {
                                    el.examples.map((example: IBuShouExample, index: number) =>
                                        <div className="mb-1" key={`bu_shou_example ${index}`}>
                                            <span className="text-blue-500 text-3xl">{example.word}</span> - {example.meaning}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    );
}

export default CacBoThu;
