import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

function App() {
  return (
    <>
    <Header />

    <Grid container spacing ={3}>
      <Grid item xs={6} md={4}>
          <List />
      </Grid>
      <Grid item xs={6} md={8}> 
          <Map />
      </Grid>

    </Grid>
    </>
  );
}

export default App;
