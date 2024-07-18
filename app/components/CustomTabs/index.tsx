import { BlockStack, Button, Divider, InlineGrid } from "@shopify/polaris";
import type { ReactNode } from "react";
import React from "react";
import "./index.css";

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
    <BlockStack gap="200">
      <InlineGrid columns={tabs.length}>
        {tabs.map((tab) => {
          const isCurrentTab = currentTab === tab.key;

          return (
            <div
              key={tab.key}
              className={`${isCurrentTab ? "activeTab" : null}`}
            >
              <Button
                variant="monochromePlain"
                fullWidth
                onClick={() => setCurrentTab(tab.key)}
              >
                {tab.title}
              </Button>

              <div className="activeBarLine" />
            </div>
          );
        })}
      </InlineGrid>

      <Divider />

      {children}
    </BlockStack>
  );
}
