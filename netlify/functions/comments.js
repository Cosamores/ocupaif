const mongoose = require('mongoose');
const Comment = require('../models/Comment');  // Path to your Comment model

exports.handler = async function(event, context) {
    if(event.httpMethod === 'GET') {
        const { evento } = event.queryStringParameters;
        
        try {
            // Assuming a model structure where comments are stored with an associated 'evento' field
            const comments = await Comment.find({ evento });
            return {
                statusCode: 200,
                body: JSON.stringify(comments)
            };
        } catch (error) {
            return {
                statusCode: 500,
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
                body: JSON.stringify(newComment)
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "Error posting comment" })
            };
        }
    }

    // Default response if no condition above is met
    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" })
    };
};
