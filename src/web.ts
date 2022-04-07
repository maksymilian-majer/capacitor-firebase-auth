import 'firebase/auth';

import firebase from 'firebase/app';

import { WebPlugin } from '@capacitor/core';

import { CapacitorFirebaseAuthPlugin, SignInOptions, SignInResult } from './definitions';
import { phoneSignInWeb } from './providers/phone.provider';

export class CapacitorFirebaseAuthWeb extends WebPlugin implements CapacitorFirebaseAuthPlugin {
  constructor() {
    super();
  }

  async signIn<T extends SignInResult>(options: { providerId: string, data?: SignInOptions }): Promise<T> {
      const phoneProvider = new firebase.auth.PhoneAuthProvider().providerId;
      
      switch (options.providerId) {
          case phoneProvider:
              return phoneSignInWeb(options) as any;
      }

	  return Promise.reject(`The '${options.providerId}' provider was not supported`);
  }

  async signOut(options: {}): Promise<void> {
      console.log(options);
      return firebase.auth().signOut()
  }
}
