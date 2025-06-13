import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import HeadingEdit from './components/HeadingEdit';
import HeadingSave from './components/HeadingSave';

registerBlockType('heading-block/heading', {
    title: __('Custom Heading', 'heading-block'),
    icon: 'heading',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
        level: {
            type: 'number',
            default: 2,
        },
    },
    edit: HeadingEdit,
    save: HeadingSave,
}); 