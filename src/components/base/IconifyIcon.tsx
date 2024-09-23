import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';

interface IconifyProps extends BoxProps {
  icon: IconProps['icon'];
  width?: string | number; // memastikan tipe yang sesuai
}

const IconifyIcon = ({ icon, width = 20, sx, ...rest }: IconifyProps) => {
  const baseStyles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof width === 'number' ? `${width}px` : width,
    flexShrink: 0,
    display: 'inline-flex',
  };

  return (
    <Box component="span" sx={{ ...baseStyles, ...sx }} {...rest}>
      <Icon icon={icon} width={width} height={width} />
    </Box>
  );
};

export default IconifyIcon;
