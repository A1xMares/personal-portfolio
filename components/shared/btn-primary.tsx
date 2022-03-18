const BtnPrimary = ({ children, darkMode }) => {
    return (
        <button className={`px-6 py-4 rounded-md border-solid border-2 transition-colors 
                            ${darkMode ? 'border-violet-300 hover:bg-indigo-800' : 'border-gray-600 hover:bg-gray-200'}`}>
            <p className="leading-none font-bold"> {children} </p>
        </button>
    );
}

export default BtnPrimary;