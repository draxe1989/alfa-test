import FilterButtonContainer from "./components/FilterButton/FilterButtonContainer";
import CardPageContainer from "./components/CardPage/CardPageContainer";
import Preloader from "./components/Preloader/Preloader";
import background from '../src/assets/background.png'

function App() {
    return (
        <div className={'bg-fixed min-h-screen'} style={{backgroundImage: "url("+background +")"}}>
            <Preloader/>
            <FilterButtonContainer/>
            <CardPageContainer/>
        </div>

    );
}

export default App;
