import React from "react";
import "./TemplatesPage.css";

const TemplatesPage = () => {
  return (
    <div className="templates-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img
            src="./logo.png"
            alt="LegalEase Logo"
            className="logo-img"
          />
        </div>

        <nav className="sidebar-nav">
          <p>Dashboard</p>
          <p>Idk some other option</p>
          <p>Another option</p>
          <hr />
          <p>Document 1</p>
          <p>Document 2</p>
          <p>Document 3</p>
          <p>Document 4</p>
          <hr />
          <p>Drafts</p>
          <p>Recently Deleted</p>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar"></div>
            <div>
              <p>lalala</p>
              <span>lalala@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <img
            src="./nova.png"
            alt="user avatar"
            className="profile-pic"
          />
          <p>Hey there! Choose template :O</p>
        </header>

        <div className="templates-grid">
          <div className="template-card">Land Ownership Documents</div>
          <div className="template-card">Work Experience Certificate</div>
          <div className="template-card">Affidavit of Residence</div>
          <div className="template-card">Rental Agreement</div>
          <div className="template-card">Bonafide Certificate</div>
          <div className="template-card add-card">+</div>
        </div>
      </main>
    </div>
  );
};

export default TemplatesPage;
