import {
  BlockStack,
  Checkbox,
  Icon,
  InlineGrid,
  Select,
} from "@shopify/polaris";
import { PaintBrushFlatIcon } from "@shopify/polaris-icons";
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
  onFieldChange: (params: IFieldsChangeParams) => void;
}

export default function WidgetAppearance({
  formState,
  onFieldChange,
}: IWidgetAppearanceProps) {
  const { countries } = useGetCountries();

  const handleChangeValue = (newValue: string, name: string) => {
    onFieldChange({
      name: name as unknown as IWidgetSettingKeys,
      value: newValue,
    });
  };

  return (
    <CollapsibleCustom
      title="Widget appearance"
      titleIcon={<Icon source={PaintBrushFlatIcon} tone="critical" />}
    >
      <BlockStack gap={"200"}>
        <InlineGrid gap={"400"} columns={2}>
          <Select
            name={WIDGET_SETTING_KEYS.layout}
            label="Layout"
            options={APPEARANCE_LAYOUT_OPTIONS}
            value={formState.appearance.layout}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.layout)
            }
          />
          <BlockStack>
            <Select
              name={WIDGET_SETTING_KEYS.calendarLayout}
              label="Calendar layout"
              options={CALENDAR_LAYOUT_OPTIONS}
              value={formState.appearance.calendarLayout}
              onChange={(newValue) =>
                handleChangeValue(newValue, WIDGET_SETTING_KEYS.calendarLayout)
              }
            />
            <Checkbox
              name={WIDGET_SETTING_KEYS.alwaysOpen}
              label="Always open the calendar"
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
            name={WIDGET_SETTING_KEYS.calendarLang}
            label="Calendar language"
            options={countries}
            value={formState.appearance.calendarLang}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.calendarLang)
            }
          />
          <Select
            name={WIDGET_SETTING_KEYS.firstDayCalendar}
            label="First day of calendar"
            options={FIRST_DAY_OF_CALENDAR_OPTIONS}
            value={formState.appearance.firstDayCalendar}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.firstDayCalendar)
            }
          />
        </InlineGrid>

        <InlineGrid gap={"400"} columns={2}>
          <Select
            name={WIDGET_SETTING_KEYS.dateFormat}
            label="Date format"
            options={DATE_FORMAT_OPTIONS}
            value={formState.appearance.dateFormat}
            onChange={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.dateFormat)
            }
          />

          <TextFieldWithColorPicker
            name={WIDGET_SETTING_KEYS.themeColor}
            label="Theme color"
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
            value={formState.appearance.titleColor}
            setValue={(newValue) =>
              handleChangeValue(newValue, WIDGET_SETTING_KEYS.titleColor)
            }
          />

          <TextFieldWithColorPicker
            name={WIDGET_SETTING_KEYS.requireTextColor}
            label="Required message text color"
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
