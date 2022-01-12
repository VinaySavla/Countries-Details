import React from "react";
import { Countries } from "./types";

export const ASIA_COUNTRIES_URL = "https://restcountries.com/v3.1/region/asia?fields=name,capital,flags,region,subregion,population,borders,languages";

export const useAsiaCountries = () => {
    const [countries, setCountries] = React.useState<Countries | undefined>(undefined);

    React.useEffect( () => {
        (async () => {
            const response = await fetch(ASIA_COUNTRIES_URL);
            const json = await response.json();
            setCountries(json as Countries);
        })()
    });

    return countries;
}