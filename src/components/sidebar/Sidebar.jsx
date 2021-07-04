import "./sidebar.css"
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, School, WorkOutline, Event } from "@material-ui/icons"

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarWrapper">
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <RssFeed className="sidebarIcon" />
                  <span className="sidebarListItemText">Feed</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <Chat className="sidebarIcon" />
                  <span className="sidebarListItemText">Chats</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <PlayCircleFilled className="sidebarIcon" />
                  <span className="sidebarListItemText">Videos</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <Group className="sidebarIcon" />
                  <span className="sidebarListItemText">Groups</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <Bookmark className="sidebarIcon" />
                  <span className="sidebarListItemText">Bookmarks</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <HelpOutline className="sidebarIcon" />
                  <span className="sidebarListItemText">Questions</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  <span className="sidebarListItemText">Jobs</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <Event className="sidebarIcon" />
                  <span className="sidebarListItemText">Events</span>
               </li>
            </ul>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <School className="sidebarIcon" />
                  <span className="sidebarListItemText">Courses</span>
               </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
                  <span className="sidebarFriendName">Safak Kocaoglu</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                  <span className="sidebarFriendName">Janell Shrum</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
                  <span className="sidebarFriendName">Alex Durden</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/7.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/8.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/9.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/10.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Doe</span>
               </li>
            </ul>
         </div>
      </div>
   )
}
