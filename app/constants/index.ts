import type { ISelectData, IWidgetSettingKeys } from "~/types";

export const WIDGET_SETTING_KEYS: IWidgetSettingKeys = {
  showCalendar: "showCalendar",
  requireDeliveryDate: "requireDeliveryDate",
  alwaysOpen: "alwaysOpen",
  //
  layout: "layout",
  calendarLayout: "calendarLayout",

  calendarLang: "calendarLang",
  firstDayCalendar: "firstDayCalendar",

  dateFormat: "dateFormat",
  themeColor: "themeColor",

  titleColor: "titleColor",
  requireTextColor: "requireTextColor",
  //
  deliveryDateMainTitle: "deliveryDateMainTitle",
  deliveryDateLabel: "deliveryDateLabel",
  deliveryDateTitle: "deliveryDateTitle",
  deliveryTimeTitle: "deliveryTimeTitle",
  deliveryDateRequireMsgTxt: "deliveryDateRequireMsgTxt",

  storePickupLabel: "storePickupLabel",
  requireChooseLocationText: "requireChooseLocationText",
  storePickupDateTitle: "storePickupDateTitle",
  storePickupTimeTitle: "storePickupTimeTitle",
  storePickupRequireMsgTxt: "storePickupRequireMsgTxt",
};

// Select options
export const APPEARANCE_LAYOUT_OPTIONS: ISelectData[] = [
  { label: "Default", value: "default" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
];

export const CALENDAR_LAYOUT_OPTIONS: ISelectData[] = [
  { label: "Calendar", value: "calendar" },
  { label: "Date List", value: "date_list" },
];

export const FIRST_DAY_OF_CALENDAR_OPTIONS: ISelectData[] = [
  { label: "Monday", value: "mon" },
  { label: "Tuesday", value: "tue" },
  { label: "Wednesday", value: "wed" },
  { label: "Thursday", value: "thu" },
  { label: "Friday", value: "fri" },
  { label: "Saturday", value: "sat" },
  { label: "Sunday", value: "sun" },
];

const dateObj = new Date();
const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0"); // months from 1-12
const day = dateObj.getUTCDate().toString().padStart(2, "0");
const year = dateObj.getUTCFullYear().toString().slice(-2);

const DATE_FORMAT_1 = day + "/" + month + "/" + year;
const DATE_FORMAT_2 = day + "-" + month + "-" + year;

export const DATE_FORMAT_OPTIONS: ISelectData[] = [
  { label: DATE_FORMAT_1, value: DATE_FORMAT_1 },
  { label: DATE_FORMAT_2, value: DATE_FORMAT_2 },
];
