import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";

const Statistics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your real backend endpoint
    fetch("http://localhost:3000/api/stats")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch stats:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Paper sx={{ padding: 3, margin: 4 }}>
      <Typography variant="h5" gutterBottom>
        URL Statistics
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : data.length === 0 ? (
        <Typography>No stats available.</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Original URL</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell>Visits</TableCell>
              <TableCell>Valid Till</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((url, index) => (
              <TableRow key={index}>
                <TableCell>{url.original}</TableCell>
                <TableCell>
                  <a
                    href={`http://localhost:5173/${url.shortCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`/${url.shortCode}`}
                  </a>
                </TableCell>
                <TableCell>{url.visits}</TableCell>
                <TableCell>{url.validTill}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
};

export default Statistics;
