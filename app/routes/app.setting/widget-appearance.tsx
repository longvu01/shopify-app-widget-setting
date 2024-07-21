import type { SelectProps } from "@shopify/polaris";
import {
  BlockStack,
  Checkbox,
  Icon,
  InlineGrid,
  Select,
} from "@shopify/polaris";
import { PaintBrushFlatIcon } from "@shopify/polaris-icons";
import { useEffect } from "react";
import CollapsibleCustom from "~/components/CollapsibleCustom";
import TextFieldWithColorPicker from "~/components/formFields/TextFieldWithColorPicker";
import {
  APPEARANCE_LAYOUT_OPTIONS,
  CALENDAR_LAYOUT_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FIRST_DAY_OF_CALENDAR_OPTIONS,
  WIDGET_SETTING_KEYS,
} from "~/constants";
import { useGetCountries } from "~/hooks/useGetCountries";
import type { IWidgetSetting, IWidgetSettingKeys } from "~/types";
import { EBooleanValue } from "~/types";
import type { IFieldsChangeParams } from "./types";

interface IWidgetAppearanceProps {
  formState: IWidgetSetting;
  formErrors: IWidgetSetting;
  onFieldChange: (params: IFieldsChangeParams) => void;
}

export default function WidgetAppearance({
  formState,
  formErrors,
  onFieldChange,
}: IWidgetAppearanceProps) {
  const { countries } = useGetCountries();

  const handleChangeValue = (newValue: string, name: string) => {
    onFieldChange({
      name: name as unknown as IWidgetSettingKeys,
      value: newValue,
    });
  };

  const genCommonFieldProps = (
    fieldName: keyof IWidgetSetting["appearance"],
    options: any[],
  ): Partial<SelectProps> & { options: any[] } => {
    return {
      name: fieldName,
      options: options,
      error: formErrors.appearance[fieldName],
      value: formState.appearance[fieldName],
      onChange: (newValue) =>
        handleChangeValue(newValue, WIDGET_SETTING_KEYS[fieldName]),
    };
  };

  // Init calendarLang value
  useEffect(() => {
    if (!formState.appearance.calendarLang && countries.length > 0) {
      onFieldChange({
        name: WIDGET_SETTING_KEYS.calendarLang as unknown as IWidgetSettingKeys,
        value: countries[0].value,
        isInitValue: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, formState.appearance.calendarLang]);

  return (
    <CollapsibleCustom
      title="Widget appearance"
      titleIcon={<Icon source={PaintBrushFlatIcon} tone="critical" />}
    >
      <BlockStack gap={"200"}>
        <InlineGrid gap={"400"} columns={2}>
          <Select
            label="Layout"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.layout as keyof IWidgetSetting["appearance"],
              APPEARANCE_LAYOUT_OPTIONS,
            )}
          />
          <BlockStack>
            <Select
              label="Calendar layout"
              {...genCommonFieldProps(
                WIDGET_SETTING_KEYS.calendarLayout as keyof IWidgetSetting["appearance"],
                CALENDAR_LAYOUT_OPTIONS,
              )}
            />
            <Checkbox
              name={WIDGET_SETTING_KEYS.alwaysOpen}
              label="Always open the calendar"
              error={formErrors.appearance.alwaysOpen}
              checked={formState.appearance.alwaysOpen === EBooleanValue.TRUE}
              onChange={(newChecked) =>
                onFieldChange({
                  name: WIDGET_SETTING_KEYS.alwaysOpen as unknown as IWidgetSettingKeys,
                  value: newChecked ? EBooleanValue.TRUE : EBooleanValue.FALSE,
                })
              }
            />
          </BlockStack>
        </InlineGrid>

        <InlineGrid gap={"400"} columns={2}>
          <Select
            label="Calendar language"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.calendarLang as keyof IWidgetSetting["appearance"],
              countries,
            )}
          />
          <Select
            label="First day of calendar"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.firstDayCalendar as keyof IWidgetSetting["appearance"],
              FIRST_DAY_OF_CALENDAR_OPTIONS,
            )}
          />
        </InlineGrid>

        <InlineGrid gap={"400"} columns={2}>
          <Select
            label="Date format"
            {...genCommonFieldProps(
              WIDGET_SETTING_KEYS.firstDayCalendar as keyof IWidgetSetting["appearance"],
              DATE_FORMAT_OPTIONS,
            )}
          />

          <TextFieldWithColorPicker
            name={WIDGET_SETTING_KEYS.themeColor}
            label="Theme color"
            error={formErrors.appearance.themeColor}
            value={formState.appearance.themeColor}
            setValue={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.themeColor)
            }
          />
        </InlineGrid>

        <InlineGrid gap={"400"} columns={2}>
          <TextFieldWithColorPicker
            name={WIDGET_SETTING_KEYS.titleColor}
            label="Title color"
            error={formErrors.appearance.titleColor}
            value={formState.appearance.titleColor}
            setValue={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.titleColor)
            }
          />

          <TextFieldWithColorPicker
            name={WIDGET_SETTING_KEYS.requireTextColor}
            label="Required message text color"
            error={formErrors.appearance.requireTextColor}
            value={formState.appearance.requireTextColor}
            setValue={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.requireTextColor)
            }
          />
        </InlineGrid>
      </BlockStack>
    </CollapsibleCustom>
  );
}
