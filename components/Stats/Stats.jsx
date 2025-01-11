import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 300000,
    endCountText: "+",
    text: "Food Daily",
  },
  {
    endCountNum: 50,
    endCountText: "+",
    text: "Branches",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Commitment",
  },
];

const Stats = () => {
  return (
    <section
      className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px]
   gap-4 xl:gap-4"
    >
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;

