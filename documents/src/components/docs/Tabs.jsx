import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabControl() {

  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Départements",
      value: "departement",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Documents",
      value: "Documents",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Membres",
      value: "Membres",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Serviteurs",
      value: "serviteurs",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Ministres",
      value: "ministre",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];  

  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-md border-b border-white p-2 "
          indicatorProps={{
            className:
              " bg-white border-b-5 border-blue-700 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-slate-950 border-b-2 border-b-slate-800 font-bold text-xl p-2"
                  : "font-extrabold text-xl text-gray-500"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="py-5 px-4 mx-2 bg-white rounded-md">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}
