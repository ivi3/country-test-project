import React from 'react';

const Loading = () => {
    return (
        <div className="absolute inset-0 flex justify-center items-center animate-text mx-5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
            Fetching ...
        </div>
    );
};

export default Loading;