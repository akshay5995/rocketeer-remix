import {
  CopyButton as CopyButtonStyled,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { Copy, Check } from "tabler-icons-react";

interface Props {
  content: string;
}

export function CopyButton({ content }: Props) {
  return (
    <CopyButtonStyled value={content}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButtonStyled>
  );
}
