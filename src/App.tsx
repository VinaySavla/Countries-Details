import { AppBar, Toolbar, Typography } from "@mui/material";
import { CountriesGrid, Loading } from './compoonents';
import { useAsiaCountries } from './utils';

function App() {
  const countries = useAsiaCountries();

  if (countries === undefined) {
    return (
      <Loading />
    );
  } else {
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Countries
            </Typography>
          </Toolbar>
        </AppBar>
        <CountriesGrid countries={countries} />
      </div>
    );
  }
}

export default App;
