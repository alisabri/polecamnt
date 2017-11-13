import { LoginComponent } from "./pages/login/login.component";
import { TabComponent } from "./pages/tab/tab.component";
import { HomeComponent } from "./pages/home/home.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "tabs", component: TabComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "schedule", component: ScheduleComponent }
        ]
    },
];

export const navigatableComponents = [
  LoginComponent,
  TabComponent,
  HomeComponent,
  ScheduleComponent
];