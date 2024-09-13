import Calendar from "./../components/calendar";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#e2e1dc]">
      <div className="relative bg-[#373c4f] min-w-[1300px] min-h-[780px] rounded-[10px] flex">
        <div className="left w-[60%] p-[20px] min-h-[780px]">
          <Calendar />
        </div>
        <div className="right w-[40%] p-[20px] min-h-[780px]">
          RIght
        </div>
      </div>
    </div>
  );
}
