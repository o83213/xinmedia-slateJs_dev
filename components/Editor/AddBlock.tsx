import React from 'react';

const AddBlock = ({ insertContent, contentBlock }) => {
    return (
        <>
            <div className='ts-app-sidebar is-dense'>
                <button
                    className='item hover:bg-gray-500 hover:text-white rounded'
                    onClick={() => {
                        insertContent('text');
                    }}
                >
                    <span className='ts-icon is-plus-icon'></span> 新增文字
                </button>

                <button
                    className='item hover:bg-gray-500 hover:text-white rounded'
                    onClick={() => {
                        insertContent('image');
                        console.log('contentBlock', contentBlock);
                    }}
                >
                    <span className='ts-icon is-plus-icon'></span> 新增圖片
                </button>
                {/* {contentBlock.map((content) => content.html)} */}
                <button className='item hover:bg-gray-500 hover:text-white rounded'>
                    <span className='ts-icon is-plus-icon'></span> 新增影片
                </button>
            </div>
        </>
    );
};

export default AddBlock;
