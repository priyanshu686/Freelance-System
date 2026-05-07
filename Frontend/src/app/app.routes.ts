import { Routes } from '@angular/router';

import{Signin} from './components/auth/signin/signin'
import {LandingPage} from './components/landing-page/landing-page'

export const routes: Routes = [
    {
        path:'',
        component:LandingPage
    },
    {
        path:'signin',
        component:Signin
    }
];
