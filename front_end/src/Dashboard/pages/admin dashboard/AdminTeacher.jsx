import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTeachers } from '../../store/reducer/TeacherSlice';
import CourseBanner from '../../../HomePage/pages/Courses/CourseBanner';
export default function AdminTeacher() {
    let [show,setShow] =useState(false) 
const change =()=>{
    setShow(true)
}

    const {TeacherData}=useSelector(state=>state.Teachercontx)
    const Param = useParams()
    const dispatch = useDispatch()
    const {id}=Param
    console.log(id);
    const teacherToShow=TeacherData.filter((teacher)=>teacher._id=== id)[0]
    useEffect(()=>{
        dispatch(getAllTeachers())
    },[])
  return (
    <>
    <CourseBanner Title={teacherToShow?.name}></CourseBanner>
    <div className="container mx-auto my-5 p-5">
    <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                    <img className="h-auto w-full mx-auto"
                        src={teacherToShow?.profile_image ||"https://imgk.timesnownews.com/story/english.png"}
                        alt=""/>{
                          show &&
                        <div >
                        <label className='text-blue-900' htmlFor="Image_url"> Update Course Image</label>
                        <input className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2 text-center" name='Image_url' id='Image_url' type="file" />
                        </div>
                        }
                </div>
                <h1 className="text-gray-900 text-center font-bold text-xl leading-8 my-1">{teacherToShow?.name}</h1>
            </div>
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-bold text-blue-900 leading-8">
                    <span clas="text-green-500">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span className="tracking-wide">Detailes</span>
                </div>
                <form className="text-gray-700" onChange={change}>
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Course title</div>
                            <div className="px-4 py-2"><input type="text" name='title' id='title' placeholder='' defaultValue={teacherToShow?.name}/></div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">subject</div>
                            <div className="px-4 py-2"><input type="text" name='class' id='class'  placeholder='' defaultValue={teacherToShow?.subject?.title}/></div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2"><input type="email" name='email' id='email'  placeholder='' defaultValue={teacherToShow?.email}/></div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold" >birthday</div>
                            <div className="px-4 py-2">
                            <input  placeholder='' defaultValue={teacherToShow?.DOB?.split("T")[0]} type="date" name="startDate" id="startDate"  />
                                        </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Phone</div>
                            <input className="px-4 py-2 font-semibold" type="text" name='phone' id=''  placeholder='' defaultValue={teacherToShow?.phone} />
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">gender</div>
                            <input className="px-4 py-2 font-semibold" type="text" name=' gender' id=''  placeholder='' defaultValue={teacherToShow?.gender} />
                        </div>
                      
                    </div>
                </form>
                {
                  
                  show &&<button type='submit'
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">submit edit</button>
                  }
                  </div>
        </div>
    </div>
</div>
</>
  )
}
