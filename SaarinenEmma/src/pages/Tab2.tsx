import { IonItem, IonCard, IonListHeader, IonRadio, IonRadioGroup, IonLabel, IonSelect, IonSelectOption, useIonPopover, IonSearchbar, IonCol, IonButton, IonText, IonGrid, IonRow, IonList, IonCheckbox, IonChip, IonIcon } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab2.css';
import { closeCircle, caretDown, } from 'ionicons/icons'



class Client {
  id: string;
  name: string;
  nameLast: String;
  alphaLevel: string;
  lastAnalysisDate: Date;
  recommendedAnalysis: String;
  tags: String;
  /*getName : function(Id: string){
    var clientname=clientsListConstructed.find(Client=> {
      return Client.id === Id
    })
    return clientname;
  }*/

  constructor(Id: string, Name: string, NameLast: string, AlphaLevel: string, LastAnalysisDate: Date, RecommendedAnalysis: string, Tags: string) {
    this.id = Id;
    this.name = Name;
    this.nameLast = NameLast;
    this.alphaLevel = AlphaLevel;
    this.lastAnalysisDate = LastAnalysisDate;
    this.recommendedAnalysis = RecommendedAnalysis;
    this.tags = Tags;
  }
  includesTags(filterCriteria: string) {
    var filterCriteriaArray = filterCriteria.split(",");
    for (var i = 0; i < filterCriteriaArray.length; i++) {
      if (!(filterCriteriaArray[i] == null || this.tags.includes(filterCriteriaArray[i]))) return false;
    }
    

    return true
  }
  

}


export const clientsListConstructed = [
  new Client(
    "1",
    "Jose Andreas",
    "Andreas",
    "Advanced",
    "2019-05-27" as unknown as Date,
    "Analysis Product Link",
    "client,advanced,new")
  ,
  new Client(
    "2",
    "Amelia Bedelia",
    "Bedelia",
    "Foundational",
    "1998-07-07" as unknown as Date,
    "Analysis Product Link",
    "prospective,foundational"
  ),
  new Client(
    "3",
    "Jose Cuervo",
    "Cuervo",
    "Foundational",
    "1995-03-17" as unknown as Date,
    "Analysis Product Link",
    "client,foundational"
  ),
  new Client(
    "4",
    "Frank Holmes",
    "Holmes",
    "Comprehensive",
    "2021-05-02" as unknown as Date,
    "Analysis Product Link",
    "client,comprehensive"
  ),
  new Client(
    "5",
    "Benjamin Franklin",
    "Franklin",
    "Advanced",
    "2021-02-12" as unknown as Date,
    "Analysis Product Link",
    "prospective,advanced"
  ),
  new Client(
    "6",
    "Frank Franklin",
    "Franklin",
    "Comprehensive",
    "2020-10-27" as unknown as Date,
    "Analysis Product Link",
    "client,comprehensive,new"
  ),
  new Client(
    "7",
    "Bethany LeBlanc",
    "LeBlanc",
    "Foundational",
    "2021-01-31" as unknown as Date,
    "Analysis Product Link",
    "prospective,foundational"
  ),
  new Client(
    "8",
    "John Addams",
    "Addams",
    "Comprehensive",
    "1402-08-03" as unknown as Date,
    "Analysis Product Link",
    "prospective,comprehensive"
  ),
  new Client(
    "9",
    "Emma Saarinen",
    "Saarinen",
    "Comprehensive",
    "2001-07-07" as unknown as Date,
    "Analysis Product Link",
    "prospective,comprehensive"
  ),
  new Client(
    "10",
    "Jane Doe",
    "Doe",
    "Advanced",
    "1856-07-21" as unknown as Date,
    "Analysis Product Link",
    "client,advanced"
  ),
  new Client(
    "11",
    "John Smith",
    "Smith",
    "Advanced",
    "2021-10-23" as unknown as Date,
    "Analysis Product Link",
    "prospective,advanced"
  ),
  new Client(
    "12",
    "(S)am Saarinen",
    "Saarinen",
    "Comprehensive",
    "2019-12-25" as unknown as Date,
    "Analysis Product Link",
    "client,comprehensive"
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
    { val: 'foundational', isChecked: false },
    { val: 'advanced', isChecked: false },
    
    { val: 'comprehensive', isChecked: false },
    { val: 'new', isChecked: false}
  ];
const [currentClient,setCurrentClient]=useState("N/A");
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
          <IonLabel>Last Name</IonLabel>
          <IonRadio slot="start" value="alpha" />
        </IonItem>

        <IonItem>
          <IonLabel>Last Analysis Date</IonLabel>
          <IonRadio slot="start" value="numer" />
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

  const clientActionPopoverList: React.FC<{
    onHide: () => void
  }> = ({ onHide }) => (
    <IonList>
      <IonListHeader>Client Options:{currentClient}</IonListHeader>
      <IonItem button onClick={() => { window.location.assign('/Tab3'); }} >Client Overview</IonItem>
      <IonItem button disabled={true}>Recent Reports</IonItem>
      <IonItem button disabled={true}>Save Reports</IonItem>
      <IonItem button onClick={()=>{}}>Add to Group</IonItem>
      <IonItem button role='destructive' disabled={true}>Delete</IonItem>
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
      "",
      "",
      "",
      "",
      "" as unknown as Date,
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
    let tempSearchResult = clientsListConstructed.filter(ele => ele.name.toUpperCase().includes(searchText)).filter(ele => ele.includesTags(filterCriteria)).sort(function (a, b) {

      if (sortType === "alpha") return alphaSort(a.nameLast.toLowerCase(), b.nameLast.toLowerCase());
      else
        return dateSort(a.lastAnalysisDate, b.lastAnalysisDate);
    })
    setFilteredSearch([...tempSearchResult])
  }, [searchText, sortType, filterCriteria])

  return (

    
      <IonGrid>
        <IonRow>
          <IonButton onClick={(e) =>
            presentSortPopover({
              event: e.nativeEvent,
            })
          } >Sort By <IonIcon icon={caretDown}></IonIcon></IonButton>
          
          <IonButton onClick={() => { setSortType("alpha"); setFilterCriteria("");setcheckboxList(originalCheckboxList)}}>All</IonButton>
          <IonButton onClick={() => { updateFilterCriteria("client"); }}>Clients</IonButton>
          <IonButton onClick={() => updateFilterCriteria("prospective")}>Prospects</IonButton>
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
                <IonCol class="columnHead">Name</IonCol>
                <IonCol class="columnHead">Advisor Driven Alpha Level</IonCol>
                <IonCol class="columnHead">Last Analysis Ran</IonCol>
                <IonCol class="columnHead">Recommended Analysis</IonCol>
              </IonRow>
              {filteredSearch.map((clientToCheck) => (
                <IonRow

                  key={clientToCheck.id}
                >
                  <IonCol><IonText
                    onClick={(e) =>{
                      presentPopover({
                        event: e.nativeEvent,
                      });
                    setCurrentClient(clientToCheck.name)}
                    }
                  >{clientToCheck.name}</IonText></IonCol>
                  <IonCol>{clientToCheck.alphaLevel}</IonCol>
                  <IonCol>{clientToCheck.lastAnalysisDate}</IonCol>
                  <IonCol>{clientToCheck.recommendedAnalysis}</IonCol>
                </IonRow>
              ))}
              <IonRow> <IonText color="primary">Showing {filteredSearch.length} of {clientsListConstructed.length}</IonText></IonRow>
            </IonCol>
          </IonGrid>
        </IonCard>
      </IonGrid>
    
  );
};

export default ClientPage;