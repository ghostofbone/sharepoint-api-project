

const createNewItem = async () => {
    const url = "https://graph.microsoft.com/v1.0/sites/hahnpro-my.sharepoint.com,929b4851-d123-419f-bf5f-5e0e83b92225,450b0b14-ab1b-4910-aaa9-c7075d5d9d25/lists/03f6c12c-7a6f-4ca5-9d77-bd3ab74862b5/items";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IlZaZXFzVWVrOHJ3cFdnVk9yTEZ3dGp5VHhyeG1HU0ZvbzBGZE5uR1hEaVEiLCJhbGciOiJSUzI1NiIsIng1dCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCIsImtpZCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jMDc1ZTdhOC1kYTdmLTRiNTYtYWU1My0yMTI4ZWM1NGExM2QvIiwiaWF0IjoxNzMwODgzNzQ1LCJuYmYiOjE3MzA4ODM3NDUsImV4cCI6MTczMDk3MDQ0NSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFZUUFlLzhZQUFBQU9CZFBkZW1IbDYxamZ1TkhZRUpZVnBPTUVEWVcvSXNwRUpINVA4ODZBZU5VSTN3NzFGenUvOHFMeW11bTV4dWlMUG5BeDJ2Zk5hVWlXOEc4Qy9rRHF2bUNVQWRQNy9EWVpnN0lPdy9WYlpNTU1mNjYrRHUwRVRNbitTMUhQWG0wdzh0dExtQ0hWK0Z3cEJVS1ZMTkZMWnM5OEpkS05wNjNycjBQbUM1MzZYND0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6ImI1OTJkMTE3LTdkNzUtNDViNS05NTYyLTU2YTk5NzQ5ZTBjMiIsImZhbWlseV9uYW1lIjoiQnVraGFudHNvdiIsImdpdmVuX25hbWUiOiJLeXJ5bG8iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI4NC4xNzYuMTc0LjE4NSIsIm5hbWUiOiJLeXJ5bG8gQnVraGFudHNvdiIsIm9pZCI6ImRkMzhiYjliLTI1NjItNDA0YS04MDJkLWU1Y2ZkYmRhM2Q4OSIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwM0YxNjg2NTYyIiwicmgiOiIxLkFRSUFxT2Qxd0hfYVZrdXVVeUVvN0ZTaFBRTUFBQUFBQUFBQXdBQUFBQUFBQUFEY0FCOENBQS4iLCJzY3AiOiJvcGVuaWQgcHJvZmlsZSBTaXRlcy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImI3MWUtVm5lRzBmcFN5VmZ6SVZfY1VKWk4yenJfLTR1YlhfakhYbG5kTTgiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiJjMDc1ZTdhOC1kYTdmLTRiNTYtYWU1My0yMTI4ZWM1NGExM2QiLCJ1bmlxdWVfbmFtZSI6Imt5cnlsb0BoYWhucHJvLmNvbSIsInVwbiI6Imt5cnlsb0BoYWhucHJvLmNvbSIsInV0aSI6ImhjV2JoRHJLZWthTjB5NkFiUEpsQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19pZHJlbCI6IjEgNiIsInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6IkFmVHBmOGE0cThib3F0SzNLQkVUQzBEb3FJMF9VVmd2TzAzLXBGN00wOEUifSwieG1zX3RjZHQiOjEzNzMwMzczMzYsInhtc190ZGJyIjoiRVUifQ.Yt3Xk9t7RuDC9xPsR5xiLkE0ap6RAP004SXgGFnuSlcnVHchvbn60vpWGxkK6LlUhmIe9zy3WjCwR3aHwMuqn3uf_g8jiaJBF2Ydq00ZGwnOemMjg87AXRBKtPpjVoMGhoe9uZvbl9mBjeRpAqfkhXU9Aa3WaFq6W2Pt5dUgj6i9TVhUwkjiqbT-4Fs6IZYWxbAUPiS25gsd2EqvT-jvkIre9oXPtCW1WQzUc1jXTyU8gCzlv9DUwYz8Fr64dO24rPIzBpaM7y2h2Xf07FTwIybapN0Xlgv_Fn2qIJBRQnvp6RQJ5TF2xDsVIrdYn7zV9uvbjC9us2t5AG7NeaPJKA`,
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            fields: {
                Title: "",
                Nachname: "New Lead",
                Vorname: "BLABLA",
                EMail: "mh@hahnpro.com",
                Touchpoints:null
            }
        })
    });

    if (response.ok) {
        const result = await response.json();
        console.log("New item created:", result);
    } else {
        const error = await response.json();
        console.error("Error creating item:", error);
    }
};

createNewItem();
