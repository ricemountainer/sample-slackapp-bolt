import { App } from "@slack/bolt/dist";
import * as dotenv from 'dotenv';
dotenv.config();
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});
(async () => {
    // アプリを起動します
    await app.start(process.env.PORT || 3000);
    app.logger.info('⚡️ Bolt app is running!');
})();
//# sourceMappingURL=index.js.map