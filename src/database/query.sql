create database calendar_task;

create table users (
  id serial primary key,
  name text not null,
  email text not null unique,
  password,
);

create table tags (
  id serial primary key,
  name,
);

create table tasks (
  id serial primary key,
  title,
  description, 
  date, 
  duration,
  tag,
);
