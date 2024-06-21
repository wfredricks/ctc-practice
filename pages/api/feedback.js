export default async function handler(req, res) {
    const invoke_url = 'https://mhcgl2igeh.execute-api.us-east-1.amazonaws.com/dev/TC-Feedback-Manager'
    const body = req.body
    const response = await fetch(invoke_url, {
        method: 'POST',
        body: body
    })
    const data = await response.json()
    console.log("response", data)
    res.status(200).json({data})
}