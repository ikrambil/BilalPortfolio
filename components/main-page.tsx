import React from 'react';

const MainPage = () => {
    return (
        <main className="text-center p-8 text-gray-300 bg-black font-termina antialiased">
            <a className="block text-6xl font-bold self-center justify-self-center" aria-label="Wave logo homepage">~</a>
            <h2 className="text-base font-semibold p-4"><div className="inline-block">Creative WebGL Blobs</div></h2>
            <nav className="mb-4">
                <div className="inline-block overflow-hidden"><a href="index.html" className="inline-block">demo 1</a></div>
                <div className="inline-block overflow-hidden ml-4"><a href="index2.html" className="inline-block">demo 2</a></div>
                <div className="inline-block overflow-hidden ml-4"><a href="index3.html" className="inline-block">demo 3</a></div>
            </nav>
            <nav className="mb-4">
                <div className="inline-block overflow-hidden"><a href="https://tympanus.net/Development/OnScrollLetterAnimations/" className="inline-block">Previous demo</a></div>
                <div className="inline-block overflow-hidden ml-4"><a href="https://tympanus.net/codrops/?p=52932" className="inline-block">Article</a></div>  
                <div className="inline-block overflow-hidden ml-4"><a href="https://github.com/codrops/WebGLBlobs" className="inline-block">GitHub</a></div>
            </nav>
            <div className="font-dystopian font-bold text-9xl mb-1"><div>Bilal Ikram</div></div>
            <div className="text-4xl mb-2 font-thin"><div>Software Developer</div></div>
            <p className="text-lg mb-8">
                <span className="block">The main reliance, however, in the Emmanuel treatment is on faith, reinforced first by hetero-suggestion and then by patient and persistent auto-suggestion. The man who would be permanently free from insomnia must be an optimist. He must have a philosophy of life wholesome enough to keep him buoyant, cheerful, and serene amid all the changes and the chances of this mortal life.</span>
            </p>
            <span className="text-8xl">&#9658;</span>
            <a className="block mt-8" href="https://twitter.com/codrops"><div>@codrops</div></a>
            <span className="block mt-8"><div>Made by <a href="https://twitter.com/marioecg">Mario Carrillo</a></div></span> 
            <div className="mt-8"><div>2021</div></div>
        </main>
    );
};

export default MainPage;
