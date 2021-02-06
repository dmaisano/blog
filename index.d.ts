declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

// declare module "*.mdx" {
//   const value: string
//   export default value
// }
