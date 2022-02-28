import "./App.css";
import Application from "./components/Common/common.styles";

// COMPONENTS
import Header from "./components/Header/header.component";
import SearchResults from "./components/Search-Results/results.component";
import Recipe from "./components/Recipe/recipe.component";

function App() {
	return (
		<Application.Container>
			<Header />
			<SearchResults />
			<Recipe />
		</Application.Container>
	);
}

export default App;
