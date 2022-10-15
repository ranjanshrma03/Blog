import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ICategory } from '../types';

interface IPropTypes {
    categories: ICategory[];
}

const Tabs = ({ categories }: IPropTypes) => {

    const router = useRouter();
    console.log(router)


    return (
        <div className='my-8 flex items-center justify-between border-b-2 border-gray-100'>
            <ul className='flex items-center'>
                <li className={'mr-6 pb-6 border-b-4 rounded-sm ' + `${router.pathname == '/' ? 'border-primary text-primary' : 'border-white text-gray-400'
                    }`}>
                    <Link href="#">
                        Recent
                    </Link>
                </li>
                {
                    categories.map(category => {
                        return (
                            <li key={category.id} className='mr-6 pb-6 border-b-4 rounded-sm'>
                                <Link href='#'>{category.attributes.Title}</Link>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Tabs;