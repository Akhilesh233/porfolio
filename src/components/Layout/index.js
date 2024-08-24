import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import { Suspense } from 'react';
import './index.scss';

const Layout = () => {
    return (
        <>
            <div className='App'>
                <Sidebar />
                <div className='page'>
                    <span className='tags top-tags'>&lt;body&gt;</span>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                    <span className='tags bottom-tags'>&lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span>
                </div>
            </div>
        </>
    )
};

export default Layout