// @ts-nocheck
import {UrlsUtil} from '../Utils/Urls.Util';
const url = new UrlsUtil();
import { Page } from '@playwright/test';

export class LandingPage {
    constructor(page: Page) { 
        this.page = page;
    }
    _url: string = url._landingPage;

    async navigate() { await this.page.goto(landingPage._url); }
    async getTotalFiles() { await this.page.$eval('text=86Total Files'); }
}
