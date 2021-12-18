import { IonContent, IonHeader, IonButton, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
          <IonTitle>Emma Saarinen</IonTitle>
          </IonCol>
          <IonCol ><IonRow><IonText >ABOUT</IonText><IonText>   |   </IonText><IonText>RESEARCH</IonText></IonRow></IonCol>
          </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>

        </IonHeader>
       <IonButton  onClick={() => { window.location.assign('https://saarinenemma.github.io'); }}>Back to site</IonButton>
       <IonButton  onClick={() => { window.location.assign('/Tab2'); }}>example page</IonButton>
          
      </IonContent>
    </IonPage>
      );
};

      export default Tab1;
