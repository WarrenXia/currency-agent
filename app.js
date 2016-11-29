"use strict";
import agent from './agent';
import {createQuery} from './connection';

async function app() {
  try {
    await createQuery('create database if not exists CURRENCY');
    await createQuery('create table if not exists CURRENCY.CURRENCY (id int,name varchar(255),area varchar(255),symbol varchar(255),timestamp bigint(13),date date,time time,spotin varchar(255),cashin varchar(255),spotout varchar(255),cashout varchar(255),middleprice varchar(255))');
    agent();
  } catch (e) {
    console.error(e);
  }
};

app();
