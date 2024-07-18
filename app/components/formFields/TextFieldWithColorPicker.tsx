import type { HSBAColor } from "@shopify/polaris";
import { ColorPicker, Popover, TextField, hsbToHex } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { checkIsHexColor, hex2Hsb } from "~/utils";
import "./index.css";

const randomHex =
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

const initColor = hex2Hsb(randomHex);

interface ITextFieldWithColorPickerProps {
  name: string;
  label: string;
  value: string;
  setValue: (color: string) => void;
}

export default function TextFieldWithColorPicker({
  name,
  label,
  value,
  setValue,
}: ITextFieldWithColorPickerProps) {
  const [popoverActive, setPopoverActive] = useState<boolean>(false);
  const [color, setColor] = useState(initColor);
  const [error, setError] = useState<string>("");

  const handleOpenColorPicker = () => {
    setPopoverActive(true);
  };

  const handleChangeColor = (newColor: HSBAColor) => {
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
    const initHexColor = hsbToHex(initColor);
    setValue(initHexColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="textFieldWithColorPicker">
      <TextField
        name={name}
        label={label}
        autoComplete="off"
        error={error}
        value={value}
        onChange={handleChangeTextField}
      />

      <Popover
        active={popoverActive}
        sectioned={true}
        activator={
          <div
            className="openColorPickerButton"
            style={{
              backgroundColor: hsbToHex(color),
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
              <ColorPicker color={color} onChange={handleChangeColor} />
            </div>
          </Popover.Section>
        </Popover.Pane>
      </Popover>
    </div>
  );
}
