import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

export interface Tab {
  label: string;
  value: string;
  disabled?: boolean;
  component: React.ReactNode;
}

interface TabsComponentProps {
  tabs: Tab[];
}

export function TabsComponent({ tabs }: TabsComponentProps) {
  return (
    <>
      <Tabs value="asset-details">
        <TabsHeader>
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} disabled={tab.disabled}>
              {tab.label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {tabs.map((tab) => (
            <TabPanel key={tab.value} value={tab.value} className="mt-6">
              {tab.component}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}
