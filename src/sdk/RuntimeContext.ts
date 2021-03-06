import { Locale } from './Locale';
import { Theme } from './Theme';
import { Manifest } from '../store/Manifest';
import { ConfigurationValue } from '../store/configuration/ConfigurationValue';

export class RuntimeContext {
  /**
   *
   * A manifest definition used to initialize this addon.
   *
   * @type {Manifest}
   * @memberof RuntimeContext
   */
  public manifest: Manifest;

  /**
   * Addon host origin address.
   *
   * @type {string}
   * @memberof RuntimeContext
   */
  public origin: string;

  public locale: Locale = Locale.ENGLISH;

  public theme: Theme = Theme.LIGHT;

  public userIdentifier!: string;

  public configuration?: ConfigurationValue[] = [];
}

export default new RuntimeContext();
