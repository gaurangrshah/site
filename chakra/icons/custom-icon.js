import { Box } from "@chakra-ui/react";
import { paths } from "./paths";

export const CustomIcon = ({
  icon = "add",
  size = "1.25rem",
  color = "inherit",
  ...rest
}) => {
  const Icon = ({ color, size, ...rest }) => {
    return (
      <Box
        as='svg'
        viewBox={paths[icon].viewBox}
        width={size}
        height={size}
        fill={color}
        {...rest}
      >
        {/*
        NOTE:  svgs might have multiple paths in order to compose the icon, we'll render each one if we encounter an array
        */}
        {Array.isArray(paths[icon].d) ? (
          paths[icon].d.map((d, i) => <path key={i} d={d} />)
        ) : (
          <path d={paths[icon].d} opacity="0.6"/>
        )}
      </Box>
    );
  };

  return <Icon color={color} size={size} {...rest} />;
};
