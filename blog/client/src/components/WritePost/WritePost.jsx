import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import './Styles.css';
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast }from 'react-toastify'
import Upload from "../Upload/UploadFun";
import { useEffect } from "react";

function WritePost() {
    const [value,setValue] = useState('')
    const [cover,setCover] = useState('')
    const [img,setImg] = useState('')
    const [video,setVideo] = useState('')
    const [progress,setProgress] = useState(0)
    const navigate = useNavigate()
    const {getToken} = useAuth()

    useEffect(() => {
        img && setValue(prave => prave + `<p> <img src="${img.url}" /> </p>` )
    }, [img])

    useEffect(() => {
        video && setValue(prave => prave + `<p> <iframe class="ql-video" src="${video.url}" /> </p>` )
    }, [video])

    const mutation = useMutation({
        mutationFn: async(newPost) => {
            const token = await getToken()
            return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
                headers:{
                    Authorization: `Bearer ${token}` 
                }
            })
        },

        onSuccess: res => {
            toast.success("Post has been created")
            navigate(`/${res.data.slug}`)
        }
    });
    
    const {isLoaded,isSignedIn} = useUser();
    if(!isLoaded)
        return <div>Loding...</div>
    if(isLoaded && !isSignedIn)
        return <div>You Should Login!</div>

    // handelSubmit function
    const handelSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            img: cover.filePath || "",
            title: formData.get("title"),
            category: formData.get("category"),
            desc: formData.get("desc"),
            content: value
        }

        console.log(data);
        mutation.mutate(data)
    }

    return (
        <section className="write-post">
            <div className="container lg:flex lg:flex-row ">
                <div className="lg:w-1/6"></div>
                <div className="pt-12 p-4 lg:w-4/6">
                    <h1 className="create-post text-2xl font-bold">Create A New Post</h1>
                    <form onSubmit={handelSubmit}>

                        <div className="flex flex justify-between ">
                            <input name="title" type="text" className="p-3 pt-10 rounded-md bg-transparent text-2xl 
                            font-bold" placeholder="Write Your Story Here..."
                            />
                            <div className="choose-a-category flex gap-1">
                                <label className="text-lg">Choose category:</label>
                                <div className="select">
                                    <select name="category" className="">
                                        <option value="general">General</option>
                                        <option value="web-design">Web Design</option>
                                        <option value="development">Development</option>
                                        <option value="database">Database</option>
                                        <option value="seo">Search Engines</option>
                                        <option value="marketing">Marketing</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="add-a-cover-image pt-5 flex justify-between">
                            <Upload type="image" setProgress={setProgress} setData={setCover} >
                                <button 
                                    onClick={e => e.preventDefault()} 
                                    name="add-image-cover" 
                                    className="bg-blue-600 text-white rounded-xl p-3"
                                >
                                    Add image cover
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                                    </svg>
                                </button>
                            </Upload>
                            <p>{"Progress:" + progress + "%"}</p>
                            
                        </div>
        
                        <div className="a-short-description mt-8 h-400">
                            <textarea name="desc" className="rounded-lg shadow-md p-2 w-full my-3" placeholder="A Short Description"/>
                            <div className="flex flex-row">
                                <div className="flex-col mt-3 mr-2 text-mainTextColor">
                                    <Upload type="image" setProgress={setProgress} setData={setImg} >
                                        <div className="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-image" viewBox="0 0 16 16">
                                                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z"/>
                                            </svg>
                                        </div>
                                    </Upload>
                                    <Upload type="video" setProgress={setProgress} setData={setVideo} >
                                        <div className="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                                                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                                                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                                                <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                            </svg>
                                        </div>
                                    </Upload>
                                </div>
                            <ReactQuill 
                                value={value} 
                                onChange={setValue} 
                                theme="snow" 
                                className="rounded-lg shadow-md bg-white p-3 flex-1"
                                readOnly = {0>progress && progress<100}
                            />
                            </div>
                        </div>

                        <div className="pt-5 flex justify-center items-center">
                            <button 
                                disabled={ mutation.isPending || (0>progress && progress<100) } 
                                className="mainBgColor text-white text-lg flex justify-center flex-row items-center gap-2 py-3 px-10 rounded-xl disabled:bg-blue-600 disabled:cursor-not-allowed" 
                                name="Send">
                                { mutation.isPending ?  "Loding..." : "Send" }
                            </button>
                            { mutation.isError && <span> { mutation.error.message } </span> }
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default WritePost ;