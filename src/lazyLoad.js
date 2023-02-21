import { lazy } from 'react';
export function lazyLoad(path, namedExport) {
    return lazy(() => {
        let promise = import(`${path}`);
        if (namedExport && path) {
            return promise.then((module) => ({ default: module[namedExport] }));
        }
        promise = import(`./components/Default`);
        namedExport = 'Default';
        return promise.then((module) => ({ default: module[namedExport] }));
    });
}
