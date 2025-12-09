import React, { useState } from 'react';
import './Layout.css';

const Icons = {
  VaultLogo: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#0A0A14" /><path d="M7 8L10.5 16H13.5L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  ChevronDown: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>),
  ChevronUp: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>),
  Dashboard: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>),
  Nexus: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>),
  Intake: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>),
  ServicesBook: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>),
  InvoicesDoc: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>),
  PlayCircle: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>),
  Pause: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>),
  XCircle: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>),
  CheckCircle: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>),
};

const Layout = ({ children }) => {
  const [servicesOpen, setServicesOpen] = useState(true);
  const [invoicesOpen, setInvoicesOpen] = useState(true);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        
        <div className="sidebar-header-wrapper">
          <div className="sidebar-tenant-dropdown">
            <div className="tenant-logo"><Icons.VaultLogo /></div>
            <div className="tenant-info">
              <div className="tenant-name">Vault</div>
              <div className="tenant-user">Anurag Yadav</div>
            </div>
            <span className="tenant-caret"><Icons.ChevronDown /></span>
          </div>
          
        </div>

        <nav className="sidebar-nav">
          {/* Main Links */}
          <div className="nav-group">
            <button className="sidebar-link">
              <span className="sidebar-link-icon"><Icons.Dashboard /></span>
              <span className="sidebar-link-label">Dashboard</span>
            </button>
            <button className="sidebar-link">
              <span className="sidebar-link-icon"><Icons.Nexus /></span>
              <span className="sidebar-link-label">Nexus</span>
            </button>
            <button className="sidebar-link">
              <span className="sidebar-link-icon"><Icons.Intake /></span>
              <span className="sidebar-link-label">Intake</span>
            </button>
          </div>

          {/* Services Card */}
          <div className="sidebar-section-card">
            <button className="sidebar-section-header" onClick={() => setServicesOpen(!servicesOpen)}>
              <span className="sidebar-section-icon"><Icons.ServicesBook /></span>
              <span className="sidebar-section-title">Services</span>
              <span className="sidebar-section-caret">
                {servicesOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
              </span>
            </button>
            
            {servicesOpen && (
              <div className="sidebar-section-body">
                <button className="sidebar-sub-link">
                  <span className="sidebar-sub-icon"><Icons.PlayCircle /></span>
                  <span className="sidebar-sub-label">Pre-active</span>
                </button>
                <button className="sidebar-sub-link">
                  <span className="sidebar-sub-icon rotated-icon"><Icons.Pause /></span>
                  <span className="sidebar-sub-label">Active</span>
                </button>
                <button className="sidebar-sub-link">
                  <span className="sidebar-sub-icon"><Icons.XCircle /></span>
                  <span className="sidebar-sub-label">Blocked</span>
                </button>
                <button className="sidebar-sub-link">
                  <span className="sidebar-sub-icon"><Icons.CheckCircle /></span>
                  <span className="sidebar-sub-label">Closed</span>
                </button>
              </div>
            )}
          </div>

          {/* Invoices Card */}
          <div className="sidebar-section-card">
            <button className="sidebar-section-header" onClick={() => setInvoicesOpen(!invoicesOpen)}>
              <span className="sidebar-section-icon"><Icons.InvoicesDoc /></span>
              <span className="sidebar-section-title">Invoices</span>
              <span className="sidebar-section-caret">
                {invoicesOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
              </span>
            </button>

            {invoicesOpen && (
              <div className="sidebar-section-body">
                <button className="sidebar-sub-link active-sub"> 
                  <span className="sidebar-sub-icon"><Icons.InvoicesDoc /></span>
                  <span className="sidebar-sub-label">Proforma Invoices</span>
                </button>
                <button className="sidebar-sub-link">
                  <span className="sidebar-sub-icon"><Icons.InvoicesDoc /></span>
                  <span className="sidebar-sub-label">Final Invoices</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  )
}

export default Layout;