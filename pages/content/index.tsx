import React from 'react';

const Content = () => {
    const [content, setContent] = React.useState<any>([]);
    const handleContent = () => {
        const html = (
            <div contentEditable={true}>
                <p>55688</p>
            </div>
        );
        setContent((prevState) => [...prevState, { html: html }]);
    };
    const contentRef = React.useRef();
    // const stringContent = JSON.stringify(contentRef.current);
    if (contentRef.current) {
        const test = contentRef.current as any;
        console.log('contentRef', test.innerHTML);
    }
    // console.log('stringContent', stringContent);
    // console.log('123', contentRef.current);

    return (
        <>
            <div>
                <button onClick={handleContent} className='m-8 p-4 text-white bg-amber-800 hover:bg-sky-700 rounded-lg'>
                    Click to generate
                </button>
            </div>
            <div ref={contentRef}>
                {content.map((v, i) => {
                    return v.html;
                })}
            </div>
        </>
    );
};

export default Content;
