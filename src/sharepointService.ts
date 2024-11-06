import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

const siteUrl = process.env.SHAREPOINT_SITE_URL;
const listName = process.env.SHAREPOINT_LIST_NAME;

export async function getFormDigest(): Promise<string> {
    const response = await fetch(`${siteUrl}/_api/contextinfo`, {
        method: "POST",
        headers: {
            "Accept": "application/json;odata=verbose",
        },
    });
    const data = await response.json();
    // @ts-ignore
    return data.d.GetContextWebInformation.FormDigestValue;
}

export async function addLeadToSharePoint(leadData: { title: string }) {
    const formDigestValue = await getFormDigest();
    const endpoint = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose",
            "X-RequestDigest": formDigestValue,
        },
        body: JSON.stringify({
            __metadata: { type: `SP.Data.${listName}ListItem` },
            Title: leadData.title,
            // Add other fields as necessary
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error adding data:", errorData);
        throw new Error("Failed to add data to SharePoint");
    }

    const result = await response.json();
    console.log("Data added successfully:", result);
    return result;
}
