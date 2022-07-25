import { Affix, Transition, Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowNarrowUp } from "tabler-icons-react";

export function ScrollUp() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 60, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<ArrowNarrowUp size={16} />}
            style={transitionStyles}
            radius="md"
            compact
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
