export type URL = string;

export type Country = {
    flags: {
        png: URL,
        svg: URL,
    },
    name: {
        common: string,
        official: string,
        nativeName: {
            [key: string]: {
                official: string;
                common: string
            };
        };
    };
    capital: string[],
    region: string
    subregion: string,
    languages: {
        [key: string]: string;
    };
    borders: string[];
    population: number;
};

export type Countries = Country[];