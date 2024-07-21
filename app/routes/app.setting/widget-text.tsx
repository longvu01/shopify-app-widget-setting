import type { TextFieldProps } from "@shopify/polaris";
import { BlockStack, Icon, TextField } from "@shopify/polaris";
import { TextIcon } from "@shopify/polaris-icons";
import { useState } from "react";
import CollapsibleCustom from "~/components/CollapsibleCustom";
import CustomTabs from "~/components/CustomTabs";
import { WIDGET_SETTING_KEYS } from "~/constants";
import type { ITab, IWidgetSetting, IWidgetSettingKeys } from "~/types";
import type { IFieldsChangeParams } from "./types";

interface IWidgetTextProps {
  formState: IWidgetSetting;
  formErrors: IWidgetSetting;
  onFieldChange: (params: IFieldsChangeParams) => void;
}

export default function WidgetText({
  formState,
  formErrors,
  onFieldChange,
}: IWidgetTextProps) {
  const [currentTab, setCurrentTab] = useState<string>("0");

  const handleChangeValue = (newValue: string, name: string) => {
    onFieldChange({
      name: name as unknown as IWidgetSettingKeys,
      value: newValue,
    });
  };

  const genCommonFieldProps = (
    fieldName: keyof IWidgetSetting["text"],
  ): Partial<TextFieldProps> & { autoComplete: string } => {
    return {
      name: fieldName,
      autoComplete: "off",
      error: formErrors.text[fieldName],
      value: formState.text[fieldName],
      onChange: (newValue) =>
        handleChangeValue(newValue, WIDGET_SETTING_KEYS[fieldName]),
    };
  };

  const widgetTextTabs: ITab[] = [
    {
      key: "0",
      title: "Delivery Date",
      content: (
        <BlockStack gap={"200"}>
          <TextField
            label="Title"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.deliveryDateMainTitle as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Delivery date label"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.deliveryDateLabel as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Delivery date title"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.deliveryDateTitle as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Delivery time title"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.deliveryTimeTitle as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Require message text"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.deliveryDateRequireMsgTxt as keyof IWidgetSetting["text"],
            )}
          />
        </BlockStack>
      ),
    },
    {
      key: "1",
      title: "Store Pickup",
      content: (
        <BlockStack gap={"200"}>
          <TextField
            label="Store pickup label"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.storePickupLabel as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Message text to require buyers to choose a pickup location"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.requireChooseLocationText as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Store pickup date title"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.storePickupDateTitle as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Store pickup time title"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.storePickupTimeTitle as keyof IWidgetSetting["text"],
            )}
          />

          <TextField
            label="Require message text"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.storePickupRequireMsgTxt as keyof IWidgetSetting["text"],
            )}
          />
        </BlockStack>
      ),
    },
  ];

  return (
    <CollapsibleCustom
      title="Widget text"
      titleIcon={<Icon source={TextIcon} tone="critical" />}
    >
      <CustomTabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabs={widgetTextTabs}
      >
        {widgetTextTabs[+currentTab].content}
      </CustomTabs>
    </CollapsibleCustom>
  );
}
