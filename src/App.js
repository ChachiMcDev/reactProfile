

import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from './pages/DropDownPage';
import SideBar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from './pages/ModalPage'
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import ReducerCounterPage from "./pages/ReducerCounterPage"
import ImmerReduceCounterPage from "./pages/ImmerReduceCounterPage"
import Header from "./components/Header";
import ResumePage from "./pages/ResumePage"
import BioPage from "./pages/BioPage";
import SupportPage from "./pages/SupportPage";

function App() {


  return (
    <div>
      <Header />

      <div className="container  mr-auto ml-6 grid grid-cols-6 gap-4 mt-4">

        <SideBar />
        <div className="col-span-5">
          <Route path='/support'>
            <SupportPage />
          </Route>
          <Route path="/bio">
            <BioPage />
          </Route>
          <Route path='/resume'>
            <ResumePage />
          </Route>
          <Route path='/table'>
            <TablePage />
          </Route>
          <Route path='/modal'>
            <ModalPage />
          </Route>
          <Route path='/accordian'>
            <AccordionPage />
          </Route>
          <Route path='/buttons'>
            <ButtonPage />
          </Route>
          <Route path='/countit'>
            <CounterPage initialCount={22} />
          </Route>
          <Route path='/reducecountit'>
            <ReducerCounterPage initialCount={15} />
          </Route>
          <Route path='/immercountit'>
            <ImmerReduceCounterPage initialCount={3} />
          </Route>
          <Route path='/dropdown'>
            <DropDownPage />
          </Route>
        </div>


      </div>
    </div>

  );




}


export default App;
