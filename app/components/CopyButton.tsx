import {
  CopyButton as CopyButtonStyled,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons";

interface Props {
  content: string;
}

export function CopyButton({ content }: Props) {
  return (
    <CopyButtonStyled value={content}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButtonStyled>
  );
}
