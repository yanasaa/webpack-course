import path from 'path'
import webpack from 'webpack'
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugings';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths, port } = options
    const isDev = mode === 'development';

    return { 
        mode: mode ?? 'development',
        entry: paths.entry,
        
        output: { 
            filename: '[name].[contenthash].js', 
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}