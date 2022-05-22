import { useMemo } from "react";

// Components
import CacBoThu from "../../../components/writing/CacBoThu";
import NetChu from "../../../components/writing/NetChu";
import QuyTacViet from "../../../components/writing/QuyTacViet";
import Tabs from "../../../components/common/Tabs";

// Interfaces
import { IBasicDrawing, IVariantDrawing } from "../../../interfaces/writing";

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
}: WritingProps)
{
    const writingTabs = useMemo(() => [
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
            <Tabs labels={writingTabs.map(el => el.title)} components={writingTabs.map(el => el.component)} />
        </div>
    );
}

export async function getServerSideProps()
{
    const res = await fetch('http://localhost:3000/api/writing');
    const data = await res.json();
    return {
        props: {...data}, // will be passed to the page component as props
    }
}

export default Writing;
