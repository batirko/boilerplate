const Airtable = require('airtable');

const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const tablePages = base(process.env.AIRTABLE_TABLE_PAGES);

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
    return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

export default async function getData(page) {
    // get data for specific page
    const pages = await tablePages.select({
        filterByFormula: `{PageName} = "${page}"`
    }).all();

    //get list of pages for static paths
    const allPages = await tablePages.select({
        fields: ["PageName"]
    }).all();

    const minifiedAllPages = await getMinifiedRecords(allPages);

    const returnPages = [];
    minifiedAllPages.forEach(page => {
        returnPages.push(page.fields.PageName)
    })

    const minifiedPages = await getMinifiedRecords(pages);


    return { allPages: returnPages, page: minifiedPages[0] };
}

