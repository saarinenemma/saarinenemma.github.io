import { IonContent, IonHeader, IonButton, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
const Tab1: React.FC = () => {
const [links,setLinks]=useState(["ABOUT","RESEARCH","STATEMENT OF PURPOSE","FUN FACTS","ОПИСАНИЕ","ABOUT"])
function updateLinks(Links:string[]){

  var templinks= [];
  for (var i = 0; i < Links.length-2; i++) {
  templinks.push( <IonText onClick={() => { window.location.assign('/Tab2'); }}>{Links[i] }</IonText>);
  templinks.push(<IonText>{" | "}</IonText> );
  }
  templinks.push(<IonText>{Links[Links.length-2]}</IonText>);
return templinks
}


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
          <IonTitle>Emma Saarinen</IonTitle>
          <IonText>Researcher, Tutor, Developer</IonText>
          </IonCol>
          <IonCol >{updateLinks(links)}</IonCol>
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
       <IonButton  onClick={() => { window.location.assign('/Tab1'); }}>Back to site</IonButton>
       <IonButton  onClick={() => { window.location.assign('/Tab2'); }}>example page</IonButton>
          
      </IonContent>
    </IonPage>
      );
};

      export default Tab1;
