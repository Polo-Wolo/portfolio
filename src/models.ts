export interface Project {
    title: string;
    date: string;
    time_spent: string;
    content: Array<string>;
    pictures_url: Array<string>;
}

export interface Education {
    title: string;
    date: string;
    content: Array<string>;
    color: string;
}

export interface WorkExperience {
    linked_title: string;
    link: string;
    title_type: string;
    date: string;
    content: Array<string>;
}