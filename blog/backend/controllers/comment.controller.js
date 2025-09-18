import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose"; 

// Helper for ObjectId validation (example)
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const getPostComments = async (req, res) => {

        const { postId } = req.params;
        if (!isValidObjectId(postId)) 
            return res.status(400).json({ message: "Invalid Post ID format." });

        const comments = await Comment.find({ post: postId })
                                      .populate("user", "username img")
                                      .sort({ createdAt: -1 });
        res.json(comments);
};
 
export const addComment = async (req, res) => {

        const clerkUserId = req.auth?.userId; // Use optional chaining
        const { postId } = req.params;
        const { desc } = req.body; // Assuming 'desc' is the comment content

        if (!clerkUserId) 
            return res.status(401).json({ message: "Not Authenticated!" });
        if (!isValidObjectId(postId)) 
            return res.status(400).json({ message: "Invalid Post ID format." });
        if (!desc || typeof desc !== 'string' || desc.trim() === '') 
            return res.status(400).json({ message: "Comment description (desc) is required and must be a non-empty string." });

        const user = await User.findOne({ clerkUserId }); // Corrected typo
        if (!user) 
            return res.status(403).json({ message: "User not found or not authorized to perform this action." });
        
        const newComment = new Comment({
            desc: desc, // Be explicit with fields from req.body
            user: user._id,
            post: postId
        });

        const savedComment = await newComment.save();

        setTimeout(()=>{
            res.status(201).json(savedComment);
        },3000)
};

export const deleteComment = async (req, res) => {

        const clerkUserId = req.auth?.userId;
        const { id: commentId } = req.params; // Renamed 'id' to 'commentId' for clarity

        if (!clerkUserId) 
            return res.status(401).json({ message: "Not Authenticated!" });
        
        if (!isValidObjectId(commentId)) 
            return res.status(400).json({ message: "Invalid Comment ID format." });

        const role = req.auth.sessionClaims?.metadata?.role || "user"
        if(role === "admin") {
            await Comment.findByIdAndDelete(req.params.id)
            return res.status(200).json("Comment has been deleted")
        }
        
        const user = await User.findOne({ clerkUserId }); // Corrected typo
        if (!user) 
            return res.status(403).json({ message: "User not found or not authorized to perform this action." });

        const deletedComment = await Comment.findOneAndDelete({ _id: commentId, user: user._id });

        if (!deletedComment) 
            return res.status(403).json({ message: "Comment not found or you can only delete your own comment." });
        
        res.status(200).json({ message: "Comment deleted successfully." });

};
