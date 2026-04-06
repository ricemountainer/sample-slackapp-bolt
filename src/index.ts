import { App,  } from "@slack/bolt";
import * as dotenv from 'dotenv';
dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message('hello' , async({message, say})=>{
    console.log('debug: ' + JSON.stringify(message));
    if ('user' in message) {
      await say(`Hey there <@${message.user||''}>!`);
    }
});

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 3000);

  app.logger.info('⚡️ Bolt app is running!');
})();