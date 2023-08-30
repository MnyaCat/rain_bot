import { REST, Routes } from "discord.js";

import * as dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}.local`, override: true });

const token = process.env.BOT_TOKEN as string;
const clientId = "1122080439918669834";

const rest = new REST().setToken(token);

const ids = ["1145644682320285696", "1145644684300013568"];

for (let i = 0; i < ids.length; i++) {
    rest.delete(Routes.applicationCommand(clientId, ids[i]))
        .then(() => console.log("Successfully deleted application command"))
        .catch(console.error);
}
