import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

registerBlockType('heading-block/heading', {
    title: __('Custom Heading', 'heading-block'),
    icon: 'heading',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        level: {
            type: 'number',
            default: 2
        }
    },
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        const { content, level } = attributes;

        return (
            <div {...blockProps}>
                <RichText
                    tagName={`h${level}`}
                    value={content}
                    onChange={(content) => setAttributes({ content })}
                    placeholder={__('Enter heading text...', 'heading-block')}
                />
            </div>
        );
    },
    save: ({ attributes }) => {
        const blockProps = useBlockProps.save();
        const { content, level } = attributes;

        return (
            <div {...blockProps}>
                <RichText.Content
                    tagName={`h${level}`}
                    value={content}
                />
            </div>
        );
    }
}); 