import React, { useEffect, useState } from "react";
import './skills.css'

import css from "../Icons/css.svg"
import sql from "../Icons/database.svg"
import git from "../Icons/github.svg"
import boot from "../Icons/bootstrap.png"
import angular from "../Icons/angular.png"
import html from "../Icons/html5.svg"
import ionic from "../Icons/ionic.png"
import jscript from "../Icons/java-script.svg"
import java from "../Icons/java.svg"
import mater from "../Icons/material.png"
import node from "../Icons/nodejs.svg"
import pytho from "../Icons/python.svg"
import react from "../Icons/react.svg"
import sass from "../Icons/sass.svg"
import clan from "../Icons/c.svg"
import cplus from "../Icons/cplus.svg"
import gitlab from "../Icons/git.svg"

export const Skills =()=>{
    const prog= [
        
        {icon:clan,name:"c"},
        {icon:cplus,name:"c++"},
        {icon:java,name:"java"},
        {icon:pytho,name:"python"},
    ];
    
    const front= [
        {icon:html,name:"html5"},
        {icon:angular,name:"angular"},
        {icon:react,name:"react"},
    ]
    const design= [
        {icon:css,name:"css3"},
        {icon:sass,name:"scss"},
        {icon:boot,name:"bootstrap"},
        {icon:mater,name:"materilize"},
        {icon:ionic,name:"ionic"},
    ]
    const scripting= [
        {icon:jscript,name:"Java script"},
        {icon:node,name:"node js"},
        {icon:sql,name:"My Sql"},
    ]
    const projmanagement= [
        {icon:gitlab,name:"git lab"},
        {icon:git,name:"git hub"},
    ]
   const [data, setData] = useState([])
   const [toggle, setToggle] = useState("1")
   useEffect(()=>{
    setData(prog)
   },[])

     return(
         <div>
            <div className="row">
                <div className="col-sm-12 col-lg-12 headskill">Skill and Project management</div>
                <div className="col-lg-5 col-sm12 over-flows " >
                    <div className={`${toggle==1?"technologies box_shade":"technologies"}`} onClick={()=>{setData(prog);
                    setToggle("1")}}>programing languages</div>
                    <div className={`${toggle==2?"technologies box_shade":"technologies"}`} onClick={()=>{setData(front);
                    setToggle("2")}}>Front end technologies</div>
                    <div className={`${toggle==3?"technologies box_shade":"technologies"}`} onClick={()=>{setData(design);
                    setToggle("3")}}>desigining frameworks</div>
                    <div className={`${toggle==4?"technologies box_shade":"technologies"}`} onClick={()=>{setData(scripting);
                    setToggle("4")}}>scripting and database</div>
                    <div className={`${toggle==5?"technologies box_shade":"technologies"}`} onClick={()=>{setData(projmanagement);
                    setToggle("5")}}>project management</div>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className="skillcontainer">
                            {data && data.length>0?(data.map((e,i)=>{
                                return(
                                    <div key={i} className="skillshow box_shade" >
                                        <img alt="icon" src={e.icon} className="skillicons box_shade" /><div className="skillname">{e.name}</div>
                                    </div>
                                )
                            })):null}
                    </div>
                </div>
            </div>
         </div>
     )
 }