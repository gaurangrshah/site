import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Section } from "../components/section";
import { beforeBox } from "../chakra/variants";
import { Timeline } from "@/components/timeline";

const Sandbox = () => {
  return (
    <>
      <Section
        bg='transparent'
        zIndex={0}
        _before={beforeBox({})}
        py={24}
        px={16}
      >
        <Hero />
      </Section>
      <Section py={24} px={16}>
        <Intro />
      </Section>
      <Section py={24} px={16}>
        <Timeline />
      </Section>
    </>
  );
};

export default Sandbox;
