import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorum ipsum....', author: 'ruhaim', id: 1},
        {title: 'Welcome Party', body: 'lorum ipsum....', author: 'Aathik', id: 2},
        {title: 'web dev top tips', body: 'lorum ipsum....', author: 'hammadh', id: 3}
        
    ]);
    return ( 
        <div className="home">
              <BlogList blogs = {blogs} title = "All Blogs"/>
              <BlogList blogs = {blogs.filter((blog) => blog.author === 'ruhaim')} title = "Ruhaim's Blogs"/>
                      
        </div>
     );
}
 
export default Home;