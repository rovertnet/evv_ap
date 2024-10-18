import Table from "../components/docs/Table";
import Count from "../components/TB/Count";
import SwipeableTemporaryDrawer from "../components/util/Drawer";


export default function Dashboard() {
  return (
    <div className=" py-5">
      <Count />

      <div className="pt-10">
        <Table />
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
}
