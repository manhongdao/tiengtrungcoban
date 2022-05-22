import type { NextApiRequest, NextApiResponse } from 'next';

// Data JSON
import bushou from './json/writing/bushou.json';
import basic_drawing from './json/writing/basic-drawing.json';
import common_rules from './json/writing/common-rules.json';
import extra_rules from './json/writing/extra-rules.json';
import tranform_rules from './json/writing/tranform-rules.json';
import variant_drawing from './json/writing/variant-drawing.json';

// API interfaces
import { IBasicDrawing, IVariantDrawing } from '../../interfaces/writing';

type Data = {
    basic_drawing: IBasicDrawing[],
    bushou: any[],
    common_rules: any[],
    extra_rules: any[],
    tranform_rules: any[],
    variant_drawing: IVariantDrawing[],
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        basic_drawing,
        bushou,
        common_rules,
        extra_rules,
        tranform_rules,
        variant_drawing,
    });
}
