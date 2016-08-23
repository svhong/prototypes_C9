Place your queries below
SELECT * FROM `students` WHERE `name` = 'Sean Hong'
UPDATE `students` SET `email`='sean@hong.com' WHERE `name`='Sean Hong'
INSERT INTO `students` SET `name`='Mandy', `email`='greatemail@email.com', `password`=sha1('thisisagreatpassword')
DELETE FROM `students` WHERE `name`='Mandy'

/*FEATURE SET 2*/

/*1*/SELECT * FROM `todo_items` WHERE `TITLE` = 'Ambiguously Gay Duo'
/*2*/INSERT INTO `todo_items` SET `title`='clean bathroom', `details`='clean the poop', `user_id`='4'
/*3*/DELETE FROM `todo_items` WHERE `USER_ID`=4
/*4*/UPDATE `todo_items` SET `title`='drink beer', `details`='open a cold one',`user_id`='4' WHERE `USER_ID`=3
/*5*/SELECT * FROM `todo_items` WHERE `user_id`='4'
