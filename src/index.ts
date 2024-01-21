import { PrismaClient } from "../prisma/generated/splatoon_client";
import { container, SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: `./.env.${process.env.NODE_ENV}.local`, override: true });

const envs = new Map<string, string | undefined>();
envs.set("datasource", process.env.SPLATOON_DB_URL);
envs.set("token", process.env.BOT_TOKEN);
envs.forEach((value, key) => {
    if (!value) {
        console.error(`必須の環境変数"${key}"が不足しています`);
        process.exit(1);
    }
});

export class RainClient extends SapphireClient {
    public constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildVoiceStates,
            ],
        });
    }

    public override async login(token?: string) {
        container.database = new PrismaClient({
            datasources: { db: { url: envs.get("datasource") } },
        });
        return super.login(token);
    }

    public override async destroy() {
        await container.database.$disconnect();
        return super.destroy();
    }
}

declare module "@sapphire/pieces" {
    interface Container {
        database: PrismaClient;
        lastGroupingResults: string[][] | undefined;
    }
}

const client = new RainClient();
client.login(envs.get("token"));
