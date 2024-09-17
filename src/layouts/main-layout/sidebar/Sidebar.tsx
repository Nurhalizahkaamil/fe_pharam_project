import { Drawer, List, Typography } from '@mui/material';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import SimpleBar from 'simplebar-react';

interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
}

const Sidebar = ({ drawerWidth }: SidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: {
            xs: drawerWidth.sm,
            lg: drawerWidth.md,
            xl: drawerWidth.lg,
          },
        },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 2,
        py: 3.5,
        overflow: 'hidden',
        width: {
          xs: drawerWidth.sm,
          lg: drawerWidth.md,
          xl: drawerWidth.lg,
        },
      }}
    >
      <Typography
        variant="h1" // Ukuran teks
        sx={{
          fontWeight: 'bold', // Cetak tebal
          color: 'primary.main', // Warna teks (ubah sesuai kebutuhan)
          px: 3, // Padding horizontal
          mb: 4,
          mt: 3,
        }}
      >
        System Inventory
      </Typography>

      <SimpleBar style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {menuLinks.map((menu) => (
            <MenuListItem key={menu.id} menuItem={menu} />
          ))}
        </List>
      </SimpleBar>
    </Drawer>
  );
};

export default Sidebar;
