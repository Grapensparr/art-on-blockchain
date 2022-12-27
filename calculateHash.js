export default async function calculateHash(data) {
    const msgInt8 = new TextEncoder().encode("salt1234salt"+JSON.stringify(data));
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    return hashHex;
}