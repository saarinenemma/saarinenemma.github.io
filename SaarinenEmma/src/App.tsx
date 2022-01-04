import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Contact from './pages/Contact';
import Russian from './pages/Russian';
import Fun from './pages/Fun';
import Detail from './pages/Detail';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/SaarinenEmma/Projects">
            <ProjectsPage />
          </Route>
          <Route path="/Projects/details/:id" component={Detail} />
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Fun">
           <Fun/>
          </Route>
          <Route exact path="/ОПИСАНИЕ">
           <Russian/>
          </Route>
          <Route exact path="/Tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/About" />
          </Route>
          <Route>{/* Default catch-all route at end. */}
          <ProjectsPage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
);

export default App;
