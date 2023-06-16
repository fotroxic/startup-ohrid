import Link from "next/link";
import messagesdb from "../../database/messages.json"

export default function index() {
  return (
    <div className="dashboard">
        <div className="dasboard__container">
                <h1>
                    Admin dashboard
                </h1>
                <div className="dashboard__information">
                    <div className="dashboard__links">
                       <p> <Link href="#">User Info</Link></p>
                       <p> <Link href="#">Messages</Link></p>
                        <p><Link href="#">Emails</Link></p>
                    </div>
                  
             <div className="info__section">
             <div className="info__left">
                    {messagesdb.messages.map((message, index) => {
                        return(
                            <div key={index}>
                                <div className="messages__box">
                                    <div className="usermessage" key={message.id}>
                                        <p className="username">{message.username}</p>
                                        <p>{message.messageprev}</p>
                                    </div>


                                </div>
                                </div>
                        )
                        }
                    )
}
                    

                    </div>
                    <div className="info__right">
                            <div className="info__right__container">
                                {messagesdb.messages.map((message,index)=>
                                {
                                 if(message.id==1)   return(
                                        <div key={index}>
                                            <div className="sel__user__message" key={message.id}>
                                                <p className="username">{message.username}</p>
                                                <p className="usermessageprivate">{message.messageprev}</p>
                                            </div>
                                            
                                        </div>

                                    )
                                })}
                                <p> </p>

                            </div>
                            <div className="send__message">
                                <form className="message__form">
                                    <input type="text"></input>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                    </div>

             </div>
                </div>
        </div>
    </div>
  )
}
