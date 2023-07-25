import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <footer className="bg-blue-700 p-4">
           <div className='flex items-center justify-center text-white'>
           <CopyrightIcon></CopyrightIcon>
           <span>All rights reserved by CareerHub</span>
           </div>
        </footer>
    );
};

export default Footer;