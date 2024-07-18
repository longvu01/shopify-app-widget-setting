import type { IWidgetSetting } from "~/types";

export const DEFAULT_WIDGET_SETTINGS_STATE: IWidgetSetting = {
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
