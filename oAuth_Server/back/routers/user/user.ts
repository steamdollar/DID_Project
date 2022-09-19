import express, { Request, Response } from 'express';
import crypto from 'crypto';
import deployed from '../../web3';
import VerifyId from '../../models/user/verifyId.model';
import { responseObject } from '../app/utils';
import TotalPoint from '../../models/user/totalPoint.model';
import App from '../../models/webSite/app.model';
import DataNeeded from '../../models/webSite/dataNeeded.model';
import RedirectURI from '../../models/webSite/redirectURI.model';
import userService from '../../services/user/user.service';

const router = express.Router();
let response: any;

router.post('/oAuthRegister', async (req: Request, res: Response) => {
    const { email, password, gender, name, age, addr, mobile } = req.body;
    try {
        response = await userService.oAuthRegister(req.body);
        if(response.status !==true ) throw new Error(response.msg);
    } catch (e) {}
    res.json(response);
});

router.post('/upDatePassword', async (req: Request, res: Response) => {
    const { hashId, email, newPw } = req.body;
    try {
        response = await userService.upDatePassword(req.body);
        if(response.status !== true) throw new Error(response.msg);
    } catch (e) {}
    res.json(response)
});

router.post('/upDateUser', async (req: Request, res: Response) => {
    const { gender, name, age, addr, mobile, email, hashId } = req.body;
    try {
        response = await userService.upDateUser(req.body);
        if(response.status !== true) throw new Error(response.msg);
    } catch (e) {}
    res.json(response)
});

router.post('/searchUser', async (req: Request, res: Response) => {
    const { hashId } = req.body;
    try {
        response = await userService.searchUser(hashId);
        if(response.status !== true) throw new Error(response.msg);
    } catch (e) {}
    res.json(response)
});

router.post('/deleteUser', async (req: Request, res: Response) => {
    const { hashId, email } = req.body;
    try {
        response = await userService.deleteUser(hashId, email);
        if(response.status !== true) throw new Error(response.msg);
    } catch (e) {}
    res.json(response)
});

export default router;
