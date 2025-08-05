import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { log } from "../utils/log";

const ShortenerForm = ({ onSubmit }) => {
  const [urls, setUrls] = useState([
    { originalUrl: "", validity: "", customCode: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const addRow = () => {
    if (urls.length < 5) {
      setUrls([
        ...urls,
        { originalUrl: "", validity: "", customCode: "" },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validInputs = urls.filter((url) => url.originalUrl.trim() !== "");

    for (const url of validInputs) {
      if (!url.originalUrl.match(/^https?:\/\/\S+\.\S+$/)) {
        alert("Invalid URL format: " + url.originalUrl);
        return;
      }
      if (url.validity && isNaN(url.validity)) {
        alert("Validity must be a number (minutes)");
        return;
      }
    }

    // 🔐 Log submission attempt
    await log(new Error().stack, "info", "ShortenerForm", "User submitted form");

    onSubmit(validInputs);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Shorten Your URLs
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {urls.map((url, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Original URL"
                  value={url.originalUrl}
                  onChange={(e) =>
                    handleChange(index, "originalUrl", e.target.value)
                  }
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Validity (mins)"
                  value={url.validity}
                  onChange={(e) =>
                    handleChange(index, "validity", e.target.value)
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Custom Shortcode"
                  value={url.customCode}
                  onChange={(e) =>
                    handleChange(index, "customCode", e.target.value)
                  }
                  fullWidth
                />
              </Grid>
            </React.Fragment>
          ))}

          {urls.length < 5 && (
            <Grid item xs={12}>
              <IconButton onClick={addRow}>
                <AddIcon />
              </IconButton>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Shorten URLs
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ShortenerForm;
