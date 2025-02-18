import NotFoundPage from "@/app/not-found"

export default function Page({params}){
    // Fetch your blog post by its slug
    let languages = ["python","Javascript","Java","C++"]
    if (languages.includes(params.slug)){
        return <div>My post: {params.slug}</div>
    }
    else{
        return <div><NotFoundPage/></div>
    }
}