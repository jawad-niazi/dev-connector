import jwt from "jsonwebtoken";

export default function (req, res, next) {
    // 1. Get token from header
    console.log("=== MIDDLEWARE TRIGGERED ===");
    const token = req.header("x-jwt-token");
    console.log("Token received:", token);

    // 2. Check if no token (CRITICAL: Added 'return' here)
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // 3. Verify token
    try {
        const decode = jwt.verify(token, "mySecret123");
        req.user = decode.user;
        next(); // Go to the next route handler
    } catch (err) {
        // 401 status is better for invalid tokens than 500
        return res.status(401).json({ msg: "Token is not valid" });
    }
}