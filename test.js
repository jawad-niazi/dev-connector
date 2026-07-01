import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI;

try {
    console.log("--- DB Connection Test ---");
    console.log("Your URI starts with:", uri ? uri.substring(0, 30) + "..." : "undefined");
    
    // URL ko parse kar ke check karte hain ke port kahan se aa raha hai
    const urlCheck = new URL(uri);
    console.log("Detected Hostname:", urlCheck.hostname);
    console.log("Detected Port:", urlCheck.port ? urlCheck.port : "No port detected!");
    
    if (urlCheck.port) {
        console.log("❌ Error: Aap ke URL mei galti se yeh port number add hai:", urlCheck.port);
    } else {
        console.log(" Standalone URL parsing passed! No explicit port found in main format.");
    }
} catch (err) {
    console.log("❌ Parsing Error:", err.message);
}