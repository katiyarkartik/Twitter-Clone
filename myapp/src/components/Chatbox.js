import React from "react";
import "./Chatbox.css";
import reciever from "../images/dp.jpg";
import { IoArrowRedo } from "react-icons/io5";
const Chatbox = () => {
  return (
    <div className="chatbox">
      <div className="chatbox-container">
        <div className="left-chatbox">
          {/* <div className="chatbox-searchbox">
            <input type="text" placeholder="Search" />
          </div> */}
          <p className="message-header">
            <p>Messages</p>
            {/* <div className="message-divider"></div> */}
          </p>

          <div className="chatbox-user-list">
            <ul className="user-chat-list">
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
              <li className="chat-user">
                <div className="chat-user-img">
                  <img src={reciever} alt="" srcset="" />
                  <div className="recievers-data">
                    <p>@anajames</p>
                    <p className="status">Available</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-chatbox">
          <div className="chatting-box">
            <div className="reciever-info-box">
              <img src={reciever} alt="" />
              <div className="reciever-details">
                <p>@anajames</p>
              </div>
            </div>
            <div className="messages-box">
              <div className="send-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quos sint. Repudiandae impedit at minima molestias beatae, maiores quae. Ab minima laudantium magni sed dolor placeat cupiditate, eius repellat inventore magnam ad odio numquam reiciendis maiores consequuntur ipsum, aspernatur praesentium officia! Sed provident suscipit dicta consectetur molestias ex excepturi ipsum in modi voluptatum veniam eos rerum necessitatibus natus ratione quia dolorem alias nam porro non est exercitationem, vitae praesentium aut? Ullam voluptatem dolorem itaque voluptatibus aspernatur officiis, illo maxime nam eos. Neque, doloribus porro quia cumque magni optio voluptas maxime rem iure ipsam laborum deleniti vero a ut explicabo qui.</div>
              <div className="recieve-msg">Lorem ipsum dolor sit amet,</div>
              <div className="send-msg"></div>
              <div className="recieve-msg"></div>
              <div className="send-msg"></div>
              <div className="recieve-msg"></div>
              <div className="send-msg"></div>
              <div className="recieve-msg"></div>
              <div className="send-msg"></div>
              <div className="recieve-msg"></div>
            </div>
            <div className="type-box">
              <input type="text" name="" placeholder="Message" id="" />
              <button>
                <IoArrowRedo />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
