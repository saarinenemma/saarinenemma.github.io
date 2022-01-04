import { IonItem, IonCard, IonListHeader, IonRadio, IonImg, IonRadioGroup, IonLabel, IonHeader, IonToolbar, IonTitle,useIonAlert, IonSelect, IonSelectOption, useIonPopover, IonSearchbar, IonCol, IonButton, IonText, IonGrid, IonRow, IonList, IonCheckbox, IonContent, IonChip, IonIcon } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './About.css';
import { closeCircle, caretDown, } from 'ionicons/icons'



class Client {
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

function alphaSort(a: String, b: String) {
  // @ts-ignore
  let x = a;
  // @ts-ignore
  let y = b;
  if (x < y) { return -1; }
  if (x > y) { return 1; }
  return 0;
}
function dateSort(a: Date, b: Date) {
  // @ts-ignore
  let x = a;
  // @ts-ignore
  let y = b;
  if (x < y) { return 1; }
  if (x > y) { return -1; }
  return 0;
}
const ClientPage: React.FC = () => {
  const originalCheckboxList=[
    { val: 'Math', isChecked: false },
    { val: 'Programming', isChecked: false },
    
    { val: 'Russian', isChecked: false },
    { val: 'Ongoing', isChecked: false},
    {val: 'Visual Art', isChecked: false}
  ];
const [currentClient,setCurrentClient]=useState(new Client(
 0,
  "",
  "",
  "" as unknown as Date,
  ""as unknown as Date,
  "",
  ""
));
  const [checkboxList,setcheckboxList] =useState( originalCheckboxList);
  const sortByPopoverList: React.FC<{
    onSortHide: () => void;
  }> = ({ onSortHide }) => (

    <IonList>
      <IonRadioGroup value={sortType} onIonChange={e => setSortType(e.detail.value)}>
        <IonListHeader>
          <IonLabel>Sort By</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Project Name</IonLabel>
          <IonRadio slot="start" value="alpha" />
        </IonItem>

        <IonItem>
          <IonLabel>Start Date</IonLabel>
          <IonRadio slot="start" value="start" />
        </IonItem>
        <IonItem>
          <IonLabel>End Date</IonLabel>
          <IonRadio slot="start" value="end"></IonRadio>
        </IonItem>

      </IonRadioGroup>
      <IonItem lines="none" detail={false} button onClick={onSortHide}>
        Close Menu
      </IonItem>
    </IonList>
  );
  const groupsPopoverList: React.FC<{
    onGroupHide: () => void;
  }> = ({ onGroupHide }) => (

    <IonList>
      {updateGroupOptions(checkboxList)}
      <IonItem lines="none" detail={false} button onClick={onGroupHide}>
        Close Menu
      </IonItem>
    </IonList>

  );
 const [present] = useIonAlert();
  const clientActionPopoverList: React.FC<{
    onHide: () => void 
  }> = (
    { onHide }) => (
  
    <IonList>
      <IonListHeader>Project Options:{currentClient.projectName}</IonListHeader>
      <IonItem button disabled={true} onClick={() => { window.location.assign('/Projects/details/'+currentClient.id); }} >Project Detail Page (under construction, check back in a week)</IonItem>
      <IonItem button 
          onClick={() => present(currentClient.description, [{ text: 'Ok' }])}>Project Overview</IonItem>
     
      <IonItem lines="none" detail={false} button onClick={onHide}>
        Close Menu
      </IonItem>
    </IonList>
  );



  
  const [searchText, setSearchText] = useState('');
  const [sortType, setSortType] = useState("alpha");
  const [filterCriteria, setFilterCriteria] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([
    new Client(
      0,
      "",
      "",
      "" as unknown as Date,
      ""as unknown as Date,
      "",
      ""
    )])

  const [presentPopover, dismissPopover] = useIonPopover(clientActionPopoverList, { onHide: () => dismissPopover()});
  const [presentSortPopover, dismissSortPopover] = useIonPopover(sortByPopoverList, { onSortHide: () => dismissSortPopover() });
  const [presentGroupPopover, dismissGroupPopover] = useIonPopover(groupsPopoverList, { onGroupHide: () => dismissGroupPopover() });
 

  function updateGroupOptions(groupList:{val:string,isChecked:boolean}[]){
    const checkBoxes=groupList.map(({ val, isChecked }, i) => (
      <IonItem  key={i}>
        <IonLabel>{val}</IonLabel>
        <IonCheckbox  name={val} slot="start" value={val} checked={isChecked} onClick={e => {updateFilterCriteria(val);}}/>
      </IonItem>
    ));
    return <IonList>{checkBoxes}</IonList>
  }
  function updateFilterCriteria(criteria: string) {

    var temptext = filterCriteria;
    const checkboxToChange=checkboxList.filter(obj => {
      return obj.val === criteria
    });
    var tempCheckboxList=checkboxList;
    if(checkboxToChange.length>0){var givenCheck =tempCheckboxList[checkboxList.indexOf(checkboxToChange[0])];givenCheck.isChecked=!givenCheck.isChecked;setcheckboxList(tempCheckboxList)}

    if (!filterCriteria.includes(criteria)) { temptext = temptext + "," + criteria; setFilterCriteria(temptext); }
    else { temptext = temptext.replace("," + criteria, ""); setFilterCriteria(temptext) }
  }
  function updateFilterChips(filterList: string) {
    var filterCriteriaArray = filterList.split(",");
    var chipList = [];
    for (var i = 0; i < filterCriteriaArray.length; i++) {
      const currentCriteria = filterCriteriaArray[i];
      if (currentCriteria !== "") chipList.push(<IonChip>{currentCriteria}<IonIcon icon={closeCircle} onClick={() => updateFilterCriteria(currentCriteria)}></IonIcon></IonChip>)
    }
    return (<div>{chipList}</div>)
  }

  useEffect(() => {
    let tempSearchResult = clientsListConstructed.filter(ele => ele.projectName.toUpperCase().includes(searchText)).filter(ele => ele.includesTags(filterCriteria)).sort(function (a, b) {

      if (sortType === "alpha") return alphaSort(a.projectName.toLowerCase(), b.projectName.toLowerCase());
      else if (sortType=="start")return dateSort(a.startDate, b.startDate);
      else return dateSort(a.endDate,b.endDate);
    })
    setFilteredSearch([...tempSearchResult])
  }, [searchText, sortType, filterCriteria])
  const [links,setLinks]=useState(["ABOUT","PROJECTS","CONTACT","FUN","ОПИСАНИЕ","PROJECTS"])
  function changeBackground(e) {
    e.target.style.fontWeight='bolder';
  }
  
  function fixBackground(e){e.target.style.fontWeight='lighter'}
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

    <IonContent>
      <IonGrid>
        <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
          <IonTitle class="Title2">Emma Saarinen</IonTitle>
          <IonText>Researcher, Tutor, Developer</IonText>
          </IonCol>
          <IonCol  >updateLinks(links)</IonCol>
          </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonRow><IonText >Select the name of a project to get more information!</IonText></IonRow>
        <IonRow>
          <IonButton onClick={(e) =>
            presentSortPopover({
              event: e.nativeEvent,
            })
          } >Sort By <IonIcon icon={caretDown}></IonIcon></IonButton>
          
          <IonButton onClick={() => { setSortType("alpha"); setFilterCriteria("");setcheckboxList(originalCheckboxList)}}>All</IonButton>
          <IonButton onClick={() => { updateFilterCriteria("work"); }}>Professional</IonButton>
          <IonButton onClick={() => updateFilterCriteria("fun")}>Extracurricular</IonButton>
          <IonButton onClick={(e) =>
            presentGroupPopover({
              event: e.nativeEvent,
            })
          } >Groups <IonIcon icon={caretDown}></IonIcon></IonButton>

          <IonSearchbar value={searchText} style={{ width: "30%" }} autocomplete="name" animated={true} showClearButton="focus" color="primary" placeholder="Search by Name.." onIonChange={e => setSearchText(e.detail.value?.toUpperCase()!)} showCancelButton="focus"></IonSearchbar>
        </IonRow>
        <IonRow>{updateFilterChips(filterCriteria)}</IonRow>


        <IonCard>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonCol class="columnHead">Project Name</IonCol>
                <IonCol class="columnHead">Subject/Medium</IonCol>
                <IonCol class="columnHead">Start Date</IonCol>
                <IonCol class="columnHead">End Date</IonCol>
              </IonRow>
              {filteredSearch.map((clientToCheck) => (
                <IonRow

                  key={clientToCheck.id}
                >
                  <IonCol><IonText class="links"
                    onClick={(e) =>{
                      presentPopover({
                        event: e.nativeEvent,
                      });
                    setCurrentClient(clientToCheck)}
                    }
                  >{clientToCheck.projectName}</IonText></IonCol>
                  <IonCol>{clientToCheck.alphaLevel}</IonCol>
                  <IonCol>{clientToCheck.startDate}</IonCol>
                  <IonCol>{clientToCheck.endDate}</IonCol>
                </IonRow>
              ))}
              <IonRow> <IonText color="primary">Showing {filteredSearch.length} of {clientsListConstructed.length}</IonText></IonRow>
            </IonCol>
          </IonGrid>
        </IonCard>
        <IonCard>
          <IonGrid>
        <IonRow><IonImg class="picture" src="/assets/blanket.jpg"></IonImg><IonImg class="picture" src="/assets/catsfunny.jpg"></IonImg><IonImg class="picture" src="/assets/dancers.jpg"></IonImg></IonRow>
        <IonRow><IonImg class="picture" src="/assets/replacement.png"></IonImg><IonImg class="picture" src="/assets/zigzag.png"></IonImg></IonRow>
        <IonRow><IonImg class="picture" src="/assets/catto.jpg"></IonImg><IonImg class="picture" src="/assets/fish.jpg"></IonImg><IonImg class="picture" src="/assets/oragami.jpg"></IonImg></IonRow>
        <IonRow><IonImg class="picture" src="/assets/exslow.png"></IonImg><IonImg class="picture" src="/assets/exfast.png"></IonImg><IonImg class="picture" src="/assets/expaths.png"></IonImg></IonRow>
        <IonRow><IonImg class="picture" src="/assets/painting.jpg"></IonImg><IonImg class="picture" src="/assets/purse.jpg"></IonImg><IonImg class="picture" src="/assets/laughing.jpg"></IonImg></IonRow>
        <IonRow><IonImg class="picture" src="/assets/1000vfast.png"></IonImg><IonImg class="picture" src="/assets/example1.png"></IonImg></IonRow>
     </IonGrid> </IonCard><IonText>Last updated december 2021</IonText></IonGrid>
    </IonContent>
  );
};

export default ClientPage;