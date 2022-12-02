import * as pg from 'pg'
import { Sequelize } from "sequelize";
import 'dotenv/config';

const porta:number | any = process.env.DB_PORT;
const dialect:string | any = process.env.DB_DIALECT;

export const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  dialect: dialect,
  host:process.env.DB_HOST,
  port: porta,
  dialectModule: pg
});