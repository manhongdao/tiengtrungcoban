export interface IBasicDrawing {
    title: string,
    titleImg: string,
    description: string,
    sampleImgs: string[],
}

export interface IVariantDrawing {
    title: string,
    titleImg: string,
    sampleImgs: string[],
}

export interface ICommonRule {
    title: string,
    titleImg: string,
    description: string,
    sampleImgs: string[],
}

export interface IExtraRule {
    title: string,
    description: string,
    sampleImgs: string[],
}

export interface ITransformRule {
    title: string,
    sample: ITransformRuleSample[],
}

export interface ITransformRuleSample {
    description: string,
    img: string,
}

export interface IBuShou {
    title: string,
    description: string,
    drawing: string[],
    examples: IBuShouExample[],
}

export interface IBuShouExample {
    word: 'string',
    meaning: 'string',
}