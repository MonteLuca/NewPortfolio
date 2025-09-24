import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',
    loadChildren: () =>
      import('./Home/home.module').then(m => m.HomeModule)
  },
  { path: 'projects',
    loadChildren: () =>
      import('./Projects/projects.module').then(m => m.ProjectsModule)
  },
  { path: 'about',
    loadChildren: () =>
      import('./AboutMe/about-me.module').then(m => m.AboutMeModule)
  },
  { path: 'contact',
    loadChildren: () =>
      import('./Contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./Jobs/jobs.module').then(m => m.JobsModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
