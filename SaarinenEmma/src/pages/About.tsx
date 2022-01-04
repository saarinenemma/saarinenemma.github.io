import { IonContent, IonHeader, IonButton, IonImg, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';
const About: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false)
  function expandInfo(isExpanded:Boolean){
    if (isExpanded){return <IonCol><IonRow><IonText class="body">I am a student, researcher, and webdeveloper with a history in discrete math, computer algorithms, Tutoring, and over-engineering. I recieved a BS in Mathematics from Arizona State University and previously studied at Western Kentucky University through the Gatton Academy. I will add more info eventually, but unfortunately this website is mid-development. See my resume or personal statement for more details.</IonText></IonRow><IonRow><IonText onClick={()=>setExpanded(false)} class="links">Less Info...</IonText></IonRow></IonCol>}
    else{return <IonRow><IonText onClick={()=>setExpanded(true)} class="links">More Info...</IonText></IonRow>}
  }
  const [links, setLinks] = useState(["ABOUT", "PROJECTS", "CONTACT", "FUN", "ОПИСАНИЕ", "ABOUT"])
  /*function changeBackground(e) {
    e.target.style.fontWeight = 'bolder';
  }
  function fixBackground(e) { e.target.style.fontWeight = 'lighter' }*/
  function updateLinks(Links: string[]) {

    var templinks = [];
    for (var i = 0; i < Links.length - 1; i++) {
      const currentLink = Links[i];
      if (currentLink == Links[Links.length - 1]) { templinks.push(<IonText class="curlinks" onClick={() => { window.location.assign('/' + currentLink); }}>{Links[i]}</IonText>); }
      else {
        templinks.push(<IonText class="links" onClick={() => { window.location.assign('/' + currentLink); }} /*onMouseEnter={changeBackground} onMouseLeave={fixBackground}*/>{Links[i]}</IonText>);
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
            <IonRow class="Title"><IonText>About Emma</IonText></IonRow>
            <IonRow><IonText class="body">This is a bio about me. I definitely will fill out this bio and give in depth info about my history, goals and personality. I definitely won't put off writing a auto-biography and leave a generic paragraph. That doesn't sound like me at all. I definitely havent already left this page as Lorem Ipsum for several months before.</IonText></IonRow>
            {expandInfo(isExpanded)}
          </IonCol>
          <IonImg class="picture" src="/assets/id pic.jpg"></IonImg></IonRow>

        <IonRow><IonButton onClick={() => { window.location.assign('/PROJECTS'); }}>My Projects</IonButton></IonRow>
      </IonContent>
    </IonPage>
  );
};

export default About;
