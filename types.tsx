export type Car = {
    src: string;
    name: string;
    subtitle: string;
    redirect: string;
}

export type TeamMember = {
    src: string;
    position: string;
    favouriteCar: string;
    description: string;
    name: string;
}

export type imageChangerProps = {
    dir: string;
    maxCount: number;
}

export type carServiceDetails = {
    productionStart?: number;
    productionEnd?: number;
    id: string;
    generationName: string;
    nautralEngineStats?: engineStats;
    turboEngineStats?: engineStats;
    markGenerations?: carServiceDetails[]
}

export type engineStats = {
    lowLimitEngineCapacity: number;
    highLimitEngineCapacity: number;
    lowLimitHorsePower: number;
    highLimitHorsePower: number;
}




