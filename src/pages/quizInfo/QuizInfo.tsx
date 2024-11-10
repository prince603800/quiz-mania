const InfoHeader = ({ headerTitle }: { headerTitle: string }) => (
  <div className="p-3 flex items-center bg-[#F3F3E9] w-full h-[49px] text-[20px] font-bold">
    {headerTitle}
  </div>
);

const InfoContent = ({ content, strongText }: { content: string, strongText?: string }) => (
  <div className="flex mt-3 text-[#000000] text-[20px] font-normal"><li>{content} {' '} <strong>{strongText}</strong></li></div>
);

const QuizInfo = () => {
  return (
    <>
      <div className="mb-3">
        <InfoHeader headerTitle="10-Second Timer" />
        <ul className="list-disc list-inside">
          <InfoContent content="Each question comes with a 10-second timer." />
          <InfoContent content="If you don’t answer within the time limit, the app will automatically move to the next question." />
        </ul>
      </div>

      <div className="mb-3">
        <InfoHeader headerTitle="Manual Navigation" />
        <ul className="list-disc list-inside">
          <InfoContent content="You can navigate to the next question manually before the timer expires." />
          <InfoContent content='Use the "Next" button to move ahead if you’re ready before the timer runs out.' />
        </ul>
      </div>

      <div>
        <InfoHeader headerTitle="Final Score and Performance Message" />
        <ul className="list-disc list-inside">
          <InfoContent
            content="After all questions are answered, your final score will be displayed."
          />
          <InfoContent
            content="Based on your performance, you will receive a personalized message:"
          />

          <div className="ml-[7rem]">
            <InfoContent
              content="Great job!: If you score "
              strongText="above 80%."
            />
            <InfoContent
              content="Well done!: If you score"
              strongText="between 60% and 80%."
            />
            <InfoContent
              content="Keep practicing!: If you score"
              strongText="below 60%."
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default QuizInfo;
