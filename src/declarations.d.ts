// fixing css module type error
declare module '*.css';
// fixing svg type error
declare module "*.svg" {
    const content: any;
    export default content;
}
// fixing png type error
declare module '*.png';