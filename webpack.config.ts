import path from 'path';
import webpack from 'webpack';
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
  mode: BuildMode,
  port?: number,
  platform?: BuildPlatform;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    platform: env.platform ?? 'desktop',
    analyzer: env.analyzer
  })
  return config;
};