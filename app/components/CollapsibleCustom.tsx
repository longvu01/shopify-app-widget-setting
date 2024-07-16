import { Button, Card, Collapsible, InlineStack, Text } from "@shopify/polaris";
import { CaretDownIcon, CaretUpIcon } from "@shopify/polaris-icons";
import type { ReactNode } from "react";
import { useState } from "react";

interface ICollapsibleCustomProps {
  title: string;
  titleIcon: ReactNode;
  children: ReactNode;
}

export default function CollapsibleCustom({
  title,
  titleIcon,
  children,
}: ICollapsibleCustomProps) {
  const [open, setOpen] = useState<boolean>(true);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Card>
      <InlineStack align="space-between">
        <InlineStack gap="200">
          <span style={{ width: 20, marginLeft: -2 }}>{titleIcon}</span>

          <Text variant="headingMd" as="h3">
            {title}
          </Text>
        </InlineStack>

        <Button
          variant="monochromePlain"
          icon={open ? CaretUpIcon : CaretDownIcon}
          size="large"
          onClick={handleToggle}
        />
      </InlineStack>
      <Collapsible
        open={open}
        id="basic-collapsible"
        transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        {children}
      </Collapsible>
    </Card>
  );
}
