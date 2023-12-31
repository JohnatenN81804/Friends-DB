const db = require('../config/connection');
const {Chat, Comment, Message, Post, User, Notification } = require('../models');
const chatSeeds = require('./chatSeeds.json');
const postSeeds = require('./postSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Chat.deleteMany({});
  await Post.deleteMany({});
  await User.deleteMany({});
  await Notification.deleteMany({});
  

  await User.create(userSeeds);
  await Post.create(postSeeds);
  await Chat.create(chatSeeds);
  await Notification.create()

  console.log('It worked!');
  process.exit(0);
});