import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='max-w-[1500px] w-[90%] mx-auto my-6 flex justify-between items-center border-b-2 pb-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;