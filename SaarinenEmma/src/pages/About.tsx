import { IonContent, IonHeader, IonButton, IonImg, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';
const About: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false)
  function expandInfo(isExpanded:Boolean){
    if (isExpanded){return <IonCol><IonRow><IonText class="body">Emma did her undergraduate work at Arizona State University, where she studied Mathematics and Russian. Her honors thesis on Expander Graph algorithms ignited an interest in graph theory. Following two years as a professional developer, Emma returned to academia to pursue a PhD in computer science.</IonText></IonRow><IonRow><IonText onClick={()=>setExpanded(false)} class="links">Less Info...</IonText></IonRow></IonCol>}
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
      <IonHeader color="red">
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle class="Title2">Emma Saarinen</IonTitle>
                <IonText>PhD Student, Developer</IonText>
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
            <IonRow><IonText class="body">Emma Saarinen is a curent PhD student in the theory lab in the Computer Science department at North Carolina State University. Emma works with her advisor Dr. Sharath Raghvendra. Current areas of research are geometry and graph algorithms, with applications in ML. The topic of Emma's thesis research is Optimal Transport, with a focus on OT approximations which are robust to noise. Her research is made possible by her two live-in, feline reasearch assistants; their contributions are compensated with scruffs and pets instead of author credit.</IonText></IonRow>
            {expandInfo(isExpanded)}
          </IonCol>
          <IonImg class="picture" src="/assets/id pic.jpg"></IonImg></IonRow>

        <IonRow><IonButton onClick={() => { window.location.assign('/PROJECTS'); }}>My Projects</IonButton></IonRow>
      </IonContent>
    </IonPage>
  );
};

export default About;
