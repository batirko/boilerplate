/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
    images: {
        domains: ['dl.airtable.com'],
    },
    env: {
        // eslint-disable-next-line no-undef
        AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
        AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
        AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME
    }
}