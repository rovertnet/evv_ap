import Table from "../components/docs/Table";
import Count from "../components/TB/Count";


export default function Dashboard() {
  return (
    <div className=" pt-5  px-5">
      <Count />

      <div className="pt-10">
        <Table />
      </div>
    </div>
  );
}
