import USER from '../../data/user.json';

const AppFooter = () => {
 

  return (
    <footer className="text-center text-xs md:text-md text-gray py-7">
      <p className="mb-1">Design & Build With &#128149; by {USER.name}</p>
      <p>copyright &copy; 2024</p>
    </footer>
  );
};

export default AppFooter;
