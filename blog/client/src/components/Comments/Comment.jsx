import { Link } from "react-router-dom";
import {format} from 'timeago.js';
import UserImageName from "../User/UserImageName/UserImageName";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

    return (
        <div className="comment p-8 bg-[#e7edf3]  rounded-xl mt-10 mr-3">
            <Link to={`${comment.user.username}`} className="user-image flex w-max gap-2 items-center justify-center">
                <UserImageName srcImg={comment.user.img} name={comment.user.username}/>
                
            </Link>

            <div className="flex flex-row gap-3 w-max items-center justify-center text-xs p-1">
                <span className="text-gray-500">{format(comment.createdAt)}</span>
                <span className="text-gray-500">Updated: {format(comment.updatedAt)}</span>
                {user &&
                (comment.user.username === user.username || role === "admin") && (
                    <span
                    className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
                    onClick={() => mutation.mutate()}
                    >
                    delete
                    {mutation.isPending && <span>(in progress)</span>}
                    </span>
                )}
            </div>
            
            <p className="text-lg text-gray-700">{comment.desc}</p>
        </div>
    )
}

export default Comment ;
