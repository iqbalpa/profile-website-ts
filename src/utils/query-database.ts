import { Client } from "@notionhq/client";
// import dotenv from "dotenv";

// dotenv.config();

// const apiKey = process.env.NOTION_API_KEY;
const apiKey = "secret_0dMRkxVpmwDsaSeln4JuXWz0ceNrAWU2BcRCxCK4qln";

const notion = new Client({ auth: apiKey });

async function queryDatabase(databaseId: string) {
	try {
		console.log("Querying database...");
		const data = await notion.databases.query({
			database_id: databaseId,
		});
		console.log("The data");
		console.log(data);
	} catch (error) {
		console.error("Error querying database:", error);
	}
}

const RetrieveData = async () => {
	// const databaseId = process.env.NOTION_DATABASE_ID;
	const databaseId = "61ab6930256d4424b2fce96b9bd768f0";
	console.log(databaseId);
	// If there is no ID (if there's an error), return.
	if (!databaseId) return;

	// After adding pages, query the database entries (pages)
	queryDatabase(databaseId);
};

export default RetrieveData;
