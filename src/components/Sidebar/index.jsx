import React from "react";
import "./index.css";

const Sidebar = ({channels, activeChannel, setActiveChannel}) => {
  return (
    <aside className="sidebar" aria-label="Workspace and conversations">
      <section className="sidebar-profile" aria-label="Your profile">
        <div className="profile-avatar" aria-hidden="true">
          BB
          <span className="online-indicator" />
        </div>
        <div className="profile-details">
          <strong>Babar</strong>
          <span>Python Full Stack Developer</span>
        </div>
      </section>

      <nav className="conversation-nav" aria-label="Conversations">
        <h2>Conversations</h2>
        <ul>
          {channels.map(channel => (
            <li key={channel}>
              <button
                className={`channel-item${activeChannel === channel ? " active" : ""}`}
                type="button"
                aria-current={activeChannel === channel ? "page" : undefined}
                onClick={() => setActiveChannel(channel)}
              >
                <span className="channel-hash" aria-hidden="true">#</span>
                <span>{channel}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;