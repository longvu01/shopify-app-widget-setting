import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  BlockStack,
  Checkbox,
  Icon,
  InlineGrid,
  Layout,
  Page,
  Select,
  TextField,
} from "@shopify/polaris";
import {
  IconsFilledIcon,
  PaintBrushFlatIcon,
  TextIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import CollapsibleCustom from "~/components/CollapsibleCustom";
import CustomTabs from "~/components/CustomTabs";
import type { ITab } from "~/types";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return json({});
};

export default function Index() {
  const [currentTab, setCurrentTab] = useState<string>("0");

  const widgetTextTabs: ITab[] = [
    {
      key: "0",
      title: "Delivery Date",
      content: (
        <BlockStack gap={"200"}>
          <TextField label="Title" autoComplete="off" />

          <TextField label="Delivery date label" autoComplete="off" />

          <TextField label="Delivery date title" autoComplete="off" />

          <TextField label="Delivery time title" autoComplete="off" />

          <TextField label="Require message text" autoComplete="off" />
        </BlockStack>
      ),
    },
    {
      key: "1",
      title: "Store Pickup",
      content: (
        <BlockStack gap={"200"}>
          <TextField label="Store pickup label" autoComplete="off" />

          <TextField
            label="Message text to require buyers to choose a pickup location"
            autoComplete="off"
          />

          <TextField label="Store pickup date title" autoComplete="off" />

          <TextField label="Store pickup time title" autoComplete="off" />

          <TextField label="Require message text" autoComplete="off" />
        </BlockStack>
      ),
    },
  ];

  return (
    <Page>
      <TitleBar title="Widget Setting" />

      <Layout>
        <Layout.Section>
          <BlockStack gap={"200"}>
            <CollapsibleCustom
              title="Widget position"
              titleIcon={<Icon source={IconsFilledIcon} tone="base" />}
            >
              <BlockStack>
                <Checkbox
                  label="Show the calendar at the product page"
                  checked={true}
                  // onChange={handleChange}
                />

                <Checkbox
                  label="Require the delivery date before checkout"
                  checked={true}
                  // onChange={handleChange}
                />
              </BlockStack>
            </CollapsibleCustom>

            <CollapsibleCustom
              title="Widget appearance"
              titleIcon={<Icon source={PaintBrushFlatIcon} tone="base" />}
            >
              <BlockStack gap={"200"}>
                <InlineGrid gap={"400"} columns={2}>
                  <Select label="Layout" options={[]} />
                  <Select label="Calendar layout" options={[]} />
                </InlineGrid>

                <InlineGrid gap={"400"} columns={2}>
                  <Select label="Calendar language" options={[]} />
                  <Select label="First day of calendar" options={[]} />
                </InlineGrid>

                <InlineGrid gap={"400"} columns={2}>
                  <Select label="Layout" options={[]} />
                  <Select label="Calendar layout" options={[]} />
                </InlineGrid>

                <InlineGrid gap={"400"} columns={2}>
                  <Select label="Date format" options={[]} />
                  <Select label="Theme color" options={[]} />
                </InlineGrid>

                <InlineGrid gap={"400"} columns={2}>
                  <Select label="Title color" options={[]} />
                  <Select label="Required message text color" options={[]} />
                </InlineGrid>
              </BlockStack>
            </CollapsibleCustom>

            <CollapsibleCustom
              title="Widget text"
              titleIcon={<Icon source={TextIcon} tone="base" />}
            >
              <CustomTabs
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                tabs={widgetTextTabs}
              >
                {widgetTextTabs[+currentTab].content}
              </CustomTabs>
            </CollapsibleCustom>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
