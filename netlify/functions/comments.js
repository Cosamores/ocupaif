const mongoose = require('mongoose');
const Comment = require('../../server/models/Comment');
require('dotenv').config();

exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': 'https://www.ocupaif.netlify.app', // Replace with your domain
        'Content-Type': 'application/json'
    };

    if(event.httpMethod === 'GET') {
        const { evento } = event.queryStringParameters;
        
        try {
            const comments = await Comment.find({ evento });
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify(comments)
            };
        } catch (error) {
            return {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ message: "Error fetching comments" })
            };
        }
    }

    if(event.httpMethod === 'POST') {
        const commentData = JSON.parse(event.body);

        try {
            const newComment = new Comment(commentData);
            await newComment.save();
            return {
                statusCode: 201,
                headers: headers,
                body: JSON.stringify(newComment)
            };
        } catch (error) {
            return {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ message: "Error posting comment" })
            };
        }
    }

    // Default response if no condition above is met
    return {
        statusCode: 405,
        headers: headers,
        body: JSON.stringify({ message: "Method not allowed" })
    };
};
