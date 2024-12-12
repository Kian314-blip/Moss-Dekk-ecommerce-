// import Collapse from './Collapse';

// const CollapseContainer: React.FC = () => {
//   const items = [
//     { title: 'What are my options?', content: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.' },
//     { title: 'Can I switch to a different plan?', content: 'Content for switching plans.' },
//     { title: 'Do you offer non-disclosure signature?', content: 'Content for non-disclosure signature.' },
//     { title: 'Do you issue refunds?', content: 'Content for refunds.' },
//   ];

//   return (
//     <div className="bg-black text-white p-4">
//       {items.map((item, index) => (
//         <Collapse key={index} title={item.title} content={item.content} />
//       ))}
//     </div>
//   );
// };

// export default CollapseContainer;

import React, { useState } from 'react';
import Collapse from './Collapse';
import Plus from '@/svg/Plus';
import Minus from '@/svg/Minus';
interface Item {
    title: string;
    content: string;
}

const CollapseContainer: React.FC = () => {
    const items: Item[] = [
        { title: 'What are my options?', content: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.' },
        { title: 'Can i switch to a different plan?', content: 'Content for switching plans.' },
        { title: 'Do you offer non-disclosure signature?', content: 'Content for non-disclosure signature.' },
        { title: 'Do you issue refunds?', content: 'Content for refunds.' },
    ];

    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        // <div className="text-white gap-y-[36px]">
            <div className='flex flex-col gap-y-[36px] collapse-container'>
                {items.map((item, index) => (
                    <div key={index} className="border-b border-gray-700 collapse-item">
                        <div
                            className="flex justify-between items-center cursor-pointer gap-[36px] collapse-item-header"
                            onClick={() => handleToggle(index)}
                        >
                            <p className="text-2xl font-semi-bold text-white font-['Inter'] leading-loose">{item.title}</p>
                            <span>{openIndex === index ? <Minus /> : <Plus />}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 collapse-item-content ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="pt-[17px] pr-[44px] pb-[27px] w-[680px] collapse-item-main-content">
                                <p className='text-white text-lg font-normal font-["Inter"] leading-7'>{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        // </div>
    );
};

export default CollapseContainer;
