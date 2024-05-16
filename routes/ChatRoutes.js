const express=require('express');
const {protect}=require('../middlewares/authMiddleware');
const router=express.Router();
const {accessChat,fetchChats,createGroupChat,renameGroup,addToGroup,removeFromGroup}=require('../conroller/chatController')
router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChats);
router.route('/group').post(protect,createGroupChat);
router.route('/rename').put(protect,renameGroup);
router.route('/groupadd').post(protect,addToGroup);
router.route('/groupremove').post(protect,removeFromGroup);

module.exports=router;

