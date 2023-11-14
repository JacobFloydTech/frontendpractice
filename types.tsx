export type SupercarData = { 
    name: string;
    tag: string;
    vehicle?: string;
    vehicleUpgrades: string[];
    engineUpgrades: string[];
    transmissionUpgrades: string[];
    wheelUpgrades: string[];
    chassisUpgrades: string[];
    performanceTimes?: string[];
    description: string[];
    firstImage: string;
    secondImage: string;
    src: string;
    shortName: string;
}

export type Car = {
    src: string;
    name: string;
    subtitle: string;
    redirect: string;
}

export type Question = {
    question: string;
    answer: string;
}

export type Listing = {
    src: string;
    year: string;
    title: string;
    make: string[];
    description: string;
    asking: number
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




