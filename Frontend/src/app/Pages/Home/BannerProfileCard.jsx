import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Box } from '@mui/material';
import { Announcement, Event, Star, ExpandMore, ExpandLess } from '@mui/icons-material';
import { teal, amber, red } from '@mui/material/colors';

const Layout = () => {
  const [showMoreAchievements, setShowMoreAchievements] = useState(false);
  const [showMoreAnnouncements, setShowMoreAnnouncements] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  const achievements = [
    { primary: "Juara 1 Olimpiade Matematika", secondary: "Tingkat Nasional" },
    { primary: "Juara 2 Lomba Debat Bahasa Inggris", secondary: "Tingkat Provinsi" },
    { primary: "Juara 3 Kompetisi Sains", secondary: "Tingkat Kota" },
    { primary: "Juara 1 Lomba Seni Lukis", secondary: "Tingkat Kabupaten" }
  ];

  const announcements = [
    { primary: "Libur Sekolah", secondary: "Mulai 20 Desember" },
    { primary: "Pendaftaran Ekstrakurikuler", secondary: "Dibuka 5 Januari" },
    { primary: "Rapat Orang Tua Murid", secondary: "14 Februari" },
    { primary: "Kunjungan Industri", secondary: "20 Maret" }
  ];

  const events = [
    { primary: "Ujian Tengah Semester", secondary: "Maret 1 - Maret 5" },
    { primary: "Ujian Akhir Semester", secondary: "Juni 10 - Juni 20" },
    { primary: "Libur Akhir Tahun", secondary: "Desember 20 - Januari 5" },
    { primary: "Hari Pendidikan Nasional", secondary: "Mei 2" }
  ];

  const renderList = (items, showMore, setShowMore) => (
    <List>
      {items.slice(0, showMore ? items.length : 3).map((item, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: teal[500] }}>
              <Star />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
      {items.length > 3 && (
        <ListItem button onClick={() => setShowMore(!showMore)}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: teal[500] }}>
              {showMore ? <ExpandLess /> : <ExpandMore />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={showMore ? "Show Less" : "Show More"} />
        </ListItem>
      )}
    </List>
  );

  return (
    <Container maxWidth="lg" className="mt-8">
      <Typography variant="h4" className="text-center mb-8">
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card className="h-full rounded-lg shadow-lg flex flex-col">
            <CardContent className="flex-grow">
              <div className="flex items-center mb-4">
                <Avatar sx={{ bgcolor: amber[500] }} className="mr-2">
                  <Star />
                </Avatar>
                <Typography variant="h6">Prestasi Siswa</Typography>
              </div>
              <Typography variant="body1" className="mb-4">
                Prestasi terbaru yang diraih oleh siswa-siswa terbaik kami.
              </Typography>
              {renderList(achievements, showMoreAchievements, setShowMoreAchievements)}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="h-full rounded-lg shadow-lg flex flex-col">
            <CardContent className="flex-grow">
              <div className="flex items-center mb-4">
                <Avatar sx={{ bgcolor: red[500] }} className="mr-2">
                  <Announcement />
                </Avatar>
                <Typography variant="h6">Pengumuman Penting</Typography>
              </div>
              <Typography variant="body1" className="mb-4">
                Informasi terkini mengenai sekolah dan kegiatan siswa.
              </Typography>
              {renderList(announcements, showMoreAnnouncements, setShowMoreAnnouncements)}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="h-full rounded-lg shadow-lg flex flex-col">
            <CardContent className="flex-grow">
              <div className="flex items-center mb-4">
                <Avatar sx={{ bgcolor: teal[500] }} className="mr-2">
                  <Event />
                </Avatar>
                <Typography variant="h6">Kalender Akademik</Typography>
              </div>
              <Typography variant="body1" className="mb-4">
                Jadwal kegiatan dan acara penting sepanjang tahun ajaran.
              </Typography>
              {renderList(events, showMoreEvents, setShowMoreEvents)}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
