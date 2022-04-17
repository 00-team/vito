import { Configuration } from 'webpack'
import Base from './base'

// path
import { SRC_DIR, LIB_DIR } from './config/path'

// style
import { BuildStyle } from './config/style'

// plugins
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const Config: Configuration = {
    ...Base,
    mode: 'production',
    entry: SRC_DIR,
    output: {
        path: LIB_DIR,
        clean: true,
        filename: 'index.js',
        sourceMapFilename: 'source_maps/[file].map',
        library: {
            name: '@00-team/jordan',
            type: 'umd',
            umdNamedDefine: true,
        },
    },
    module: { rules: [...Base.module!.rules!, BuildStyle] },
    externals: {
        react: 'react',
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimize: true,
        emitOnErrors: false,
    },
}

export default Config
