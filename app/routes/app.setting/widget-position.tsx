import type { CheckboxProps } from "@shopify/polaris";
import { BlockStack, Checkbox, Icon } from "@shopify/polaris";
import { IconsFilledIcon } from "@shopify/polaris-icons";
import CollapsibleCustom from "~/components/CollapsibleCustom";
import { WIDGET_SETTING_KEYS } from "~/constants";
import type { IFieldsChangeParams } from "./types";
import type { IWidgetSetting, IWidgetSettingKeys } from "~/types";
import { EBooleanValue } from "~/types";
import { useCallback } from "react";

interface IWidgetPositionProps {
  formState: IWidgetSetting;
  formErrors: IWidgetSetting;
  onFieldChange: (params: IFieldsChangeParams) => void;
}

export default function WidgetPosition({
  formState,
  formErrors,
  onFieldChange,
}: IWidgetPositionProps) {
  const handleChangeCheckBox = (newChecked: boolean, name: string) => {
    onFieldChange({
      name: name as unknown as IWidgetSettingKeys,
      value: newChecked ? EBooleanValue.TRUE : EBooleanValue.FALSE,
    });
  };

  const genCommonFieldProps = useCallback(
    (fieldName: keyof IWidgetSetting["position"]): Partial<CheckboxProps> => {
      return {
        name: fieldName,
        error: formErrors.position[fieldName],
        checked: formState.position[fieldName] === EBooleanValue.TRUE,
        onChange: (newChecked) =>
          handleChangeCheckBox(newChecked, WIDGET_SETTING_KEYS[fieldName]),
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formErrors.position, formState.position],
  );

  return (
    <CollapsibleCustom
      title="Widget position"
      titleIcon={<Icon source={IconsFilledIcon} tone="critical" />}
    >
      <BlockStack>
        <Checkbox
          label="Show the calendar at the product page"
          {...genCommonFieldProps(
            WIDGET_SETTING_KEYS.showCalendar as keyof IWidgetSetting["position"],
          )}
        />

        <Checkbox
          label="Require the delivery date before checkout"
          {...genCommonFieldProps(
            WIDGET_SETTING_KEYS.requireDeliveryDate as keyof IWidgetSetting["position"],
          )}
        />
      </BlockStack>
    </CollapsibleCustom>
  );
}
