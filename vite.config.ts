import process from 'process';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    const root = process.cwd();
    const serveConfig = {
        port: 8888,
    } as const;
    return {
        root: `${root}/src`,
        server: serveConfig,
        preview: serveConfig,
        build: {
            target: 'esnext',
            outDir: `${root}/build`,
        },
    };
});
