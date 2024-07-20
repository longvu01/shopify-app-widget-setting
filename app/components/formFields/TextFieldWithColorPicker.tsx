import type { HSBAColor, TextFieldProps } from "@shopify/polaris";
import { ColorPicker, Popover, TextField, hsbToHex } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { checkIsHexColor, hex2Hsb } from "~/utils";
import "./index.css";
import { initColor } from "~/routes/app.setting/constant";

type ITextFieldWithColorPickerProps = {
  setValue: (color: string) => void;
} & Omit<TextFieldProps, "autoComplete">;

export default function TextFieldWithColorPicker(
  props: ITextFieldWithColorPickerProps,
) {
  const { setValue, ...restProps } = props;

  const [popoverActive, setPopoverActive] = useState<boolean>(false);
  const [color, setColor] = useState<HSBAColor>();
  const [error, setError] = useState<string>("");

  const handleOpenColorPicker = () => {
    setPopoverActive(true);
  };

  const handleChangeColor = (newColor: HSBAColor) => {
    setError("");
    setColor(newColor);
    const colorHex = hsbToHex(newColor);
    setValue(colorHex);
  };

  const handleChangeTextField = (newValue: string) => {
    const isHexColor = checkIsHexColor(newValue);

    if (isHexColor) {
      setError("");

      const hsbColor = hex2Hsb(newValue);

      setColor(hsbColor);
    } else {
      setError("Invalid hex color");
    }

    setValue(newValue);
  };

  useEffect(() => {
    if (!restProps.value) return;

    const hsbColor = hex2Hsb(restProps.value);

    setColor(hsbColor);
  }, [restProps.value]);

  return (
    <div className="textFieldWithColorPicker">
      <TextField
        autoComplete="off"
        error={error}
        onChange={handleChangeTextField}
        {...restProps}
      />

      <Popover
        active={popoverActive}
        sectioned={true}
        activator={
          <div
            className="openColorPickerButton"
            style={{
              backgroundColor: hsbToHex(color ?? initColor),
            }}
            onClick={handleOpenColorPicker}
          />
        }
        onClose={() => {
          setPopoverActive(false);
        }}
      >
        <Popover.Pane fixed>
          <Popover.Section>
            <div style={{ width: "200px", height: "200px" }}>
              <ColorPicker
                color={color ?? initColor}
                onChange={handleChangeColor}
              />
            </div>
          </Popover.Section>
        </Popover.Pane>
      </Popover>
    </div>
  );
}
