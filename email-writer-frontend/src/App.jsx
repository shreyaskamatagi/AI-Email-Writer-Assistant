import {
  Box,
  Container,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress
} from '@mui/material';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      console.error('Error generating reply:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedReply) {
      navigator.clipboard.writeText(generatedReply);
      alert('Reply copied to clipboard!');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant='h3' component='h1' gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Original Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button 
          sx={{ mb: 2 }}
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Generate Reply"}
        </Button>

        {generatedReply && (
          <>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              label="Generated Reply"
              value={generatedReply}
              InputProps={{ readOnly: true }}
              sx={{ mt: 3 }}
            />

            <Button
              variant="outlined"
              onClick={handleCopy}
              sx={{ mt: 2 }}
            >
              Copy to Clipboard
            </Button>
          </>
        )}
      </Box>

      <Box sx={{ mx: 3 }}>
  <TextField
    fullWidth
    multiline
    rows={6}
    variant='outlined'
    value={generatedReply || ''}
    inputProps={{ readOnly: true }}
    sx={{ mb: 2 }}
  />
  <Button
    variant='outlined'
    onClick={() => navigator.clipboard.writeText(generatedReply)}
  >
    Copy to Clipboard
  </Button>
</Box>

    </Container>
  );
}

export default App;
