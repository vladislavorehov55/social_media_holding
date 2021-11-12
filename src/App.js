import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Overview from "./components/Overview/Overview";
import Explanation from "./components/Explanation/Explanation";
import Product from "./components/Product/Product";
import {Route} from "react-router-dom";
import StepsContainer from "./components/Steps/StepsContainer";

const App = () => {
    return (
        <div>
            <Header/>
            <Route exact path='/' component={Product}/>
            <Route exact path='/' component={Overview}/>
            <Route path='/step/:stepNumber' render={(props) => <StepsContainer {...props}/>}/>
            <Explanation/>
            <Footer/>
        </div>
    )
}

export default App;
