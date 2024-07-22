import React, { useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  InputAdornment,
} from '@mui/material';
import { Person, Email, Feedback } from '@mui/icons-material';

const Forms = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleConfirm = () => {
    handleClose();
    // Simulasi pengiriman data
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        setSnackbarMessage('Saran berhasil dikirim!');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Pengiriman gagal, coba lagi nanti.');
        setSnackbarSeverity('error');
      }
      setSnackbarOpen(true);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Kotak Saran</h2>
        <form>
          <div className="mb-4">
            <TextField
              label="Nama Anda"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Saran Anda"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Feedback />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="button"
            fullWidth
            onClick={handleClickOpen}
          >
            Kirim
          </Button>
        </form>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Konfirmasi</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Apakah Anda yakin ingin mengirim saran ini?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Batal
            </Button>
            <Button onClick={handleConfirm} color="primary">
              Kirim
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Forms;
