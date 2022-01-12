import React from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Countries, Country } from "./types";
import { blue } from "@mui/material/colors";
import { TranslateRounded, LocationCityRounded, BorderAllRounded, GroupsRounded } from "@mui/icons-material";

export const Loading: React.FC = () => {
    return (
        <div>
            <b>Loading...</b>
        </div>
    );
};

export const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="country">
                        {country.name.common.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={country.name.official}
                subheader={`${country.subregion}, ${country.region}`}
            />
            <CardMedia
                component="img"
                // height="40%"
                // width="100%"
                image={country.flags.png}
                alt={`${country.name.common} Flag`}
            />
            <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[300] }}>
                                <TranslateRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Languages"
                            secondary={Object.values(country.languages).map((lang => lang)).join(", ")}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[300] }}>
                                <LocationCityRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Capital"
                            secondary={country.capital.join(", ")}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[300] }}>
                                <BorderAllRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Borders"
                            secondary={country.borders.join(", ")}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[300] }}>
                                <GroupsRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Population"
                            secondary={country.population}
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}

export const CountriesGrid: React.FC<{ countries: Countries }> = ({ countries }) => {
    return (
        <Grid container spacing={4} style={{ margin: "2%", width: "96%", alignItems: "stretch" }}>
            {countries.map(country => (
                <Grid item sm={12} md={6} lg={4} xl={3}>
                    <CountryCard country={country} />
                </Grid>
            ))}
        </Grid>
    );
}