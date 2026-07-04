const SHEETS_URL = import.meta.env.VITE_SHEETS_ENDPOINT || '';

export async function submitContactForm(data) {
  const payload = {
    timestamp: new Date().toISOString(),
    ...data,
  };

  await fetch(SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return { success: true };
}