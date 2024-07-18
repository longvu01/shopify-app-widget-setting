import type { ReactNode } from "react";

// Selects
export interface ISelectData {
  label: string;
  value: string;
}

// Tabs
export interface ITab {
  key: string;
  title: string;
  content: ReactNode;
}

// Widget Setting
export interface IWidgetSettingPosition {
  showCalendar: string;
  requireDeliveryDate: string;
}

export interface IWidgetSettingApplication {
  layout: string;
  calendarLayout: string;
  alwaysOpen: string;

  calendarLang: string;
  firstDayCalendar: string;

  dateFormat: string;
  themeColor: string;

  titleColor: string;
  requireTextColor: string;
}

export interface IWidgetSettingTextDeliveryDate {
  deliveryDateMainTitle: string;
  deliveryDateLabel: string;
  deliveryDateTitle: string;
  deliveryTimeTitle: string;
  deliveryDateRequireMsgTxt: string;
}
export interface IWidgetSettingTextStorePickup {
  storePickupLabel: string;
  requireChooseLocationText: string;
  storePickupDateTitle: string;
  storePickupTimeTitle: string;
  storePickupRequireMsgTxt: string;
}

export interface IWidgetSetting {
  position: IWidgetSettingPosition;
  appearance: IWidgetSettingApplication;
  text: {
    deliveryDateMainTitle: string;
    deliveryDateLabel: string;
    deliveryDateTitle: string;
    deliveryTimeTitle: string;
    deliveryDateRequireMsgTxt: string;
    //
    storePickupLabel: string;
    requireChooseLocationText: string;
    storePickupDateTitle: string;
    storePickupTimeTitle: string;
    storePickupRequireMsgTxt: string;
  };
}

export interface IWidgetSettingKeys
  extends IWidgetSettingPosition,
    IWidgetSettingApplication,
    IWidgetSettingTextDeliveryDate,
    IWidgetSettingTextStorePickup {}

// Enums
export enum EBooleanValue {
  TRUE = "1",
  FALSE = "0",
}
