export type Position = {
    title: string,
    location: string,
    dates: {
        start: {
            month: number,
            year: number,
        },
        end?: {
            month: number,
            year: number,
        },
    },
    responsibilities: string[],
};

export type Company = {
    company: string,
    positions: Position[],
};