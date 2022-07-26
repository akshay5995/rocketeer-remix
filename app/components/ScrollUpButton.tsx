import { Affix, Transition, Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons";

export function ScrollUpButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 60, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<IconArrowUp size={16} />}
            style={transitionStyles}
            radius="md"
            compact
            onClick={() => scrollTo({ y: 0 })}
            variant="light"
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
