import { HashRouter, Routes, Route} from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <HashRouter>
      <div id="page-container">
        <div id="content-wrap">
          <Navbar/>
          <Routes>
            { routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component/>
                }
              />
            )) }
          </Routes>
        </div>

      <Footer id="footer"/>
      </div>
    </HashRouter>
  )
}

export default App
