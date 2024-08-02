import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Avatar, Box, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import EventIcon from '@mui/icons-material/Event';
import ReactMarkdown from 'react-markdown';

const StyledContainer = styled(Container)({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: '20px',
});

const StyledCard = styled(Card)({
  width: '100%',
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
  backgroundColor: '#fff',
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

// Define the types for the profile data
interface Profile {
  Name: string;
  logoUrl: string;
  description: string;
  accreditation: string;
  contact: string;
  address: string;
  about: string;
}

interface AdditionalProfile {
  id: number;
  attributes: {
    Title: string;
    description: string;
  };
}

const Profil: React.FC = () => {
  const [profileData, setProfileData] = useState<Profile | null>(null);
  const [additionalProfiles, setAdditionalProfiles] = useState<AdditionalProfile[]>([]);

  useEffect(() => {
    // Fetch profile data
    fetch('http://192.168.100.2:1337/api/profils')
      .then(response => response.json())
      .then(data => {
        setProfileData(data.data[0].attributes);
      });

    // Fetch additional profiles
    fetch('http://192.168.100.2:1337/api/profil-lainnyas')
      .then(response => response.json())
      .then(data => {
        setAdditionalProfiles(data.data);
      });
  }, []);

  if (!profileData) return <Typography>Loading...</Typography>;

  return (
    <StyledContainer>
      <StyledCard>
        <Header>
          <Typography variant="h4" align="center">Profil SMK 1 Adiwerna</Typography>
        </Header>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <ProfileAvatar alt="SMK 1 Adiwerna Logo" src={profileData.logoUrl} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            {profileData.Name}
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            {profileData.description}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InfoItem>
                <SchoolIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Akreditasi</Typography>
                  <Typography color="textSecondary">{profileData.accreditation}</Typography>
                </Box>
              </InfoItem>
              <InfoItem>
                <ContactPhoneIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Kontak</Typography>
                  <Typography color="textSecondary">{profileData.contact}</Typography>
                </Box>
              </InfoItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem>
                <LocationOnIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Alamat</Typography>
                  <Typography color="textSecondary">{profileData.address}</Typography>
                </Box>
              </InfoItem>
              <InfoItem>
                <InfoIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="h6">Tentang Sekolah</Typography>
                  <Typography color="textSecondary">
                    {profileData.about}
                  </Typography>
                </Box>
              </InfoItem>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      {additionalProfiles.map((profile) => (
        <StyledCard key={profile.id}>
          <CardContent>
            <AdditionalContent>
              <Typography variant="h6" gutterBottom>
                {profile.attributes.Title}
              </Typography>
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-4" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-4" {...props} />,
                  h4: ({ node, ...props }) => <h4 className="text-lg font-bold mb-4" {...props} />,
                  h5: ({ node, ...props }) => <h5 className="text-base font-bold mb-4" {...props} />,
                  h6: ({ node, ...props }) => <h6 className="text-sm font-bold mb-4" {...props} />,
                  p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />,
                  a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
                }}
              >
                {profile.attributes.description}
              </ReactMarkdown>
            </AdditionalContent>
          </CardContent>
        </StyledCard>
      ))}

      <Box mt={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2024 SMK 1 Adiwerna. All rights reserved.
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default Profil;
