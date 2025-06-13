import { useBlockProps, RichText } from '@wordpress/block-editor';

const HeadingSave = ({ attributes }) => {
    const { content, level } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <RichText.Content
                tagName={`h${level}`}
                value={content}
            />
        </div>
    );
};

export default HeadingSave; 