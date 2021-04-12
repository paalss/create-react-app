import logo from "./logo.svg";
import "./App.css";
import ComponentsShowcase from "./componentsShowcase";
// app bar
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6" className={classes.title}>
              React Material UI components
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <main>
        <ComponentsShowcase></ComponentsShowcase>
      </main>
    </div>
  );
}

export default App;
