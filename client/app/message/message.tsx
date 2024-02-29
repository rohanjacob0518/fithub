"use client"
import "./style.css"
export default function SendMessage(){
    return(
        <>
        	<div className="container">
      {/* <div classN="nav-bar">
      	<a>Chat</a>
        <div className="close">
         	<div className="line one"></div>
         	<div className="line two"></div>
        </div>
      </div> */}
      <div className="messages-area">
        
        <div className="message one"></div>
        <div className="message two"></div>
        <div className="message three"></div>
        <div className="message four"></div>
        <div className="message five"></div>
        <div className="message six"></div>
      </div>
      <div className="sender-area">
        <div className="input-place">
        	<input placeholder="Send a message." className="send-input" type="text"/>
            {/* send button */}
            <div className="send">
                <button
                    onClick={()=>{alert("coming soon")}}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>
                </button>
			</div>
      	</div>
      </div>
    <div></div></div>
        </>
    )
}