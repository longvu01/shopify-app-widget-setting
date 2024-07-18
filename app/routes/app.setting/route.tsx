import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { TitleBar } from "@shopify/app-bridge-react";
import { BlockStack, Form, Layout, Page } from "@shopify/polaris";
import { useState } from "react";
import { authenticate } from "~/shopify.server";
import type { IWidgetSetting } from "~/types";
import { DEFAULT_WIDGET_SETTINGS_STATE } from "./constant";
import type { IFieldsChangeParams } from "./types";
import WidgetAppearance from "./widget-appearance";
import WidgetPosition from "./widget-position";
import WidgetText from "./widget-text";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return json({});
};

export default function Setting() {
  const [formState, setFormState] = useState<IWidgetSetting>(
    DEFAULT_WIDGET_SETTINGS_STATE,
  );

  const handleFieldsChange = (
    params: IFieldsChangeParams,
    section: "position" | "appearance" | "text",
  ) => {
    setFormState((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [params.name as unknown as string]: params.value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("handleSubmit", formState);
  };

  return (
    <Page>
      <TitleBar title="Widget Setting" />

      <Layout>
        <Layout.Section>
          <Form onSubmit={handleSubmit}>
            <BlockStack gap={"200"}>
              <WidgetPosition
                formState={formState}
                onFieldChange={(params: IFieldsChangeParams) =>
                  handleFieldsChange(params, "position")
                }
              />

              <WidgetAppearance
                formState={formState}
                onFieldChange={(params: IFieldsChangeParams) =>
                  handleFieldsChange(params, "appearance")
                }
              />

              <WidgetText
                formState={formState}
                onFieldChange={(params: IFieldsChangeParams) =>
                  handleFieldsChange(params, "text")
                }
              />
            </BlockStack>
            <button type="submit">Save</button>
          </Form>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
