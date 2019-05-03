import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full'
  },
  { path: 'affirmations', loadChildren: './pages/affirmations/affirmations.module#AffirmationsPageModule' },
  { path: 'blessings', loadChildren: './pages/blessings/blessings.module#BlessingsPageModule' },
  { path: 'daily-evaluations', loadChildren: './pages/daily-evaluations/daily-evaluations.module#DailyEvaluationsPageModule' },
  { path: 'grateful', loadChildren: './pages/grateful/grateful.module#GratefulPageModule' },
  { path: 'problem-solving', loadChildren: './pages/problem-solving/problem-solving.module#ProblemSolvingPageModule' },
  { path: 'quotes', loadChildren: './pages/quotes/quotes.module#QuotesPageModule' },
  { path: 'todo', loadChildren: './pages/todo/todo.module#TodoPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'contact-us', loadChildren: './pages/contact-us/contact-us.module#ContactUsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
