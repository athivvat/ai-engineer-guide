import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
 
export const generateStaticParams = generateStaticParamsFor('mdxPath')
 
export async function generateMetadata(props: { params: Promise<{ mdxPath: string }> }) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath as unknown as string[])
  return metadata
}
 
const Wrapper = getMDXComponents({}).wrapper
 
export default async function Page(props: { params: Promise<{ mdxPath: string }> }) {
  const params = await props.params
  const result = await importPage(params.mdxPath as unknown as string[])
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}