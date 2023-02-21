import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { lazy } from 'react';
const Home = lazy(() =>
    import('./utils/wait.js').then((module) => {
        return module.wait(1000).then(() => import('./components/Home'));
    }),
);
const Comment = lazy(() =>
    import('./utils/wait.js').then((module) => {
        return module.wait(1000).then(() =>
            import('./components/Comment').then((module) => {
                return { default: module.Comment };
            }),
        );
    }),
);
const About = lazy(() =>
    import('./utils/wait.js').then((module) => {
        return module.wait(1000).then(() => import('./components/About'));
    }),
);
function App() {
    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/comment" element={<Comment />} />
            </Route>
        </Routes>
        // </BrowserRouter>
    );
}

export default App;
