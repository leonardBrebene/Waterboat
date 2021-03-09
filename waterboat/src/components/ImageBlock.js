import React from 'react';
import './ImageBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





function ImageBlock(props) {
     let className ="image-block "; /* primul className primeste clasa image-block pentru imageblock.cs*/
      
     if(props.className){
         className+=props.className
     }
    
    
    
    return (
        
            <div className={className} >{/* 2 clase image-block si size-32*/}
                    <div className="emoticon"><FontAwesomeIcon icon={props.emoticon}/></div>
                    <div className="titlu">{props.titlu}</div>
                    <div className="content">{props.content}</div>
                    <img 
                        className="image-block-image"
                        src={props.imgSrc}
                        alt=""> 
                        </img>
            </div>
           
        
        );
}

export default ImageBlock;
