import { Box, chakra } from "@chakra-ui/react";

import { ScaffoldProvider } from "@/chakra/contexts/scaffold-context";
import { useScaffold } from "@/chakra/contexts/scaffold-context";
function Scaffold({ children }) {
  const {
    showHeader,
    showFooter,
    header,
    footer,
    scaffold,
    properties,
    theme,
  } = useScaffold();

  return (
    <ScaffoldProvider>
      <Scaffold.PageGrid {...{ theme }}>
        {showHeader && header && (
          <Scaffold.TopBar {...{ theme }}>
            <header.component {...header.props} />
          </Scaffold.TopBar>
        )}
        <Scaffold.Main {...{ theme }}>
          {children}
          {typeof window !== "undefined" && properties?.length
            ? properties.map((key) => {
                const Component = scaffold[key].Component;
                return (
                  <Component key={scaffold[key].id} {...scaffold[key].props} />
                );
              })
            : ""}
        </Scaffold.Main>
        {showFooter && footer && (
          <Scaffold.BottomBar {...{ theme }}>
            <footer.component {...footer.props} />
          </Scaffold.BottomBar>
        )}
      </Scaffold.PageGrid>
    </ScaffoldProvider>
  );
}

function PageGrid({ theme = "default", children, ...rest }) {
  return (
    <chakra.div {...pagegrid[theme]} {...rest}>
      {children}
    </chakra.div>
  );
}

function TopBar({ theme = "default", children, ...rest }) {
  return (
    <Box {...topbar[theme]} {...rest}>
      {children}
    </Box>
  );
}

function MainContent({ theme = "default", children, ...rest }) {
  return (
    <chakra.main {...main[theme]} {...rest}>
      {children}
    </chakra.main>
  );
}

function BottomBar({ theme = "default", children, ...rest }) {
  return (
    <Box {...bottombar[theme]} {...rest}>
      {children}
    </Box>
  );
}

Scaffold.PageGrid = PageGrid;
Scaffold.TopBar = TopBar;
Scaffold.Main = MainContent;
Scaffold.BottomBar = BottomBar;

export default Scaffold;

export const topbar = {
  default: {
    w: "full",
  },
};

export const pagegrid = {
  default: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
  },
};

export const main = {
  default: {
    position: "relative",
    w: "full",
    maxW: "full",
    flex: 1,
  },
};

export const bottombar = {
  default: {
    w: "full",
    flex: 0,
    mb: 0,
  },
};
