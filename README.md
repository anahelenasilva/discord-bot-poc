# discord-bot-poc
Discord bot poc

## How to run
1. Install node
2. Install npm
3. Install dependencies

```sh
yarn
```

4. Follow the instructions on the following link to create a bot and get the token
Open your application in the [Discord Developer Portal](https://discord.com/developers/applications) and go to the "Bot" page to copy your token.

5. Change the name of the file `.env.example` to `.env` and replace the value of the variables inside with the values you got in the previous step

6. Deploy the bot commands with the following command only once (you dont need to run more than once)

```sh
node deploy-commands.js
```

7. Run the bot using the following command each time you make a change

```sh
node index.js
```

## Hot it looks

### /ping command
![image](/images/ping-command.png)

### /git command (with embed content)
![image](/images/git-command.png)

### /playlist command
![image](/images/playlist-command.png)

### /docs command (with menu)
![image](/images/docs-command-menu.png)

### /docs command (after selecting a menu option)
![image](/images/docs-command.png)

## TODO
- [ ] Add more commands as we need
- [ ] Publish the bot in a server