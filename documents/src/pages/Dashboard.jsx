import TabControl from "../components/docs/Tabs";
import Count from "../components/TB/Count";


export default function Dashboard() {
  return (
    <div className=" pt-5  px-5">
      <Count />

      <div className="pt-10">
        <TabControl />
      </div>
    </div>
  );
}
