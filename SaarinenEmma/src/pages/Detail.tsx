import { IonContent, IonHeader, IonButton, IonImg, IonGrid, IonCol, IonText, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
  import { useState } from 'react';
  import ExploreContainer from '../components/ExploreContainer';
  import './About.css';
  export class Client {
    id: number;
    
    projectName: string;
    alphaLevel: string;
    startDate: Date;
    endDate: Date;
    tags: String;
    description: string;
    /*getName : function(Id: string){
      var clientname=clientsListConstructed.find(Client=> {
        return Client.id === Id
      })
      return clientname;
    }*/
  
    constructor(Id: number,  ProjectName: string, AlphaLevel: string, StartDate: Date, EndDate: Date, Tags: string, Description: string) {
      this.id = Id;
      this.projectName = ProjectName;
      this.alphaLevel = AlphaLevel;
      this.startDate = StartDate;
      this.endDate = EndDate;
      this.tags = Tags;
      this.description=Description;
    }
    includesTags(filterCriteria: string) {
      var filterCriteriaArray = filterCriteria.split(",");
      for (var i = 0; i < filterCriteriaArray.length; i++) {
        if (!(filterCriteriaArray[i] == null || this.tags.includes(filterCriteriaArray[i]))) return false;
      }
      
  
      return true
    }
    
    
  
  }
  
  
  export  const clientsListConstructed = [
    new Client(
      1,
      "Honors Thesis",
      "Multimedia Research, Russian, Graphs",
      "2018-08-01" as unknown as Date,
      "2020-08-14" as unknown as Date,
      "work,Math,Programming,Russian",
      "Honors Thesis ASU, 2018-2020 </br> ''Translation, Analysis, and Application of a Russian-Language Graph Theory Paper'' </br> Emma Saarinen, Iuliia Inozemtseva, Sergei Suslov </br> Adjacency Matrices, Expander Graphs </br> Unbridled enthusiasm")
    ,
    new Client(
      2,
      "Senior Thesis (WKU)",
      "Research Poster, Primitive Pythagorean Triples",
      "2015-08-01" as unknown as Date,
      "2016-05-01" as unknown as Date,
      "work,Math,Programming",
      "Senior Thesis at Western KY Uni. with Dr. Thomas Richmond, demonstarating density of Primitive Pythagoran Triplets in the first quadrant and formulas for finding arbitrarily large PPTs. Very cool plots"
    ),
    new Client(
      3,
      "Graph Partition Problem",
      "Research Paper, Directed Acyclic Graph",
      "2021-05-01" as unknown as Date,
      "" as unknown as Date,
      "work,Math,Programming,Ongoing",
      "Demonstrating near optimality of a novel query algorithm on Directed Acyclic Graphs. </br> Under the supervision of Dr. Michael Littman and Dr. Samuel Saarinen (No relation)(Just kidding he is related)"
    ),
    new Client(
      4,
      "Rose Purse",
  
      "Needlepoint",
      "2021-12-25" as unknown as Date,
      "2021-12-30" as unknown as Date,
      "fun, Ongoing,Visual Art",
      "Embroidery project of roughly 12''*12'', ~100 hours of work in total </br> about one gallon of tears"
    ),
    new Client(
      5,
      "My Junior Advisor",
  
      "Web App, Finance, Programming",
      "2021-03-01" as unknown as Date,
      "" as unknown as Date,
      "work,Programming,Ongoing",
      "Web app to support financial advisors. I led web development on this project </br> This interface is adapted from my work there"
    ),
    new Client(
      6,
      "Celtic Knot Blanket",
  
      "Knitting",
      "2017-08-01" as unknown as Date,
      "" as unknown as Date,
      "fun,Ongoing,Visual Art",
      "4 years and counting devoted to this blanket</br>over 1000 hours spent on design/planning/executing this custom geometric blanket"
    ),
    new Client(
      7,
      "Art",
  
      "Drawing, Painting, Sketching",
      "" as unknown as Date,
      "" as unknown as Date,
      "fun,Ongoing,Visual Art",
      "Are you getting a christmas present from me? Its probably a painting."
    ),
    new Client(
      8,
      "Human Event Teacher's Assistant",
  
      "Teaching, Writing",
      "2017-08-01" as unknown as Date,
      "2020-05-01" as unknown as Date,
      "work",
      "3 years and hundreds of students experience in tutoring, teaching, and writing"
    ),
    new Client(
      9,
      "Solutions Engineer at Epic Systems",
  
      "Computational problem solving, Programming",
      "2020-08-07" as unknown as Date,
      "2021-03-15" as unknown as Date,
      "work,Programming",
      "Experience in team work, problem solving, and programming </br> Gained deep knowledge of the cafes in Madison WI"
    ),
    new Client(
      10,
      "Supply Chain Intern Omnova Solutions",
     
      "VBA, Programming, Data processing",
      "2017-06-01" as unknown as Date,
      "2017-08-01" as unknown as Date,
      "work,Math,Programming",
      "Developed a unique data procesing program still in use to evaluate plant efficiency."
    ),
    new Client(
      11,
      "Nyebo and Zemlya",
  
      "Cats, Parenting, Beast Taming",
      "2021-03-16" as unknown as Date,
      "" as unknown as Date,
      "fun,Ongoing",
      "My two cats are my ''heaven'' and ''earth'' ... and also the source of 50% of my stress NOOO DROP THAT DONT EAT THAT"
    ),
    new Client(
      12,
      "Study Abroad and Language Studies",
  
      "Language and travel, Essays, Presentations, Research",
      "2014-08-01" as unknown as Date,
      "" as unknown as Date,
      "fun,Russian,Ongoing",
      "Almost a decade of Russian study, combining both personal interest and technical utility. Can neither confirm nor deny any particiption in espionage."
    ),
    
  ];
  interface ContainerProps {
        id: string;
      }
    
      const Detail: React.FC<ContainerProps> = ({ id }) => {
    const [isExpanded, setExpanded] = useState(false)
    function expandInfo(isExpanded:Boolean){
      if (isExpanded){return <IonCol><IonRow><IonText class="body">{id}I am a student, researcher, and webdeveloper with a history in discrete math, computer algorithms, Tutoring, and over-engineering. I recieved a BS in Mathematics from Arizona State University and previously studied at Western Kentucky University through the Gatton Academy. I will add more info eventually, but unfortunately this website is mid-development. See my resume or personal statement for more details.</IonText></IonRow><IonRow><IonText onClick={()=>setExpanded(false)} class="links">Less Info...</IonText></IonRow></IonCol>}
      else{return <IonRow><IonText onClick={()=>setExpanded(true)} class="links">More Info...</IonText></IonRow>}
    }
    const [links, setLinks] = useState(["ABOUT", "PROJECTS", "CONTACT", "FUN", "ОПИСАНИЕ", "ABOUT"])
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
              <IonRow class="Title"><IonText>About Emma</IonText></IonRow>
              <IonRow><IonText class="body">{clientsListConstructed[1].description}</IonText></IonRow>
              {expandInfo(isExpanded)}
            </IonCol>
            <IonImg class="picture" src="/assets/id pic.jpg"></IonImg></IonRow>
  
          <IonRow><IonButton onClick={() => { window.location.assign('/PROJECTS'); }}>My Projects</IonButton></IonRow>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Detail;
  