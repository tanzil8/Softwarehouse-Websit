import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 5000,
    endCountText: "+",
    text: "Client website",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "JavaScript",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Python",
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

