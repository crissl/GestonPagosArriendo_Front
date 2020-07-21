import { Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SolicitudReforzamientoComponent } from '../../pages/estudiantes/solicitud-reforzamiento/solicitud-reforzamiento.component';
import { SolicitudAcompanamientosComponent } from '../../pages/estudiantes/solicitud-acompanamientos/solicitud-acompanamientos.component';
import { ConfirmacionAsistenciaComponent } from '../../pages/estudiantes/confirmacion-asistencia/confirmacion-asistencia.component';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length

import { ErrorComponent } from '../../pages/error/error.component';

export const AdminLayoutRoutes: Routes = [
  // { path: 'notifications', component: NotificationsComponent},
  { path: '', component: InicioComponent },
  { path: 'solicitudReforzamiento', component: SolicitudReforzamientoComponent },
  { path: 'solicitudAcompanamiento', component: SolicitudAcompanamientosComponent },
  { path: 'confirmacionAsistencia', component: ConfirmacionAsistenciaComponent },

  { path: 'error', component: ErrorComponent },






];
