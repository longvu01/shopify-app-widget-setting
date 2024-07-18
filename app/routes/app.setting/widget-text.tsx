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
  onFieldChange: (params: IFieldsChangeParams) => void;
}

export default function WidgetText({
  formState,
  onFieldChange,
}: IWidgetTextProps) {
  const [currentTab, setCurrentTab] = useState<string>("0");

  const handleChangeValue = (newValue: string, name: string) => {
    onFieldChange({
      name: name as unknown as IWidgetSettingKeys,
      value: newValue,
    });
  };

  const widgetTextTabs: ITab[] = [
    {
      key: "0",
      title: "Delivery Date",
      content: (
        <BlockStack gap={"200"}>
          <TextField
            name={WIDGET_SETTING_KEYS.deliveryDateMainTitle}
            label="Title"
            autoComplete="off"
            value={formState.text.deliveryDateMainTitle}
            onChange={(newValue) =>
              handleChangeValue(
                newValue,
                WIDGET_SETTING_KEYS.deliveryDateMainTitle,
              )
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.deliveryDateLabel}
            label="Delivery date label"
            autoComplete="off"
            value={formState.text.deliveryDateLabel}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.deliveryDateLabel)
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.deliveryDateTitle}
            label="Delivery date title"
            autoComplete="off"
          />

          <TextField
            name={WIDGET_SETTING_KEYS.deliveryTimeTitle}
            label="Delivery time title"
            autoComplete="off"
            value={formState.text.deliveryTimeTitle}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.deliveryTimeTitle)
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.deliveryDateRequireMsgTxt}
            label="Require message text"
            autoComplete="off"
            value={formState.text.deliveryDateRequireMsgTxt}
            onChange={(newValue) =>
              handleChangeValue(
                newValue,
                WIDGET_SETTING_KEYS.deliveryDateRequireMsgTxt,
              )
            }
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
            name={WIDGET_SETTING_KEYS.storePickupLabel}
            label="Store pickup label"
            autoComplete="off"
            value={formState.text.storePickupLabel}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.storePickupLabel)
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.requireChooseLocationText}
            label="Message text to require buyers to choose a pickup location"
            autoComplete="off"
            value={formState.text.requireChooseLocationText}
            onChange={(newValue) =>
              handleChangeValue(
                newValue,
                WIDGET_SETTING_KEYS.requireChooseLocationText,
              )
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.storePickupDateTitle}
            label="Store pickup date title"
            autoComplete="off"
            value={formState.text.storePickupDateTitle}
            onChange={(newValue) =>
              handleChangeValue(
                newValue,
                WIDGET_SETTING_KEYS.storePickupDateTitle,
              )
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.storePickupTimeTitle}
            label="Store pickup time title"
            autoComplete="off"
            value={formState.text.storePickupTimeTitle}
            onChange={(newValue) =>
              handleChangeValue(
                newValue,
                WIDGET_SETTING_KEYS.storePickupTimeTitle,
              )
            }
          />

          <TextField
            name={WIDGET_SETTING_KEYS.storePickupRequireMsgTxt}
            label="Require message text"
            autoComplete="off"
            value={formState.text.storePickupRequireMsgTxt}
            onChange={(newValue) =>
              handleChangeValue(
                newValue,
                WIDGET_SETTING_KEYS.storePickupRequireMsgTxt,
              )
            }
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
