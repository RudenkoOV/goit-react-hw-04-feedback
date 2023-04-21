import {useState} from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export default function App () {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const btnNameFeedback = ['Good', 'Neutral', 'Bad'];

  function onLeaveFeedback (value) {
    switch (value) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  }

  function totalFeedbacks() {
    return good + neutral + bad;
  }

  function positiveFeedbacksPrecentage () {
    return totalFeedbacks() > 0 ? `${Math.round((good) / (totalFeedbacks())*100)} %` : `0%`
  }

    return (
      <><Section title='Please leave Feedback'>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={btnNameFeedback}></FeedbackOptions>
      </Section><Section title='Statistic'>
          {totalFeedbacks() ? <Statistics feedbacks={totalFeedbacks()} total={totalFeedbacks()} positivePercentage={positiveFeedbacksPrecentage()}></Statistics>
          : <Section title='There is no Feedback'></Section>}
        </Section></>
    )
  
}

