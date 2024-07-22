import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardActionArea, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const layananSekolah = [
  { 
    nama: 'Perpustakaan', 
    deskripsi: 'Fasilitas untuk membaca dan meminjam buku.',
    gambar: 'https://smkn1adw.sch.id/fp/sites/default/files/SLIDE%201.jpg',
  },
  { 
    nama: 'Laboratorium', 
    deskripsi: 'Tempat untuk praktikum sains dan teknologi.',
    gambar: 'https://example.com/laboratory.jpg',
  },
  { 
    nama: 'Ekstrakurikuler', 
    deskripsi: 'Kegiatan tambahan di luar kurikulum.',
    gambar: 'https://example.com/extracurricular.jpg',
  },
  { 
    nama: 'UKS', 
    deskripsi: 'Unit Kesehatan Sekolah untuk layanan medis.',
    gambar: 'https://example.com/uks.jpg',
  },
  { 
    nama: 'Kafetaria', 
    deskripsi: 'Tempat makan dan minum untuk siswa.',
    gambar: 'https://example.com/cafeteria.jpg',
  },
  { 
    nama: 'Koperasi', 
    deskripsi: 'Tempat belanja kebutuhan sekolah.',
    gambar: 'https://example.com/cooperative.jpg',
  },
  { 
    nama: 'OSIS', 
    deskripsi: 'Organisasi Siswa Intra Sekolah untuk kegiatan siswa.',
    gambar: 'https://example.com/osis.jpg',
  },
  { 
    nama: 'Transportasi', 
    deskripsi: 'Layanan antar-jemput sekolah.',
    gambar: 'https://example.com/transportation.jpg',
  },
  { 
    nama: 'Asrama', 
    deskripsi: 'Tempat tinggal bagi siswa yang jauh dari sekolah.',
    gambar: 'https://example.com/dormitory.jpg',
  },
  // Tambahkan layanan lain di sini
];

const LayananSekolah: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const layananToShow = showAll ? layananSekolah : layananSekolah.slice(0, 3);

  return (
    <Container>
      <Box textAlign="center" py={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          Layanan Sekolah
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {layananToShow.map((layanan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea>
                <Box 
                  sx={{
                    position: 'relative',
                    height: 200,
                    backgroundImage: `url(${layanan.gambar})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <CardContent 
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      textAlign: 'center',
                      padding: '16px',
                      width: '100%'
                    }}
                  >
                    <Typography variant="h5" component="h2">
                      {layanan.nama}
                    </Typography>
                    <Typography variant="body2">
                      {layanan.deskripsi}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setShowAll(!showAll)}
          endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      </Box>
    </Container>
  );
};

export default LayananSekolah;
