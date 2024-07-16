import { Button, InlineGrid } from "@shopify/polaris";
import type { ReactNode } from "react";
import React from "react";

interface ICustomTabsProps {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  tabs: { key: string; title: string }[];
  children: ReactNode;
}

export default function CustomTabs({
  currentTab,
  setCurrentTab,
  tabs,
  children,
}: ICustomTabsProps) {
  return (
    <>
      <InlineGrid columns={2}>
        {tabs.map((tab) => {
          return (
            <Button
              key={tab.key}
              variant="monochromePlain"
              onClick={() => setCurrentTab(tab.key)}
            >
              {tab.title}
            </Button>
          );
        })}
      </InlineGrid>

      {children}
    </>
  );
}
