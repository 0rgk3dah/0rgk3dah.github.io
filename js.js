
async function CopyDiscord() {
    try {
        await navigator.clipboard.writeText("z_.zesty");
        alert("Copied username to clipboard!");
    } catch(err){
        console.error("Error copying Discord ID:", err);
        alert("Failed to copy Discord ID. Please try again or copy it manually: z_.zesty ( 1257997679208697926 )");
    }
}