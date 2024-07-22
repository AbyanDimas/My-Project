import React from 'react';
import { Container, Card, CardContent, Typography, Avatar, Box, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import EventIcon from '@mui/icons-material/Event';


const StyledContainer = styled(Container)({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
});

const StyledCard = styled(Card)({
  maxWidth: '800px',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  marginBottom: '20px',
});

const Header = styled(Box)({
  backgroundColor: '#007AFF',
  padding: '20px',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ProfileAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  border: '5px solid #fff',
  marginTop: '-50px',
});

const InfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const AdditionalContent = styled(Box)({
  padding: '20px',
  textAlign: 'center',
});

const Profil: React.FC = () => {
  return (
    <StyledContainer>
      <StyledCard>
        <Header>
          <Typography variant="h4">Profil SMK 1 Adiwerna</Typography>
        </Header>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <ProfileAvatar alt="SMK 1 Adiwerna Logo" src="link-to-your-logo" />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            SMK 1 Adiwerna
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Sekolah Menengah Kejuruan di Kabupaten Tegal yang unggul dalam bidang akademik dan non-akademik.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InfoItem>
                <SchoolIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Akreditasi</Typography>
                  <Typography color="textSecondary">A</Typography>
                </Box>
              </InfoItem>
              <InfoItem>
                <ContactPhoneIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Kontak</Typography>
                  <Typography color="textSecondary">(+62) 123-456-789</Typography>
                </Box>
              </InfoItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem>
                <LocationOnIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Alamat</Typography>
                  <Typography color="textSecondary">Jl. Pendidikan No.1, Adiwerna, Tegal</Typography>
                </Box>
              </InfoItem>
              <InfoItem>
                <InfoIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Tentang Sekolah</Typography>
                  <Typography color="textSecondary">
                    Didirikan pada tahun 1995, SMK 1 Adiwerna memiliki beragam jurusan dan fasilitas lengkap untuk mendukung kegiatan belajar mengajar.
                  </Typography>
                </Box>
              </InfoItem>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <AdditionalContent>
            <Typography variant="h6" gutterBottom>
              Kegiatan dan Prestasi
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              SMK 1 Adiwerna aktif dalam berbagai kegiatan ekstrakurikuler dan telah meraih berbagai prestasi di tingkat regional maupun nasional.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Link href="#" underline="none">
                  <Box display="flex" alignItems="center" flexDirection="column">
                    <StarIcon color="primary" />
                    <Typography>Prestasi</Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none">
                  <Box display="flex" alignItems="center" flexDirection="column">
                    <EventIcon color="primary" />
                    <Typography>Kegiatan</Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </AdditionalContent>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <AdditionalContent>
            <Typography variant="h6" gutterBottom>
              ASEAN Eco School
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              SMK 1 Adiwerna telah diakui sebagai ASEAN Eco School, berkomitmen untuk menjalankan program lingkungan hidup yang berkelanjutan dan mendidik siswa tentang pentingnya menjaga kelestarian alam.
            </Typography>
            <Box display="flex" justifyContent="center">
            </Box>
          </AdditionalContent>
        </CardContent>
      </StyledCard>

      <Box mt={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2024 SMK 1 Adiwerna. All rights reserved.
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default Profil;
