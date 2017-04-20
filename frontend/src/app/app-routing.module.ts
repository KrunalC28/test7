import { NgModule }      from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent }  from './admin/admin.component';
import { TraineeComponent } from './trainee/trainee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainingDetailComponent } from './trainer/trainingDetail.component';
import { ScenarioComponent } from './trainer/scenario.component';
import { ReportComponent }  from './admin/report.component';

const appRoutes = [
    { path:'', redirectTo:'login',pathMatch: 'full'},
    { path: 'login', component:LoginComponent },
    { path:'admin', 
      component:AdminComponent
    },
    { path:'admin/report/:id', 
      component:ReportComponent
    },
    { path:'trainer', 
      component:TrainerComponent
    },
    { path:'trainer/detail/:id', 
      component:TrainingDetailComponent
    },
    { path:'trainer/scenarios/:id', 
      component:ScenarioComponent
    },
    { path:'trainee', 
      component:TraineeComponent
    } 
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule ]
})

export class AppRoutingModule{}