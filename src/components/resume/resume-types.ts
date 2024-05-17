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

export type Degree = {
    school: string,
    degree: string,
    year: number,
};

export type SkillList = string[];

export type Skills = {
    [category: string]: SkillList,
};

export type ResumeLink = {
    name: string,
    display: string,
    url: string,
};

export type ContactInfo = {
    name: string,
    phone: string,
    email: string,
    location: string,
    links: ResumeLink[],   
};
