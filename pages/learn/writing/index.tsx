import { Tab } from "@headlessui/react";
import React, { Suspense, useMemo } from "react";
import Skeleton from "react-loading-skeleton";

// Components
import CacBoThu from "../../../components/writing/CacBoThu";
import NetChu from "../../../components/writing/NetChu";
import QuyTacViet from "../../../components/writing/QuyTacViet";

// Interfaces
import { IBasicDrawing, IVariantDrawing } from "../../../interfaces/writing";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

interface WritingProps {
    basic_drawing: IBasicDrawing[];
    bushou: any[];
    common_rules: any[];
    extra_rules: any[];
    tranform_rules: any[];
    variant_drawing: IVariantDrawing[];
}

function Writing({
    basic_drawing,
    bushou,
    common_rules,
    extra_rules,
    tranform_rules,
    variant_drawing,
}: WritingProps) {
    const WritingTabs = useMemo(() => [
        {
            title: 'Các nét chữ',
            component: <NetChu basic_drawing={basic_drawing} variant_drawing={variant_drawing} />
        },
        {
            title: 'Quy tắc viết',
            component: <QuyTacViet common_rules={common_rules} extra_rules={extra_rules} tranform_rules={tranform_rules} />
        },
        {
            title: 'Các bộ thủ',
            component: <CacBoThu bushou={bushou} />
        }
    ], [basic_drawing, bushou, common_rules, extra_rules, tranform_rules, variant_drawing]);

    return (
        <div className="w-full px-2 sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List className="flex mx-auto p-1 space-x-1 bg-blue-100 max-w-xl rounded-xl shadow">
                    {WritingTabs.map((el) => {
                        return (
                            <Tab
                                key={el.title}
                                className={({ selected }) =>
                                    classNames(
                                        "w-full py-2.5 text-sm leading-5 font-medium rounded-lg focus:outline-none ring-opacity-60 hover:bg-sky-400 hover:text-white",
                                        selected
                                            ? "bg-sky-400 text-white shadow focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white"
                                            : "text-gray-700"
                                    )
                                }
                            >
                                {el.title}
                            </Tab>
                        );
                    })}
                </Tab.List>
                <Tab.Panels className="mt-4 max-w-[1200px] mx-auto">
                    {
                        WritingTabs.map((el, index: number) =>
                            <Tab.Panel
                                key={index}
                                className="bg-white rounded-xl p-3 focus:outline-none shadow-md"
                            >
                                <Suspense
                                    fallback={<Skeleton height={100} count={5} />}
                                >
                                    {el.component}
                                </Suspense>
                            </Tab.Panel>
                        )
                    }
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/writing');
    const data = await res.json();
    return {
        props: {...data}, // will be passed to the page component as props
    }
}

export default Writing;
