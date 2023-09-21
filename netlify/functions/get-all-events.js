const mongoose = require('mongoose');
const Event = require('../../server/models/Event');

// Check if we're already connected to the database
const isConnected = () => {
    return !!mongoose.connection && mongoose.connection.readyState === 1;
};

exports.handler = async function(event, context) {
    // Connect to the database if not connected
    if (!isConnected()) {
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
    }
    
    try {
        const events = await Event.find();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://ocupaif.netlify.app',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(events)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': 'https://ocupaif.netlify.app', // Replace with your domain in production
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: "Internal Server Error" })
        };
    }
}
