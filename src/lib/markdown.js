import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

export const markdownPlugins = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw, rehypeHighlight],
};