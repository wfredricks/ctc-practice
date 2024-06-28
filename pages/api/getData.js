export default async function handler(req, res) {
    const invoke_url =
    "https://edn1o3t351.execute-api.us-east-1.amazonaws.com/dev/TC-Feedback-Manager";
  const body = req.body;
  console.log("invoke:", `${invoke_url}?url=${body}`)
  const response = await fetch(`${invoke_url}?url=${body}`, {
    method: "GET"
  });
  const data = await response.json();
  console.log("response", data);
  res.status(200).json( data );
}