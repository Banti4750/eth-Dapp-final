import React from 'react';
import { House, LayoutDashboard, ArrowLeftRight, Clock4, DiamondPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavButton = ({ icon: Icon, label, onClick }) => (
  <button
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      borderRadius: '8px',
      transition: 'background-color 0.2s ease-in-out',
      outline: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3f3f46')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    onClick={onClick} // Attach the onClick handler passed from Footer
    aria-label={label}
  >
    <Icon size={24} style={{ color: '#a78bfa' }} />
  </button>
);

const Footer = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const navItems = [
    { icon: House, label: 'Home', route: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', route: '/receive' },
    { icon: ArrowLeftRight, label: 'Transfer', route: '/transfer' },
    { icon: Clock4, label: 'History', route: '/recent' },
    { icon: DiamondPlus, label: 'Add', route: '/add' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: '423px',
        height: '60px',
        backgroundColor: '#18181b',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        boxShadow: '0 4px 56px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        margin: '0 auto',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {navItems.map((item) => (
        <NavButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          onClick={() => navigate(item.route)} // Navigate to the route when clicked
        />
      ))}
    </nav>
  );
};

export default Footer;
