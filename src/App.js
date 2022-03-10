import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client";

const App = () => {
  const GET_COUNTRIES = gql`
    query GetCountries {
      countries {
        name,
        code,
        continent{name},
      } 
    }`;

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error...</p>
    else {
      return (
        <div className="App">
          <table>
            <tbody>
              <tr>
              <td><h3>Code</h3></td>
              <td><h3>Country</h3></td>
              <td><h3>Continent</h3></td>
              </tr>

              { data.countries.map((country, index) => 
              <tr key={index}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td>{country.continent.name}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
}

export default App;
