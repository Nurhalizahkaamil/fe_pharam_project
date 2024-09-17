import { Stack, Typography, Card, CardContent, Box } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';

// Import gambar png
import DashboardImage from '/src/assets/grafik.png'; // Sesuaikan path ke gambar yang di-upload

const MyCards = () => {
  return (
    <Fragment>
      {/* Card untuk teks sapaan */}
      <Card
        sx={{
          background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: '10px',
          color: 'white',
          mb: 3,
          mt: 9,
          position: 'relative', // Menetapkan posisi relative agar gambar bisa di-absolute di sekitarnya
          width: { xs: '100%', md: '100%', lg: '100%' }, // Width responsif
          mx: 'auto', // Untuk membuat card berada di tengah secara horizontal
          overflow: 'visible', // Agar gambar di luar tidak terpotong
        }}
      >
        <CardContent
          sx={{
            padding: { xs: '20px', md: '30px', lg: '60px' }, // Padding yang responsif
            position: 'relative',
          }}
        >
          <Typography variant="h1" fontWeight="bold">
            Hi, User!
          </Typography>
          <Typography variant="h2">Welcome To Inventory System Application</Typography>
        </CardContent>

        {/* Gambar di luar Card dengan posisi absolute */}
        <Box
          component="img"
          src={DashboardImage}
          alt="Dashboard Illustration"
          sx={{
            position: 'absolute',
            top: '45%', // Posisi vertikal gambar
            right: '-50px', // Gambar berada di luar card secara horizontal
            transform: 'translateY(-50%)', // Untuk memastikan gambar berada di tengah secara vertikal
            width: { xs: '150px', md: '200px', lg: '300px' }, // Responsif berdasarkan ukuran layar
            height: 'auto',
            opacity: 0.9,
          }}
        />
      </Card>

      {/* Placeholder jika Anda ingin menambahkan konten lain di masa depan */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 3, pb: 2.5 }}
      ></Stack>
    </Fragment>
  );
};

export default MyCards;
