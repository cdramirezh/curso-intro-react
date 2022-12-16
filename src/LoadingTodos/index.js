import React from 'react';
import ContentLoader from "react-content-loader"

// import "./someCssFile";

// Skeleton built with https://skeletonreact.com/

function LoadingTodos(props){
    return(
        <ContentLoader 
            speed={2}
            width={400}
            height={150}
            viewBox="0 0 400 150"
            backgroundColor="#d9d9d9"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="85" y="38" rx="5" ry="5" width="299" height="60" /> 
            <rect x="9" y="38" rx="0" ry="0" width="59" height="59" /> 
            <circle cx="357" cy="38" r="17" />
        </ContentLoader>
    )
}

export { LoadingTodos };