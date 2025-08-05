export async function log(stack, level, pkg, message) {
  try {
    await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`
      },
      body: JSON.stringify({ stack, level, package: pkg, message })
    });
  } catch (err) {
    console.error("Log error", err);
  }
}
