import { addLeadToSharePoint } from "./sharepointService";

(async () => {
    try {
        const leadData = { title: "New Lead" };
        await addLeadToSharePoint(leadData);
    } catch (error) {
        console.error("Error:", error);
    }
})();
