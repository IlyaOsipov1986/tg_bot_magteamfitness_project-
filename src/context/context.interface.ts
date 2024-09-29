import { Context } from "telegraf";

export interface SessionData {
    authType: string;
}

export interface IBotContext extends Context {
    session: SessionData;
}