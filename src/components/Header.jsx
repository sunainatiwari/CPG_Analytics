import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end p-4">
      <FaUserCircle size={30} className="cursor-pointer"
       onClick={() => navigate('/login')} />
    </div>
  );
};

export default Header;
