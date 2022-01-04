import { IonContent, IonHeader, IonButton, IonImg, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';
const Fun: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false)
  function expandInfo(isExpanded:Boolean){
    if (isExpanded){return <IonCol><IonRow><IonText class="body">What? you expected there to be fun things to do? On this very professional website? Well worry not; Fun things are under construction and coming soon!</IonText></IonRow><IonRow><IonText onClick={()=>setExpanded(false)} class="links">Less Info...</IonText></IonRow></IonCol>}
    else{return <IonRow><IonText onClick={()=>setExpanded(true)} class="links">More Info...</IonText></IonRow>}
  }
  const [links, setLinks] = useState(["ABOUT", "PROJECTS", "CONTACT", "FUN", "ОПИСАНИЕ", "FUN"])
  function changeBackground(e) {
    e.target.style.fontWeight = 'bolder';
  }
  function fixBackground(e) { e.target.style.fontWeight = 'lighter' }
  function updateLinks(Links: string[]) {

    var templinks = [];
    for (var i = 0; i < Links.length - 1; i++) {
      const currentLink = Links[i];
      if (currentLink == Links[Links.length - 1]) { templinks.push(<IonText class="curlinks" onClick={() => { window.location.assign('/' + currentLink); }}>{Links[i]}</IonText>); }
      else {
        templinks.push(<IonText class="links" onClick={() => { window.location.assign('/' + currentLink); }} onMouseEnter={changeBackground} onMouseLeave={fixBackground}>{Links[i]}</IonText>);
      }
      templinks.push(<IonText>{" | "}</IonText>);
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>

        </IonHeader>
        <IonRow>
          <IonCol>
            <IonRow class="Title"><IonText>Fun Things</IonText></IonRow>
            
            {expandInfo(isExpanded)}
          </IonCol>
          <IonImg class="picture" src="/assets/construction.jfif"></IonImg></IonRow>

        <IonRow><IonButton onClick={() => { window.location.assign('/PROJECTS'); }}>My Projects</IonButton></IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Fun;
