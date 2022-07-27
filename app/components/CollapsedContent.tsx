import { useState } from "react";
import { Button, ButtonVariant, Collapse, Paper } from "@mantine/core";
import { IconArrowBigDownLine, IconArrowBigUpLine } from "@tabler/icons";

interface Props {
  children: React.ReactNode;
  buttonText: string;
  variant: ButtonVariant;
  withBorder: boolean;
}

export function CollapsedContent({
  children,
  buttonText,
  variant,
  withBorder,
}: Props) {
  const [opened, setOpened] = useState(false);

  const renderButton = () =>
    opened ? (
      <IconArrowBigUpLine size={16} />
    ) : (
      <IconArrowBigDownLine size={16} />
    );

  return (
    <>
      <Button
        variant={variant}
        onClick={() => setOpened((o) => !o)}
        rightIcon={renderButton()}
      >
        {buttonText}
      </Button>
      <Collapse in={opened}>
        <Paper withBorder={withBorder} radius="md" p="sm" my="md">
          {children}
        </Paper>
      </Collapse>
    </>
  );
}
