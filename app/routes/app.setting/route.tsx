import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { SaveBar, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { BlockStack, Form, Layout, Page } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { authenticate } from "~/shopify.server";
import type { IWidgetSetting } from "~/types";
import {
  DEFAULT_WIDGET_SETTINGS_ERRORS,
  DEFAULT_WIDGET_SETTINGS_STATE,
} from "./constant";
import type { IFieldsChangeParams } from "./types";
import WidgetAppearance from "./widget-appearance";
import WidgetPosition from "./widget-position";
import WidgetText from "./widget-text";
import { validateForm } from "./utils";

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
  const [formErrors, setFormErrors] = useState<IWidgetSetting>(
    DEFAULT_WIDGET_SETTINGS_ERRORS,
  );
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const shopify = useAppBridge();

  const handleFieldsChange = (
    params: IFieldsChangeParams,
    section: "position" | "appearance" | "text",
  ) => {
    !params.isInitValue && setIsDirty(true);

    setFormState((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [params.name as unknown as string]: params.value,
      },
    }));

    setFormErrors((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [params.name as unknown as string]: params.value
          ? ""
          : "This field is required",
      },
    }));
  };

  const handleSubmit = () => {
    const { formErrors, isHasError } = validateForm(formState);

    if (isHasError) {
      shopify.toast.show("Some fields are empty", { isError: true });
    } else {
      shopify.toast.show("Saved setting");
      console.log("Saved setting", formState);
    }

    setFormErrors(formErrors);
    setIsDirty(false);
    shopify.saveBar.hide("my-save-bar");
  };

  const handleDiscardSave = () => {
    setIsDirty(false);
    setFormState(DEFAULT_WIDGET_SETTINGS_STATE);
    shopify.saveBar.hide("my-save-bar");
  };

  useEffect(() => {
    isDirty && shopify.saveBar.show("my-save-bar");
  }, [isDirty, shopify]);

  return (
    <Page>
      <SaveBar id="my-save-bar">
        <button variant="primary" onClick={handleSubmit} />
        <button onClick={handleDiscardSave} />
      </SaveBar>

      <TitleBar title="Widget Setting" />

      <Layout>
        <Layout.Section>
          <Form onSubmit={handleSubmit}>
            <BlockStack gap={"200"}>
              <WidgetPosition
                formState={formState}
                formErrors={formErrors}
                onFieldChange={(params: IFieldsChangeParams) =>
                  handleFieldsChange(params, "position")
                }
              />

              <WidgetAppearance
                formState={formState}
                formErrors={formErrors}
                onFieldChange={(params: IFieldsChangeParams) =>
                  handleFieldsChange(params, "appearance")
                }
              />

              <WidgetText
                formState={formState}
                formErrors={formErrors}
                onFieldChange={(params: IFieldsChangeParams) =>
                  handleFieldsChange(params, "text")
                }
              />
            </BlockStack>
          </Form>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
