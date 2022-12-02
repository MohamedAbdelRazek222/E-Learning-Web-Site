import React, { useState } from 'react'
import { getAllTeachers, setTeacherProfile } from '../../store/reducer/TeacherSlice';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';import { Outlet, NavLink, useLocation } from 'react-router-dom';
// import { creatParent,creatChildren,getChildren,getParent } from './../../../store/reducer/ParentSlice';
// import { useEffect, useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  jwt_decode  from 'jwt-decode';
import { useSelector } from 'react-redux';
import { setTeacherProfileAfterLggIn } from './../../store/reducer/TeacherSlice';
import { useEffect } from 'react';


export default function ShowTeacher(props) {
    const {TeacherProfile}= useSelector(
        (state) => state.Teachercontx
      );
      const token= sessionStorage.getItem("token")
    const dispatch = useDispatch()
    if (token){
        const decoded = jwt_decode(token);
        var {id}=decoded 
    }
    const [data,setData]= useState(TeacherProfile[0])
    useEffect(()=>{
        dispatch(getAllTeachers())
        dispatch(setTeacherProfileAfterLggIn(id))
        
      },[])
  return (
    <>
<div className="max-w-sm w-full lg:max-w-full lg:flex py-6" style={{height:"450px"}}>
  <div className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('http://2.bp.blogspot.com/-UyEsGxfbBz4/T7PlrZgaSEI/AAAAAAAAAUU/IgEF36sFLp8/s1600/ramadan_mabrok-2.jpg')",height:"400px",width:"400px" }}title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-2">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-red-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">{data?.name}</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat non aliquam rerum eius omnis ipsum cumque fuga inventore adipisci ea. exercitationem praesentium nihil.</p>
    <div className="px-6">
    <span className="inline-block bg-gray-200 rounded-full px-3 my-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Phone : {data?.phone}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 my-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email : {data?.email}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 my-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Subject : {data?.subject?.title}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 my-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Birthday: {data?.DOB.split("T")[0]}</span>
  </div>
    </div>
    {/* {
        myLocation==="/Parent/edit" ? null :
        <NavLink to={"/Parent/edit"}>
    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Edit my data 
    </button>
    </NavLink>
    } */}
    {/* {
      isUpdated &&  <button className="bg-transparent hover:bg-green-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
       data updated successfuly 
  </button>
    } */}
  </div>
</div>
    </>

  )
}
