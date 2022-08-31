import {HashRouter,Route,Routes} from 'react-router-dom'
import App from './App';
import RecipeDetail from './category'
import Contact from './contact';
import Random from './categories';
import Recipe from './recipe';
export default function Main(){

    return(
        <HashRouter>
        <Routes>
            <Route path="/" element={<App/>}>
            <Route path="recipeDetail" element={<RecipeDetail/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="recipeRandom" element={<Random/>}/>
            <Route path="recipe" element={<Recipe/>}/>
            </Route>
        </Routes>
        </HashRouter>
    );
}
