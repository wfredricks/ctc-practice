export default async function handler(req, res) {
  const invoke_url =
    "https://edn1o3t351.execute-api.us-east-1.amazonaws.com/dev/TC-Feedback-Manager";
  if (req.method === "POST") {

    const body = req.body;
    const response = await fetch(`${invoke_url}`, {
      method: req.method,
      body: body,
    });
    const data = await response.json();
    console.log("response", data);
    res.status(200).json(data);
  } else if (req.method === "GET") {
    const { url } = req.query;
    console.log("url", url);
    console.log(`${invoke_url}?url=${url}`);
    const response = await fetch(`${invoke_url}?url=${url}`, {
      method: req.method,
    });
    const data = await response.json();
    console.log("response", data);
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
