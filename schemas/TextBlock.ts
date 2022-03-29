import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

export const TextBlock = {
    TextBlock: list({
        fields: {
            message: text({ validation: { isRequired: true } }),
        }
    })
}