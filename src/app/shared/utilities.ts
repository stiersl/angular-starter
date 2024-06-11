/* ============================================================================
    utilities.ts
    Angular Starter Common Utilites Class
    Holds common Utilities to use across Application
  -----------------------------------------------------------------------------
    vers    Date        Whom            What
    0.0.1   06/11/2024  Steven Stier    Initial Release

============================================================================== */
import { HttpErrorResponse } from "@angular/common/http";

export function myLog(message: string) {
  if (sessionStorage.getItem("debug") !== null)
    console.log ('angular-starter:' + message);
}
export function getServerErrorMessage(error: HttpErrorResponse): string {
  switch (error.status) {
    case 401: {
      return `Unauthorized access. Please contact your administrator.`;
    }
    case 404: {
      return `Something is wrong with configuration. Please contact your administrator.`;
    }
    case 403: {
      return `Denied access. Please contact your administrator.`;
    }
    case 500: {
      return `Internal Server Error: Please contact your administrator.`;
    }
    default: {
      return `Unknown Server Error: Please contact your administrator.`;
    }
  }
}
