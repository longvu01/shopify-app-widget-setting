import type { IWidgetSetting } from "~/types";
import { DEFAULT_WIDGET_SETTINGS_ERRORS } from "../constant";

export const validateForm = (formState: IWidgetSetting) => {
  const formErrors = DEFAULT_WIDGET_SETTINGS_ERRORS;
  let isHasError = false;

  const widgetKeys = Object.keys(formState);

  widgetKeys.forEach((key) => {
    const widgetChildrenKeys = Object.keys(
      formState[key as keyof IWidgetSetting],
    );

    widgetChildrenKeys.forEach((childrenKey) => {
      //@ts-ignore
      const value = formState[key][childrenKey];

      //@ts-ignore
      formErrors[key][childrenKey] = !value ? "This field is required" : "";

      if (!value && !isHasError) {
        isHasError = true;
      }
    });
  });

  return { formErrors, isHasError };
};
