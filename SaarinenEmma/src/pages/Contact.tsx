import { IonContent, IonHeader, IonButton, IonImg, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';
const Contact: React.FC = () => {
const [links,setLinks]=useState(["ABOUT","PROJECTS","CONTACT","FUN","ОПИСАНИЕ","CONTACT"])
/*function changeBackground(e) {
    e.target.style.fontWeight='bolder';
  }
  function fixBackground(e){e.target.style.fontWeight='lighter'}*/
  function updateLinks(Links:string[]){
  
    var templinks= [];
    for (var i = 0; i < Links.length-1; i++) {
      const currentLink=Links[i];
      if (currentLink==Links[Links.length-1]){templinks.push( <IonText class = "curlinks" onClick={() => { window.location.assign('/'+currentLink); }}>{Links[i] }</IonText>);}
      else{
    templinks.push( <IonText class = "links" onClick={() => { window.location.assign('/'+currentLink); }} /*onMouseEnter={changeBackground}onMouseLeave={fixBackground}*/>{Links[i] }</IonText>);}
    templinks.push(<IonText>{" | "}</IonText> );
    }
    templinks.pop();
  return templinks
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
          <IonTitle class="Title2">Emma Saarinen</IonTitle>
          <IonText>Researcher, Tutor, Developer</IonText>
          </IonCol>
          <IonCol  >{updateLinks(links)}</IonCol>
          </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonGrid>
              <IonRow>
        <IonText>Email: emma.saarinen695@gmail.com</IonText></IonRow>
             <IonRow> <IonText>Email: ecsaarin@ncsu.edu</IonText></IonRow>
        <IonRow><IonText >LinkedIn: https://www.linkedin.com/in/emma-saarinen-695843195/</IonText></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
      );
};

      export default Contact;
