import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { WhyUsPageComponent } from './pages/why-us-page/why-us-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutPageComponent
    },
    {
        path: 'why-us', component: WhyUsPageComponent
    },
    {
        path: 'services', component: ServicesPageComponent
    },
    {
        path: 'team', component: TeamPageComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
