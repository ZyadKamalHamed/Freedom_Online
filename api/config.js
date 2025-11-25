// This secure handler is for Vercel
module.exports = (req, res) => {
    // Read from Vercel Environment Variables
    const apiKey = process.env.GOOGLE_API_KEY;
    
    // Send it to the frontend
    res.setHeader('Content-Type', 'application/javascript');
    res.status(200).send(`const config = { API_KEY: "${apiKey}" };`);
};