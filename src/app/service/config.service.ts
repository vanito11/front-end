import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _api_url = '/api'

  private _refresh_token_url = this._api_url + '/refresh';

  private _local_url = 'http:localhost:8080';

  private _login_url = this._api_url + '/login';

  private _logout_url = this._api_url + '/logout';

  private _change_password_url = this._api_url + '/changePassword';

  private _whoami_url = this._api_url + '/whoami';

  private _user_url = this._api_url + '/user';

  private _users_url = this._user_url + '/all';

  private _encadrants_url = this._api_url + '/encadrants';

  private _encadrant_search_email_url = this._api_url + '/encadrant/email/';

  private _stagiaires_url = this._api_url + '/stagiaires';

  private _stagestagiaires_url = this._api_url + '/stagestagaires';

  private _tuteurs_url = this._api_url + '/tuteurs';

  private _entreprises_url = this._api_url + '/entreprises';

  private _reset_credentials_url = this._user_url + '/reset-credentials';

  private _foo_url = this._api_url + '/foo';

  private _signup_url = this._api_url + '/signup';

  private _filiere_url = this._api_url + '/filieres';

  private _seanceencadrements_url = this._api_url + '/seanceencadrements';

  private _documents_url = this._api_url + '/documents';

  private _visites_url = this._api_url + '/visites';

  private _soutenances_url = this._api_url + '/soutenances';

  private _getStagiaire_url = this._api_url + '/stagiaires/';


  private _getStages_url = this._api_url + '/stages';

  get documents_url(): string {
    return this._documents_url;
  }
  get visites_url(): string {
    return this._visites_url;
  }
  get soutenances_url(): string {
    return this._soutenances_url;
  }
  get seanceencadrements_url(): string {
    return this._seanceencadrements_url;
  }

  get getStages_url(): string {
    return this._getStages_url;
  }
  get entreprises_url(): string {
    return this._entreprises_url;
  }

  get getStagiaire_url(): string {
    return this._getStagiaire_url;
  }

  get filiere_url(): string {
    return this._filiere_url;
  }

  get reset_credentials_url(): string {
    return this._reset_credentials_url;
  }

  get refresh_token_url(): string {
    return this._refresh_token_url;
  }

  get whoami_url(): string {
    return this._whoami_url;
  }

  get users_url(): string {
    return this._users_url;
  }

  get encadrants_url(): string {
    return this._encadrants_url;
  }

  get encadrant_search_email_url(): string {
    return this._encadrant_search_email_url;
  }

  get stagiaires_url(): string {
    return this._stagiaires_url;
  }
  get stagestagiaires_url(): string {
    return this._stagestagiaires_url;
  }
  get tuteurs_url(): string {
    return this._tuteurs_url;
  }

  get login_url(): string {
    return this._login_url;
  }

  get logout_url(): string {
    return this._logout_url;
  }

  get change_password_url(): string {
    return this._change_password_url;
  }

  get foo_url(): string {
    return this._foo_url;
  }

  get signup_url(): string {
    return this._signup_url;
  }



}
