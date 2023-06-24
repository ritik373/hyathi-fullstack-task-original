const jwt=require('jsonwebtoken')
function authenticateToken(req, res, next) {
    // Get the token from the request headers
    const token = req.headers.authorization;
    // console.log(token)
    // next()
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Verify the token
    jwt.verify(token, 'secret_key', (error, decoded) => {
      if (error) {
        return res.status(403).json({ error: 'Invalid token' });
      }

      console.log(decoded)
  
      // Add the decoded user ID to the request object
      req.userId = decoded.userId;
      next();
    });
  }

  module.exports=authenticateToken;