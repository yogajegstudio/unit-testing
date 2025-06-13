import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const HeadingEdit = ({ attributes, setAttributes }) => {
    const { content, level } = attributes;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <RichText
                tagName={`h${level}`}
                value={content}
                onChange={(newContent) => setAttributes({ content: newContent })}
                placeholder={__('Enter heading text...', 'heading-block')}
            />
        </div>
    );
};

export default HeadingEdit; 