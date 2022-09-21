import GenreList from "./components/GenreList";

const thrillers = [
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    year: "1960",
  },
  {
    title: "Silence of the Lambs",
    director: "Jonathan Demme",
    year: "1991",
  },
  {
    title: "Eyes Wide Shut",
    director: "Stanley Kubrick",
    year: "1999",
  },
];

const scifi = [
  {
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    year: "1968",
  },
  {
    title: "Robocop",
    director: "Paul Verhoeven",
    year: "1987",
  },
];
const comedy = [
  {
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    year: "1968",
  },
  {
    title: "Robocop",
    director: "Paul Verhoeven",
    year: "1987",
  },
];

function App() {
  return (
    <div>
      <GenreList title="Thriller" movies={thrillers}/>
      <GenreList title="Scifi" movies={scifi}/>
      <GenreList title="Comedy" movies={comedy}>

      </GenreList>

      </div>
  );
}

//export the components in the end
export default App;
