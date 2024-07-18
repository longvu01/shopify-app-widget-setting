import { BlockStack, Checkbox, Icon } from "@shopify/polaris";
import { IconsFilledIcon } from "@shopify/polaris-icons";
import CollapsibleCustom from "~/components/CollapsibleCustom";
import { WIDGET_SETTING_KEYS } from "~/constants";
import type { IFieldsChangeParams } from "./types";
import type { IWidgetSetting, IWidgetSettingKeys } from "~/types";
import { EBooleanValue } from "~/types";

interface IWidgetPositionProps {
  formState: IWidgetSetting;
  onFieldChange: (params: IFieldsChangeParams) => void;
}

export default function WidgetPosition({
  formState,
  onFieldChange,
}: IWidgetPositionProps) {
  const handleChangeCheckBox = (newChecked: boolean, name: string) => {
    onFieldChange({
      name: name as unknown as IWidgetSettingKeys,
      value: newChecked ? EBooleanValue.TRUE : EBooleanValue.FALSE,
    });
  };

  return (
    <CollapsibleCustom
      title="Widget position"
      titleIcon={<Icon source={IconsFilledIcon} tone="critical" />}
    >
      <BlockStack>
        <Checkbox
          name={WIDGET_SETTING_KEYS.showCalendar}
          label="Show the calendar at the product page"
          checked={formState.position.showCalendar === EBooleanValue.TRUE}
          onChange={(newChecked) =>
            handleChangeCheckBox(newChecked, WIDGET_SETTING_KEYS.showCalendar)
          }
        />

        <Checkbox
          name={WIDGET_SETTING_KEYS.requireDeliveryDate}
          label="Require the delivery date before checkout"
          checked={
            formState.position.requireDeliveryDate === EBooleanValue.TRUE
          }
          onChange={(newChecked) =>
            handleChangeCheckBox(
              newChecked,
              WIDGET_SETTING_KEYS.requireDeliveryDate,
            )
          }
        />
      </BlockStack>
    </CollapsibleCustom>
  );
}
