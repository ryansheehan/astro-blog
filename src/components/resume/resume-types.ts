export type Position = {
    title: string,
    summary: string,
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
    accomplishments: string[],
};

export type Company = {
    company: string,
    positions: Position[],
};