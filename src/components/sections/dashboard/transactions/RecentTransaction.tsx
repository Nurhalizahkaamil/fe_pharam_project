import { Box, Stack, Typography } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';

/* ---------------------------- Card Data ----------------------------- */
interface DataCard {
  title: string;
  value: string;
  subtitle: string;
  backgroundColor: string;
}

const cardData: DataCard[] = [
  {
    title: 'Product Entry',
    value: '9460.00',
    subtitle: 'Today',
    backgroundColor: '#DDF4F8',
  },
  {
    title: 'Outbound Product',
    value: '9460.00',
    subtitle: 'Today',
    backgroundColor: '#DDF4F8',
  },
  {
    title: 'Available Stock',
    value: '9460.00',
    subtitle: 'Today',
    backgroundColor: '#DDF4F8',
  },
  {
    title: 'Supplier Data',
    value: '9460.00',
    subtitle: 'Today',
    backgroundColor: '#DDF4F8',
  },
  {
    title: 'Exp Product Data',
    value: '9460.00',
    subtitle: 'Today',
    backgroundColor: '#DDF4F8',
  },
];

const DashboardCards = () => {
  return (
    <Fragment>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 3,
          textAlign: 'left',
        }}
      >
        Overview
      </Typography>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="left"
        flexWrap="wrap"
        sx={{
          rowGap: 3,
          columnGap: 2.5,
          width: '100%',
        }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: card.backgroundColor,
              padding: 3,
              borderRadius: 2,
              boxShadow: '#A0CCD6',
              minWidth: 200,
              textAlign: 'center',
              flex: '1 1 220px', // Membuat card responsif dengan lebar minimum
              maxWidth: 'calc(33.333% - 16px)', // Tiga card per baris pada layar besar
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
              {card.title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 2 }}>
              {card.value}
            </Typography>
            <Typography variant="caption" sx={{ color: 'gray' }}>
              {card.subtitle}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Fragment>
  );
};

export default DashboardCards;
