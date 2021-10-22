import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import Video from './Video';
import BeforeFooter from './BeforeFooter';
import { useDispatch, useSelector } from 'react-redux';
import { commentVideo } from '../Actions/VideoActions';
import Comment from './Comment'
import AvatarList from './AvatarList';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function VidsComponent({videos=[{}]}) {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const [showAddComment, setShowAddComment] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [i, setI] = useState(0);
    let data = [];
    const comment = ()=>{
        if(userLogin.id&&commentText.length>0){
            videos.map(video=>{
                if(video.id===i){
                    video.AllComments.push({user_id:userLogin.id,video_id:video.id,text:commentText,name:userLogin.username})
                    video.comments++;
                    dispatch(commentVideo(userLogin.id,video.id,commentText))
                    setCommentText("")
                }
            })
        }
    }
    const handleKeyPress = (e)=>{
        if(userLogin.id){            
            if(e.key === "Enter"){
                comment()
            }
        }
    }
    const handleVideoComments = (id)=>{
        data = videos.map(video=>{
            if(video.id=== id){
                return (video.AllComments&&video.AllComments.length>0?(
                        video.AllComments.map(item=>(
                        <Comment name={item.name}id={item.user_id}  text={item.text} followed={item.followed}/>
                    ))
                ):(
                    <p className="comment-first">Be the first one to comment ! {videos.id}</p>
                  )
                )
            }
        }).filter(item=>item!==undefined);
        return data;
    }
    return (
        <>
        <div className="login-now">Login to show the world  your talents! </div>
        <div className="vids">

<div className="before-footer">
                 <div className="hhead"><h1>Trending Videos <i class="fas fa-fire"></i></h1>
                 <div className="hlst">
                            <div className="hpeople">
                                <img  className="hpeopleimg" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Short Movies   <p>Tracy</p>   <i class="far fa-eye">  25000</i></span>
                            </div>
                            <div className="hpeople">  <img className="hpeopleimg"  src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names"> Dance Moves  <p>Jasper Class</p> <i class="far fa-eye"> 24000</i></span>
                            </div>
                            <div className="hpeople">   <img className="hpeopleimg"  src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sad Song <p>William Ford</p> <i class="far fa-eye"> 20000</i></span>
                            </div>
                            <div className="hpeople">    <img className="hpeopleimg"  src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Ballet <p>Dance Group</p> <i class="far fa-eye">19000</i></span>
                            </div>
                        </div>
            </div>
            <div className="seall">
            <a href="#">See All <i class="fas fa-angle-double-right"></i></a>
            </div>
                
            <div className="hhead"><h1>Discover Channels <i class="far fa-compass"></i></h1></div>
          
  <AvatarList/>
  <AvatarList/>
  <AvatarList/>
  <div className="seall">
            <a href="#">See All <i class="fas fa-angle-double-right"></i></a>
            </div>


  




            </div>


            <div className="display">
                <div className="frs">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                    
                    <span className="posttt">Tracy<br/><p style={{fontSize:"9px" , color:"white",marginTop:"-0rem"}}>Short Movie</p></span></div>
            <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                navigation={true}
                className="swiper"
            >
            {
                videos.length>0&&videos.map(item=>(
                   <SwiperSlide>
                    {({ isActive }) => {
                        setTimeout(() => {
                            if(isActive){
                                setI(item.id);
                            }
                        }, 100);
                        return <Video vid={item} playVid={isActive}/>
                    }}
                     
                    </SwiperSlide> 
                ))
            }
             </Swiper>
                
                <div class="dropdown" style={{display:"flex", flexDirection:"row"}}>
                <p>Choose your category: </p>
                    <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Sports</a>
                    <a href="#">Drama</a>
                    <a href="#">Fantasy</a>
                    <a href="#">Comedy</a>
                    <a href="#">Science</a>
                </div>
                </div>

            </div>*/
             <div className="comments">
                <h1><i className="fa fa-comment fa-2x"></i></h1>
                <div className="all-comments">
                    {handleVideoComments(i)}
                </div>

                <div className="add-comment">
                    <div className="toggle-add-comment" onClick={()=>setShowAddComment(!showAddComment)}>
                        <i className={`fa fa-${showAddComment?'close':'plus'}`}></i>
                    </div>
                    {showAddComment&&(
                        <>
                        <input type="text" placeholder="add a comment here!" autoFocus value={commentText} onKeyPress={e=>handleKeyPress(e)} onChange={e=>setCommentText(e.target.value)}/>
                        <i className="fa fa-send" onClick={comment}></i>
                        </>
                    )}
                </div>

        </div>
            

        </div></>
    )
}
