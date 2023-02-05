import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
appId : "1545790",
key : "f434507d1923016603eb",
secret : "320b8e1269f0b807c364",
cluster : "us3",
useTLS: true

})

export const clientPusher = new ClientPusher('f434507d1923016603eb', {
    cluster: 'us3',
    forceTLS: true
}); 