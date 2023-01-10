import { BrowserRouter, Switch, Route } from "react-router-dom";
// Navbar
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Article from "./pages/Article";
import DetailArtikel from "./pages/ArticleDetail";
import Profile from "./pages/Profile";
import ProgramKerja from "./pages/ProgramKerja";
import DetailProker from "./pages/DetailProker";
import StrukturAnggota from "./pages/StrukturAnggota";
import LayananMahasiswa from "./pages/LayananMahasiswa";

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                {/* Page Profile */}
                <Route path="/profile" component={Profile} />

                {/* Struktur Anggota */}
                <Route path="/struktur-anggota" component={StrukturAnggota} />

                {/* Page Proker */}
                <Route path="/event" component={ProgramKerja} />
                <Route path="/event-detail/:id" component={DetailProker} />

                {/* Page Article */}
                <Route path="/article" component={Article} />
                <Route path="/article-detail/:id" component={DetailArtikel} />

                {/* Page Layanan Mahasiswa */}
                <Route path="/layanan-mahasiswa" component={LayananMahasiswa} />

                {/* 404 Handle Page */}
                <Route path="*" component={Page404} />
            </Switch>
            <Footer />

        </BrowserRouter>
    );
}
