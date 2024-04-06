require("dotenv").config({ path: __dirname + "/.env" });
const CronJob = require("cron").CronJob;
const { twitterClient } = require("./cliente.js");
const {download} = require("./utilities.js")
const {v4: uuidv4} = require('uuid');

const tweet = async () => {

  const uuid = uuidv4();
  const filename = `image_${uuid}.png`;

  download(uri, filename, async function(){
      try {
          const mediaId = await twitterClient.v1.uploadMedia(`./${filename}`);
          console.log(mediaId);
          await twitterClient.v2.tweet({
              text: "Hello world! This is an imagine i like!",
              media: {
                  media_ids: [mediaId]
              }
          });
      } catch (e) {
          console.log(e)
      }
  });
}

// const cronTweet = new CronJob("0 0,25,30,45 * * * *", async () => {
//   const currentDate = new Date();
//   const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timeZone: 'Europe/Madrid',
//     hour12: 'false',
//   };
//   const formattedDate = currentDate.toLocaleString('es-ES',options);
  // const tweetText = `Hola! La fecha y hora actual es: ${formattedDate}`; 
//   tweet(tweetText);
//  });

//  cronTweet.start();
const imageUr1 = "";
tweet(imageUr1);
