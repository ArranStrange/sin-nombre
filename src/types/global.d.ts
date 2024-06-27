declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare global {
  interface NodeRequire {
    context(
      path: string,
      deep?: boolean,
      filter?: RegExp
    ): __WebpackModuleApi.RequireContext;
  }
}
