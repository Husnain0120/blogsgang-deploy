import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { MdReadMore } from "react-icons/md";
import './BlogPost.css'

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0
              ?
              <>
                {getAllBlog.map((item, index) => {
                  const { thumbnail, id, date } = item
                 
                  return (
                    <div className="p-4 md:w-1/3" key={index}>
                      <div
                        style={{
                          background: mode === 'dark'
                            ? 'rgb(30, 41, 59)'
                            : 'white',
                          borderBottom: mode === 'dark'
                            ?
                            ' 4px solid rgb(226, 232, 240)'
                            : ' 4px solid rgb(30, 41, 59)'
                        }}
                        className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                        ${mode === 'dark'
                            ? 'shadow-gray-700'
                            : 'shadow-xl'
                            } 
                        rounded-xl overflow-hidden`} 
                      >
                        {/* Blog Thumbnail  */}
                        <img onClick={() => navigate(`/bloginfo/${id}`)} className=" w-full" src={thumbnail} alt="blog" />

                        {/* Top Items  */}
                        <div className="p-6">
                          {/* Blog Date  */}
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                            color: mode === 'dark'
                              ? 'rgb(226, 232, 240)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            {date}
                          </h2>

                          {/* Blog Title  */}
                          <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                            color: mode === 'dark'
                              ? 'rgb(226, 232, 240)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            {item.blogs.title}
                          </h1>

                          {/* Blog Description  */}
                          <p className="leading-relaxed mb-3" style={{
                            color: mode === 'dark'
                              ? 'rgb(226, 232, 240)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
              :
              <>
              <div
              class="max-w-sm mx-10 mb-5  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div
                class="flex  items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
              >
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w- h-10 text-gray-200 dark:text-gray-600"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  ></path>
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  ></path>
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-72 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div class="flex items-center mt-4">
                {/* <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  ></path>
                </svg> */}
                <div>
                  <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                  ></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
            {/* 2 */}
            <div
              class="max-w-sm mx-10 mb-5  p-4 border  border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div
                class="flex items-center  justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
              >
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  ></path>
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  ></path>
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-72 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div class="flex items-center mt-4">
                {/* <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  ></path>
                </svg> */}
                <div>
                  <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                  ></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
            {/* 3 */}
            <div
              class="max-w-sm mx-10 mb-5  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div
                class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
              >
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  ></path>
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  ></path>
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-72 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div class="flex items-center mt-4">
                {/* <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  ></path>
                </svg> */}
                <div>
                  <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                  ></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
            {/* 4 */}
            <div
              class="max-w-sm mx-10 p-4 mb-5  border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div
                class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
              >
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  ></path>
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  ></path>
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-72 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div class="flex items-center mt-4">
                {/* <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  ></path>
                </svg> */}
                <div>
                  <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                  ></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
            {/* 5 */}
            <div
              class="max-w-sm mx-10 p-4 mb-5  border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div
                class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
              >
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  ></path>
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  ></path>
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-72 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div class="flex items-center mt-4">
                {/* <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  ></path>
                </svg> */}
                <div>
                  <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                  ></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
            {/* 6 */}
            <div
              class="max-w-sm mx-10 p-4 mb-5  border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div
                class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
              >
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                >
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                  ></path>
                  <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                  ></path>
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-72 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div class="flex items-center mt-4">
                {/* <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  ></path>
                </svg> */}
                <div>
                  <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                  ></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
            </>
            }
          </div>
          
          {/* See More Button  */}
          {getAllBlog.length > 0 && (
            <div className="flex justify-center my-5">
              <Link to={'/allblogs'}>
                <Button
                  style={{
                    background: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : 'rgb(30, 41, 59)',
                    color: mode === 'dark'
                      ? 'rgb(30, 41, 59)'
                      : 'rgb(226, 232, 240)'
                  }}>
                  <span><MdReadMore className=' md:hidden text-[30px] text-red-900' /><span className=' hidden md:block'>Seemore</span></span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPostCard
