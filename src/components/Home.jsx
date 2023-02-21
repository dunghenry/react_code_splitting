import React, { Suspense, lazy, useTransition } from 'react';
import { lazyLoad } from '../lazyLoad';
// import { sum } from '../utils/sum';
// const AdminData = lazy(() =>
//     import('../utils/wait.js').then((module) => {
//         return module.wait(1000).then(() =>
//             import('./AdminData').then((module) => {
//                 return { default: module.AdminData };
//             }),
//         );
//     }),
// );
const AdminData = lazyLoad('./components/AdminData', 'AdminData');
const Home = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isPending, startTransition] = useTransition();
    const handleClick = () => {
        import('../utils/sum.js').then((module) => {
            //default
            alert(module.default(2, 2));
            // module.exports
            // alert(module.sum(2, 2));
        });
        // alert(sum(2, 2));
    };
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Alert sum</button>
            <button
                onClick={() =>
                    startTransition(() => {
                        setIsAdmin((prevState) => !prevState);
                    })
                }
            >
                Toggle Admin
            </button>
            {isPending && <h2>Loading...</h2>}
            <Suspense fallback={<h2>Loading...</h2>}>
                {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
            </Suspense>
        </div>
    );
};

export default Home;
