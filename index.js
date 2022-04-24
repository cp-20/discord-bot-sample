const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Botが起動したときに通知
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  if (!client.application.owner) await client.application.fetch();

  // コマンドを登録
  client.application.commands.set([
    {
      name: 'ping',
      description: 'Pong! を返すよ',
    },
  ]);
});

// メッセージが送信されたとき
client.on('interactionCreate', async (interaction) => {
  // コマンドでなければ無視
  if (!interaction.isCommand()) return;

  // 「ping」コマンドが実行された場合
  if (interaction.commandName === 'ping') {
    // メッセージを返す
    await interaction.reply('Pong!');
  }
});

// ログイン
client.login('TOKEN');
