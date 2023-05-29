var base = "http://localhost:8080";
var focuses = [["plainText", "/plain"], ["staticPath", "/static"], ["headers", "/manualcontent"], ["middleware", "/roll"], ["staticFile", "/"]];
var track = {
    total: 0,
    plainText: 0,
    staticPath: 0,
    headers: 0,
    middleware: 0,
    staticFile: 0
}
var current = 0;
var done = false;

(async () => {
    for(var i = 0; i < focuses.length; i++){
        current = i;
        await sleep(10000);
    }
    done = true;
})();

async function inter(){
    await fetch(base + focuses[current][1]);
    track.total++;
    track[focuses[current][0]]++;
    console.log(focuses[current][0], track[focuses[current][0]]);
    if(!done) return inter();
    console.log(track);
}

inter();
console.log(track);

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}