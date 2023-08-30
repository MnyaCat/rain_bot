import { WebSocket } from "ws";
import { EventEmitter } from "events";
import { MCEntity, MCFloatPos, MCIntPos, MCPlayer } from "./models/mc_models";

const port = process.env.MC_WS_PORT;
const enableMCListener = process.env.ENABLE_MCLISTENER;

export const mc_emitter = new EventEmitter();

export let ws: WebSocket;

export const events = {
    onJoin: "onJoin",
    onLeft: "onLeft",
    onRespawn: "onRespawn",
    onPlayerDie: "onPlayerDie",
    onPlayerCmd: "onPlayerCmd",
    onChat: "onChat",
    onConsoleCmd: "onConsoleCmd",
};

function ws_connect() {
    ws = new WebSocket(`ws://127.0.0.1:${port}`);

    ws.on("open", function open() {
        return;
    });
    ws.on("message", function incoming(data) {
        const jsonData = JSON.parse(data.toString());
        const eventName = jsonData.eventName as string;
        const eventData = jsonData.eventData;

        switch (eventName) {
            case events.onJoin: {
                const player = eventData.player as MCPlayer;
                mc_emitter.emit(events.onJoin, player);
                break;
            }
            case events.onLeft: {
                const player = eventData.player as MCPlayer;
                mc_emitter.emit(events.onLeft, player);
                break;
            }
            case events.onRespawn: {
                const player = eventData.player as MCPlayer;
                const pos = eventData.pos as MCFloatPos;
                const blockPos = eventData.blockPos as MCIntPos;
                mc_emitter.emit(events.onRespawn, player, pos, blockPos);
                break;
            }
            case events.onPlayerDie: {
                const player = eventData.player as MCPlayer;
                const source = eventData.source as MCEntity;
                const lastDeathPos = JSON.parse(
                    eventData.lastDethPos
                ) as MCIntPos;
                mc_emitter.emit(
                    events.onPlayerDie,
                    player,
                    source,
                    lastDeathPos
                );
                break;
            }
            case events.onPlayerCmd: {
                const player = eventData.player as MCPlayer;
                const command = eventData.command as string;
                mc_emitter.emit(events.onPlayerCmd, player, command);
                break;
            }
            case events.onChat: {
                const player = eventData.player as MCPlayer;
                const message = eventData.message as string;
                mc_emitter.emit(events.onChat, player, message);
                break;
            }
            case events.onConsoleCmd: {
                const command = eventData.command as string;
                mc_emitter.emit(command);
                break;
            }
            default:
                break;
        }
    });

    // 再接続
    ws.on("close", function incoming() {
        setTimeout(ws_connect, 5 * 1000);
    });
}

if (enableMCListener === "true") {
    ws_connect();
}
