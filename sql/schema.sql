drop database if exists workout_buddy;

create database workout_buddy;

use workout_buddy;

create table schedule (
day_id int,
day_of_week varchar(100),
primary key (day_id)
);

create table workouts (
day_id int,
workout varchar(100),
primary key (day_id, workout)
);

insert into schedule (day_id, day_of_week) values (1, "Monday");
insert into schedule (day_id, day_of_week) values (3, "Wednesday");
insert into schedule (day_id, day_of_week) values (5, "Friday");

insert into workouts (day_id, workout) values (3, "Bench Press");
insert into workouts (day_id, workout) values (3, "DB Incline Press");
insert into workouts (day_id, workout) values (3, "Decline Press");
insert into workouts (day_id, workout) values (3, "Cable Flys");
insert into workouts (day_id, workout) values (3, "Dips");
insert into workouts (day_id, workout) values (3, "Tricep Curls");