import ReactMarkdown from "react-markdown";

// Custom component for styled text
const StyledText = ({ children }: any) => (
  <span className="purple" style={{ fontWeight: "bold" }}>
    {children}
  </span>
);

// Custom renderers to map Markdown elements to custom components
const renderers = {
  // Map strong (bold) elements to the StyledText component
  strong: ({ children }: any) => <StyledText>{children}</StyledText>,
};

const MarkdownContent = ({ data }: { data: string }) => (
  <ReactMarkdown components={renderers}>{data}</ReactMarkdown>
);

export default MarkdownContent;
