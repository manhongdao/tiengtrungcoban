import Image from 'next/image';

import { ICommonRule, IExtraRule, ITransformRule, ITransformRuleSample } from "../../interfaces/writing";

interface QuyTacVietProps {
    common_rules: ICommonRule[];
    extra_rules: IExtraRule[];
    tranform_rules: ITransformRule[];
}

const note = `Quy tắc bút thuận (thứ tự nét viết) chỉ mang tính tương đối, song bút thuận có ảnh hưởng nhất định đến tốc độ viết, chất lượng chữ viết cũng như việc ghi nhớ chữ Hán đối với người mới học.
Quy tắc bút thuận của chữ Khải thường được chọn làm quy tắc chuẩn, phổ biến nhất.
`;

function QuyTacViet({ common_rules, extra_rules, tranform_rules }: QuyTacVietProps) {

    return (
        <>
            <pre className="bg-gray-100 rounded-md mb-4 whitespace-pre-wrap p-2">
                {note}
            </pre>
            <div className="font-medium bg-blue-500 text-white px-2 py-1.5 mb-2">I. Quy tắc chung</div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]">
                {
                    common_rules.map((el: ICommonRule, index: number) =>
                        <div className="px-2" key={index.toString()}>
                            <div className="font-medium mb-1">{index + 1}. {el.title}</div>
                            <Image
                                src={'/images/writing/' + el.titleImg}
                                alt={el.title}
                                height={100}
                                width={100}
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

            <div className="font-medium bg-blue-500 text-white px-2 py-1.5 mb-2">II. Quy tắc bổ sung</div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]">
                {
                    extra_rules.map((el: IExtraRule, index: number) =>
                        <div className="px-2" key={index.toString()}>
                            <div className="font-medium mb-1">{index + 1}. {el.title}</div>
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
                                                        alt={`Ảnh minh họa ${index + 1}`}
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

            <div className="font-medium bg-blue-500 text-white px-2 py-1.5 mb-2">III. Quy tắc nhượng nét</div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]">
                {
                    tranform_rules.map((el: ITransformRule, index: number) =>
                        <div className="px-2" key={index.toString()}>
                            <div className="font-medium mb-1">{index + 1}. {el.title}</div>
                            {
                                el.sample.map((sample: ITransformRuleSample, sampleIndex: number) =>
                                <div key={`tranform_rule_sample ${sampleIndex}`}>
                                    <div className="mb-1 mt-2">- {sample.description}</div>
                                    <div className="mb-4">
                                        <Image
                                            key={`img ${index}`}
                                            src={'/images/writing/' + sample.img}
                                            alt={`Ảnh minh họa ${index + 1}`}
                                            height={75}
                                            width={300}
                                        />
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default QuyTacViet;
