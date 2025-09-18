import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getAllPosts = async (req,res) => {
    let page = parseInt(req.query.page) || 1 ;
    let limit = parseInt(req.query.limit) || 2 ;

    const totalPosts = await Post.countDocuments();
    let hasMore = page * limit < totalPosts

    const posts = await Post.find()
    .populate("user", "username")
        .limit(limit)
        .skip((page - 1) * limit)
    res.status(200).json({posts, hasMore})
}


export const getAPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate("user", "username img");
  res.status(200).json(post);
};


export const createAPost = async (req,res) => {

    const clerkUserId = req.auth.userId;
    console.log(req.headers);
    
    if(!clerkUserId)
        return res.status(401).json("Not Authenticated!");

    const user = await User.findOne({clerkUserId});
    if(!user)
        return res.status(404).json("User Not Found!");
    
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
    let existingPost = await Post.findOne({slug});
    let counter = 2;

    while ( existingPost ) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({slug});
        counter++ ;
    }

    const newPost = new Post({user: user._id, slug, ...req.body});
    const post = await newPost.save();
    res.status(200).json(post);
};

export const deleteAPost = async (req,res) => {

    const clerkUserId = req.auth.userId;
    if(!clerkUserId)
        return res.status(401).json("Not Authenticated!");

    const role = req.auth.sessionClaims?.metadata?.role || "user";
    if(role === "admin") {
        await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json("post has been deleted");
    }

    const user = await User.findOne({clerkUserId});
    if(!user)
        res.status(401).json("User Not Found!")
    
     const deletedPost = await Post.findOneAndDelete({
        _id: req.params.id,
        user: user._id,
    });

    if (!deletedPost) 
        return res.status(403).json("You can delete only your posts!");

    res.status(200).json("Post has been deleted");

};

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const uploadAuth = async (req,res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
}
