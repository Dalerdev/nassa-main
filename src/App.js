import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Global from "./components/Global";
import { Navbar } from "./components/Homecomponents";
import { Footer } from "./components/Homecomponents/containers";
import RotateText from "./components/RotateText";
import SmmSupport from "./components/ServicesComponents/SmmSupport";
import BrandingSupport from "./components/ServicesComponents/BrendingSupport";
import Aboutpage from "./pages/Aboutpage";
import Blogspage from "./pages/Blogspage";
import Contactpage from "./pages/Contactspage";
import Homepage from "./pages/Homepage";
import Portfoliopage from "./pages/Portfoliopage";
import SinglePortfolioPage from "./pages/SinglePortfolioPage";
import portfolioMenu from "./utils/portfolio";
import AboutDesign from "./components/Aboutcomponents/AboutDesign";
import WebSupportPage from "./pages/WebSupportPage";
import TestPage2 from "./pages/TestPage2";
import DesingSupport from "./components/ServicesComponents/designSupport";
// import TestPage from "./components/TestPage";
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={Aboutpage} />
      <Route exact path="/portfolio" component={Portfoliopage} />
      <Route path="/blogs" component={Blogspage} />
      <Route path="/contacts" component={Contactpage} />
      <Route path="/portfolio/project/:id">
        <SinglePortfolioPage portfolioMenu={portfolioMenu} />
      </Route>
      <Route path="/services/smmSupport">
        <SmmSupport />
      </Route>
      <Route path="/services/web">
        <WebSupportPage />
      </Route>
      <Route path="/services/branding">
        < BrandingSupport />
        
      </Route>
      <Route path="/services/design">
        < DesingSupport/>
        
      </Route>

      <Route path="/test">{/* <TestPage /> */}</Route>
      <Route path="/test2">
        <TestPage2 />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
