import SlateEditor from '@root/components/Editor';
import AddBlock from '@root/components/Editor/AddBlock';
import { useState } from 'react';
import { createEditor, Descendant, Text } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import React from 'react';
import CustomElement from '@root/components/Editor/elements/CustomElement';

import Leaf from '@root/components/Editor/elements/Leaf';
import { keycommand } from '@root/components/Editor/utils/hotkeys';
import HoverToolbar from '@root/components/Editor/HoverToolbar';
import SideToolbar from '@components/Editor/SideToolbar';
import { withImages } from '@root/components/Editor/elements/Image';
import { withLinks } from '@root/components/Editor/elements/Link';
import { withEditableCards } from '@root/components/Editor/elements/EditableCard';
import Normalize from '@components/Editor/utils/normalize';
import { withEmbeds } from '@root/components/Editor/elements/Embed';
import { withHtml } from '@root/components/Editor/elements/InsertHTML';
import SearchHighlighting from '@root/components/Editor/elements/SearchHighlighting';
const Home = () => {
    const [contentBlock, setContentBlock] = useState([]);

    //段落設定
    const { withLayout } = Normalize;
    //初始參數
    const initialValue: Descendant[] = [
        {
            type: 'title',
            children: [{ text: '在此輸入標題' }],
        },
        {
            type: 'paragraph',
            children: [{ text: '開始寫作吧!' }],
        },
    ];
    //value 讀取LocalStorage 是否有內容，若無則調用初始設定
    const [value, setValue] = React.useState<Descendant[]>(JSON.parse(typeof window !== 'undefined' && localStorage.getItem('content')) || initialValue);
    //(JSON.parse(typeof window !== 'undefined' && localStorage.getItem('content')) || initialValue)
    //讀取LocalStorage
    // 初始editor 設定，使用官方提供的useMemo 撰寫，在熱開發狀態會報錯
    const editorRef = React.useRef<any>();
    if (!editorRef.current)
        editorRef.current = withLayout(withHtml(withEmbeds(withEditableCards(withLinks(withImages(withHistory(withReact(createEditor()))))))));
    const editor = editorRef.current;

    //CustomElement 切換 ，使用useCallback減少FC多餘呼叫
    const renderElement = React.useCallback((props) => <CustomElement {...props} />, []);
    //Format text style控制
    const renderLeaf = React.useCallback((props) => <Leaf {...props} />, []);

    // search bar的相關設定
    const [search, setSearch] = React.useState<string | undefined>();
    const decorate = React.useCallback(
        ([node, path]) => {
            const ranges = [];
            if (search && Text.isText(node)) {
                const { text } = node;
                const parts = text.split(search);
                // console.log('parts', parts); // ['雄獅資訊']
                let offset = 0;

                parts.forEach((part, i) => {
                    // console.log('part', part); // 未被選到的字
                    // console.log('i', i); // 有幾個詞或字與搜尋bar的一樣
                    if (i !== 0) {
                        ranges.push({
                            anchor: { path, offset: offset - search.length },
                            focus: { path, offset },
                            highlight: true,
                        });
                    }
                    offset = offset + part.length + search.length;
                });
            }

            return ranges;
        },
        [search],
    );

    const insertContent = (format) => {
        const id = Math.random().toString();
        let html;
        let textArea;
        switch (format) {
            case 'text': {
                textArea = (
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        autoFocus
                        spellCheck={false}
                        decorate={decorate}
                        // onKeyDown={(e) => {
                        //     keycommand(e, editor);
                        // }}
                    />
                );
                break;
            }
            case 'image': {
                html = (
                    <div key={id} id={id}>
                        你好 <img src='https://tree.eduhk.hk/images/Tree.png' alt='' />
                    </div>
                );
                break;
            }
        }
        setContentBlock((prevState) => [...prevState, { id: id, html: html, textArea: textArea }]);
    };

    return (
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <h1 className='text-center mt-7 text-indigo-500'>SlateEditor Example </h1>
            <p className='text-center text-blue-700 my-4 underline decoration-1'>
                <a href='https://github.com/Wen19970509/slateEditor-nextjs-example.git' target='_blank'>
                    GitHub
                </a>
            </p>
            <div className='flex flex-grow'>
                <div className='w-2/12 fixed z-20'>
                    <AddBlock insertContent={insertContent} contentBlock={contentBlock} />
                </div>
                <div className='px-72 flex-grow flex-row flex'>
                    <div className='bg-white flex-grow'>
                        <SlateEditor
                            contentBlock={contentBlock}
                            editor={editor}
                            setSearch={setSearch}
                            renderElement={renderElement}
                            renderLeaf={renderLeaf}
                            decorate={decorate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
