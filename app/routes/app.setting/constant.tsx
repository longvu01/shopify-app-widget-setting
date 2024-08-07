import {
  APPEARANCE_LAYOUT_OPTIONS,
  CALENDAR_LAYOUT_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FIRST_DAY_OF_CALENDAR_OPTIONS,
} from "~/constants";
import type { IWidgetSetting } from "~/types";
import { hex2Hsb } from "~/utils";

const randomHex =
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

export const initColor = hex2Hsb(randomHex);

export const DEFAULT_WIDGET_SETTINGS_STATE: IWidgetSetting = {
  position: {
    showCalendar: "",
    requireDeliveryDate: "",
  },
  appearance: {
    layout: APPEARANCE_LAYOUT_OPTIONS[0].value,
    calendarLayout: CALENDAR_LAYOUT_OPTIONS[0].value,
    alwaysOpen: "",

    calendarLang: "",
    firstDayCalendar: FIRST_DAY_OF_CALENDAR_OPTIONS[0].value,

    dateFormat: DATE_FORMAT_OPTIONS[0].value,
    themeColor: randomHex,

    titleColor: randomHex,
    requireTextColor: randomHex,
  },
  text: {
    deliveryDateMainTitle: "",
    deliveryDateLabel: "",
    deliveryDateTitle: "",
    deliveryTimeTitle: "",
    deliveryDateRequireMsgTxt: "",

    storePickupLabel: "",
    requireChooseLocationText: "",
    storePickupDateTitle: "",
    storePickupTimeTitle: "",
    storePickupRequireMsgTxt: "",
  },
};

export const WIDGET_SETTINGS_REQUIRED_FIELDS = {
  position: {
    showCalendar: true,
    requireDeliveryDate: true,
  },
  appearance: {
    layout: true,
    calendarLayout: true,
    alwaysOpen: true,

    calendarLang: true,
    firstDayCalendar: true,

    dateFormat: true,
    themeColor: true,

    titleColor: true,
    requireTextColor: true,
  },
  text: {
    deliveryDateMainTitle: true,
    deliveryDateLabel: true,
    deliveryDateTitle: true,
    deliveryTimeTitle: true,
    deliveryDateRequireMsgTxt: true,

    storePickupLabel: true,
    requireChooseLocationText: true,
    storePickupDateTitle: true,
    storePickupTimeTitle: true,
    storePickupRequireMsgTxt: true,
  },
};

export const DEFAULT_WIDGET_SETTINGS_ERRORS = {
  position: {
    showCalendar: "",
    requireDeliveryDate: "",
  },
  appearance: {
    layout: "",
    calendarLayout: "",
    alwaysOpen: "",

    calendarLang: "",
    firstDayCalendar: "",

    dateFormat: "",
    themeColor: "",

    titleColor: "",
    requireTextColor: "",
  },
  text: {
    deliveryDateMainTitle: "",
    deliveryDateLabel: "",
    deliveryDateTitle: "",
    deliveryTimeTitle: "",
    deliveryDateRequireMsgTxt: "",

    storePickupLabel: "",
    requireChooseLocationText: "",
    storePickupDateTitle: "",
    storePickupTimeTitle: "",
    storePickupRequireMsgTxt: "",
  },
};
