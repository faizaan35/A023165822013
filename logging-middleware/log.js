export async function log(stack, level, pkg, message) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtb2hhbW1hZC5mYWl6YWFuQHMuYW1pdHkuZWR1IiwiZXhwIjoxNzU0Mzc0NTcyLCJpYXQiOjE3NTQzNzM2NzIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkOGY3YTAxZS1iZWQ1LTQyZmUtOTUxMC1iYzY0MWRjNGE2OTQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtb2hhbW1hZCBmYWl6YWFuIiwic3ViIjoiMmMwYzZiMzYtNjFiZC00NzlhLThlMWYtMGRiOWMxNjhlNzlkIn0sImVtYWlsIjoibW9oYW1tYWQuZmFpemFhbkBzLmFtaXR5LmVkdSIsIm5hbWUiOiJtb2hhbW1hZCBmYWl6YWFuIiwicm9sbE5vIjoiYTAyMzE2NTgyMjAxMyIsImFjY2Vzc0NvZGUiOiJ5dmhkZGEiLCJjbGllbnRJRCI6IjJjMGM2YjM2LTYxYmQtNDc5YS04ZTFmLTBkYjljMTY4ZTc5ZCIsImNsaWVudFNlY3JldCI6ImdkS1hIRnNVYXBucGhoQnkifQ.5SOyVUFkYCAngfRwbOGcocV4qWykL0DslPjA47BGS90';

  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });

    if (!res.ok) {
      console.log("log not sent, status:", res.status);
    } else {
      const data = await res.json();
      console.log("log was sent:", data);
    }
  } catch (err) {
    console.log(err.message);
  }
}
