import {AbstractLinks} from './links'

/**
 * Singleton class for windows links.
 */
export class LinuxLinks extends AbstractLinks {
  // Singleton instance
  private static _instance: LinuxLinks

  // Private constructor to prevent instantiation
  private constructor() {
    super()
    // Map of cuda SemVer version to download URL
    this.cudaVersionToURL = new Map([])
  }

  static get Instance(): LinuxLinks {
    return this._instance || (this._instance = new this())
  }
}
