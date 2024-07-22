import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, Dialog, DialogTitle, DialogContent, DialogContentText, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const fasilitas = [
  {
    title: 'Ruang Kelas',
    description: 'Ruang kelas yang nyaman dengan fasilitas lengkap.',
    image: 'https://smkn1adw.sch.id/fp/sites/default/files/SLIDE%201.jpg',
  },
  {
    title: 'Lapangan Olahraga',
    description: 'Lapangan olahraga untuk berbagai aktivitas fisik.',
    image: 'https://smkn1adw.sch.id/fp/sites/default/files/field/image/HUT%20IMG_9389.jpg',
  },
  {
    title: 'Laboratorium Sains',
    description: 'Laboratorium dengan peralatan modern untuk praktikum.',
    image: 'https://example.com/image3.jpg',
  },
  {
    title: 'Perpustakaan',
    description: 'Perpustakaan dengan koleksi buku yang lengkap.',
    image: 'https://example.com/image4.jpg',
  },
  {
    title: 'Lab Komputer',
    description: 'Lab komputer dengan perangkat terbaru untuk pembelajaran.',
    image: 'https://example.com/image5.jpg',
  },
];

const FasilitasPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedFasilitas, setSelectedFasilitas] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const handleClickOpen = (fasilitas: { title: string; description: string; image: string }) => {
    setSelectedFasilitas(fasilitas);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFasilitas(null);
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bold', marginTop: '2rem' }}>
        Fasilitas Sekolah
      </Typography>
      <Grid container spacing={4}>
        {fasilitas.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              onClick={() => handleClickOpen(item)}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: 180, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 20,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          },
        }}
      >
        <DialogTitle>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {selectedFasilitas?.title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            image={selectedFasilitas?.image}
            alt={selectedFasilitas?.title}
            sx={{ height: 300, objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
          />
          <DialogContentText>
            {selectedFasilitas?.description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default FasilitasPage;
