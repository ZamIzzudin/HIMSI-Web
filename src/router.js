import { BrowserRouter, Switch, Route } from "react-router-dom";
// Navbar
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Page404 from "./pages/Page404";

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Tambah disini */}


                {/* 404 Handle Page */}
                <Route path="*" component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}