import { IonCol, IonContent, IonText,IonList,useIonPopover, IonModal, IonRange, IonItem, IonToolbar, IonTextarea, IonButtons, IonCard, IonInput, IonFooter, IonTitle, IonImg, IonCardContent, IonCardSubtitle, IonButton, IonIcon, IonGrid, IonRow, IonHeader, IonCardHeader } from '@ionic/react';

import { analytics, person, book, build, create, chatbubbles, arrowRedo, close, informationCircleOutline, returnDownBack } from 'ionicons/icons';
import { useState } from 'react';

import './Tab3.css';

export const foundationalQuestions = [
  {
    id: "1",
    questionText: "Age?",
    possibleAnswers: [],
    questionType: "number",
    helpText: "Age of Client"
  },
  {
    id: "2",
    questionText: "Annual Income?",
    possibleAnswers: [],
    questionType: "number",
    helpText: ""
  },
  {
    id: "3",
    questionText: "Total Assets?",
    possibleAnswers: [],
    questionType: "number",
    helpText: "Total value of all household savings, checking, retirement accounts, brokerage accounts, primary home, investment property, etc "
  },
  {
    id: "4",
    questionText: "Total Liabilities?",
    possibleAnswers: [],
    questionType: "number",
    helpText: "Total value of all debts, including mortgages , credit cards, lines of credit, etc"
  },
  {
    id: "5",
    questionText: "Liquid Net Worth?",
    possibleAnswers: [],
    questionType: "number",
    helpText: "Liquid net worth is your net worth minus assets that cannot be converted quickly and easily into cash, such as real estate, business equity, personal property."
  },
  {
    id: "6",
    questionText: "Financial Objective?-choose one",
    possibleAnswers: ["Accumulation Phase", "Protection Phase", "Distribution Phase"],
    questionType: "multiple",
    helpText: "Accumulation Phase – Client is in the early part of their career and the primary goal is wealth accumulation. Protection Phase – Client is still working but is  within 10 years or so of retirement. Primary goal is to balance growth objectives with risk management as retirement approaches. Distribution Phase- Client is retired and lives on financial assets. Primary goal is to support retirement income needs and maintain purchasing power of assets"
  },
  {
    id: "7",
    questionText: "Financial Time Horizon?",
    possibleAnswers: [],
    questionType: "number",
    helpText: "The expected number of years a client plans to invest to achieve their financial objective    "
  },
  {
    id: "8",
    questionText: "Liquidity Needs?",
    possibleAnswers: [],
    questionType: "number",
    helpText: "The amount of money that a client would needs/desires to meet financial obligations that would require the quick and easy conversion of investments without experiencing significant loss in value. "
  },
  {
    id: "9",
    questionText: "Financial Experience?",
    possibleAnswers: ["1", "10"],
    questionType: "scale",
    helpText: "From 1 -10, 1 being new to investing, 10 as having significant investment experience"
  },
  {
    id: "10",
    questionText: "Risk Tolerance?",
    possibleAnswers: ["Conservative", "Moderately Conservative", "Moderate", "Moderately Agressive", "Aggressive"],
    questionType: "multiple",
    helpText: "Describes how a client “feels” about risk, and their willingness to take risk Conservative – Willing to accept 0-8 weighted average standard deviation Moderately Conservative- Willing to accept 8.01 – 14 weighted average standard deviation Moderate- Willing to accept 14.01-18 weighted average standard deviation Moderately Aggressive- Willing to accept 18.01-26 weighted average standard deviation Aggressive- Willing to accept 26.01+  weighted average standard deviation"
  },
  {
    id: "11",
    questionText: "Tax Bracket? - Pick the closest match",
    possibleAnswers: ["10%", "12%", "22%", "24%", "32%", "35%", "37%"],
    questionType: "multiple",
    helpText: ""
  },

];




const ClientOverview: React.FC = () => {
  const popoverHelpText: React.FC<{
    onHide: () => void
  }> = ({ onHide }) => (
    <IonItem onMouseLeave={()=>{dismissPopover() } }>
      <p className="helpText"> {foundationalQuestions[currentQuestionIndex].helpText}</p>
      </IonItem>
  );


  /*chatmode is true if user is "chatting" with the computer i.e. filling out a form. false otherwise*/
  const [chatMode, setMode] = useState(false);
  const [value, setValue] = useState(0);
  const [shown, setShown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [chatText, setChatText] = useState("Hi, (Advisor Name). Let's work on your Client's profile.")
  const question = foundationalQuestions[((currentQuestionIndex) % foundationalQuestions.length)];
  const delimiter = "*BREAK*";
  /*TODO: rn needs 2 characters to read as answered */
  const [isAnswered, setAnswered] = useState(false);
  const [presentPopover, dismissPopover] = useIonPopover(popoverHelpText, { onHide: () => dismissPopover()});


  function updateChat(answer: string) {



    /*initialize for next question*/
    setAnswered(false);
    setInputText("");



    /*update the chat history TODO: make snap to fit width */

    setChatText(chatText + delimiter + answer)
  }

  function updatecurrentInteraction(questionIndex: number) {
    const tempquestion = foundationalQuestions[((questionIndex) % foundationalQuestions.length)];
    var display = <div></div>;

    var prompt = <IonRow ><p className="leftbox leftTriangle " color="primary"  >{tempquestion.questionText}</p>
      <IonIcon onClick={(e) => { presentPopover({
                        event: e.nativeEvent,
                      }); }} onMouseOver={(e) => { presentPopover({
                        event: e.nativeEvent,
                      }); }}icon={informationCircleOutline}></IonIcon>
    </IonRow>;
    var answer = <p>what</p>;

    /*list multiple choice answers for next question or nothing for other types of questions*/
    let tempList = [];
    if (tempquestion.questionType == "multiple") {
      for (let i = 0; i < tempquestion.possibleAnswers.length; i++) {
        tempList[tempList.length] = { val: tempquestion.possibleAnswers[i] };
      }
    } else {
      tempList = [];
    }






    if (tempquestion.questionType == "number") {
      answer = <IonItem>
        <IonTextarea placeholder="Enter answer here..." value={inputText} onIonChange={e => { setAnswered(inputText != ""); setInputText(e.detail.value!) }}></IonTextarea>
      </IonItem>;
    }
    else if (tempquestion.questionType == "scale") {
      answer = <IonRange pin={true} value={value} min={question.possibleAnswers[0] as unknown as number} max={question.possibleAnswers[1] as unknown as number} onIonChange={e => { setInputText(e.detail.value as unknown as string); setValue(e.detail.value as number) }} />
    } else {
      answer = <div>{tempList.map(({ val }, i) => (
        <IonItem key={i}>
          <IonButton onClick={() => { updateChat(val); (currentQuestionIndex >= (foundationalQuestions.length - 1)) ? finishForm() : setQuestionIndex(currentQuestionIndex + 1); }} slot="start" >{val}</IonButton>
        </IonItem>
      ))}</div>;
    }

    display = <div >{prompt}{answer}</div>
    return display
  }

  function updateChatText(chatList: String) {
    var chatTextArray = chatList.split(delimiter);
    var tempHistory = [];
    tempHistory.push(<p className="leftbox leftTriangle " color="primary"  >{chatTextArray[0]}</p>);
    for (var i = 1; i < chatTextArray.length; i++) {
      tempHistory.push(<p className="leftbox leftTriangle " color="primary"  >{foundationalQuestions[i - 1].questionText}</p>);
      tempHistory.push(<p className="rightbox rightTriangle " color="secondary"  ><IonIcon icon={create} onClick={() => { setShown(false); setIsEditing(true) }}></IonIcon>{chatTextArray[i]}</p>)
    };
    return tempHistory
  }

  function updateFormText(answerList: string) {
    var answerTextArray = answerList.split(delimiter);
    var tempHistory = [];
    for (var i = 1; i < answerTextArray.length; i++) {
      const currentQuestion = foundationalQuestions[i - 1];
      const index = i - 1;
      tempHistory.push(<IonRow><IonCol><p>{currentQuestion.questionText}</p></IonCol><IonCol><IonInput value={answerTextArray[i]} placeholder={answerTextArray[i]} onIonChange={e => { updateAnswers(chatText, e.detail.value!, index) }}></IonInput></IonCol></IonRow>)
    }
    for (var j = answerTextArray.length - 1; j < foundationalQuestions.length; j++) {
      const index = j - 1;
      tempHistory.push(<IonRow><IonCol><p>{foundationalQuestions[j].questionText}</p></IonCol><IonCol><IonInput value={""} placeholder={"Please Answer Here"} onIonChange={e => { updateAnswers(chatText, e.detail.value!, index) }}></IonInput></IonCol></IonRow>)
    }
    return <IonGrid>{tempHistory}</IonGrid>
  }
  function updateAnswers(answerList: string, newAnswer: string, index: number) {
    const answerTextArray = answerList.split(delimiter);
    if (index + 1 > currentQuestionIndex) { setQuestionIndex((index + 1) % foundationalQuestions.length); }
    
    var tempHistory = "";
    const originalLength = answerTextArray.length;
    if (index < originalLength - 1) {
      answerTextArray[index + 1] = newAnswer
    }
    else {
      for (var j = originalLength - 1; j <= index; j++) {
        
        answerTextArray.push("UNANSWERED");
      }
      answerTextArray.push(newAnswer);
    }
    for (var k = 0; k < answerTextArray.length - 1; k++) {
      tempHistory = tempHistory + answerTextArray[k] + delimiter
    }
    tempHistory = tempHistory + answerTextArray[answerTextArray.length - 1];
    setChatText(tempHistory)
    if (index === foundationalQuestions.length - 1) { finishForm() };
  }
  function finishForm() {
    setMode(false);
    setQuestionIndex(currentQuestionIndex+foundationalQuestions.length);
  }

  return (

    <IonContent>
      <IonGrid>
        <IonCol>
          <IonRow><IonText>Client Progress:</IonText></IonRow>
          <IonRow><IonButton onClick={() => { setMode(false); setShown(true); }}>1.<IonIcon icon={person}></IonIcon> Profile</IonButton></IonRow>
          <IonRow><IonButton>2.<IonIcon icon={analytics}></IonIcon>  Analyze</IonButton></IonRow>
          <IonRow><IonButton>3.<IonIcon icon={book}></IonIcon> Recommendation</IonButton></IonRow>
          <IonRow><IonButton>4. <IonIcon icon={chatbubbles}></IonIcon>Discuss with our Experts</IonButton></IonRow>
          <IonRow><IonButton>5. <IonIcon icon={build}></IonIcon>A-la Cart Completion Strategies</IonButton></IonRow>
          <IonRow><IonButton>6. <IonIcon icon={arrowRedo}></IonIcon>Personalized Communication Plan</IonButton></IonRow>
        </IonCol></IonGrid>
      <IonModal isOpen={isEditing} backdropDismiss={true} onDidDismiss={() => setIsEditing(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton color="danger" onClick={() => { setIsEditing(false); setShown(true); }}><IonIcon icon={returnDownBack} /></IonButton>
              <IonButton color="danger" onClick={() => { setIsEditing(false); }}><IonIcon icon={close} /></IonButton>
            </IonButtons>
            <IonTitle>
              Profile, Client Name
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>{updateFormText(chatText)}</IonContent></IonModal>
      <IonModal isOpen={shown} backdropDismiss={true} onDidDismiss={() => setShown(false)}>
        {/*TODO: clicking off to exit */}
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton color="danger" onClick={() => { setShown(false); }}><IonIcon icon={close} /></IonButton>
            </IonButtons>
            <IonTitle>
              Profile, Client Name
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding ion-inputText-center">
          <div>{updateChatText(chatText)}</div>
          {(!chatMode) ?
            <IonGrid>
              <IonRow>
                <IonCard button onClick={() => { setMode(true); if(currentQuestionIndex>foundationalQuestions.length&&chatText.includes(delimiter)){setIsEditing(true);setMode(false)} }}><IonCardHeader>Foundational</IonCardHeader><IonCardContent></IonCardContent><IonCardSubtitle>Basic regulatory info</IonCardSubtitle></IonCard>
                <IonCard button disabled={true}><IonCardHeader>Comprehensive</IonCardHeader></IonCard>
                <IonCard button disabled={true}><IonCardHeader>Advanced</IonCardHeader></IonCard>
              </IonRow>
            </IonGrid>
            : <IonGrid>

              <IonFooter> {updatecurrentInteraction(currentQuestionIndex)
              }

                <IonButtons><IonButton disabled={!(isAnswered || foundationalQuestions[currentQuestionIndex].questionType == "scale")} slot="end" className="ion-inputText-right" onClick={() => { updateChat(inputText); (currentQuestionIndex >= (foundationalQuestions.length - 1)) ? finishForm() : setQuestionIndex(currentQuestionIndex + 1); }}>submit</IonButton>
                </IonButtons>

              </IonFooter>
            </IonGrid>
          }
        </IonContent>

      </IonModal>
      <IonImg src="/assets/img/ClientOverviewPrototype.PNG"></IonImg>
      
</IonContent>
  );
};

export default ClientOverview;
