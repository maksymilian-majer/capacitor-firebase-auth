import 'firebase/auth';
import firebase from 'firebase/app';
import { WebPlugin } from '@capacitor/core';
import { phoneSignInWeb } from './providers/phone.provider';
export class CapacitorFirebaseAuthWeb extends WebPlugin {
    constructor() {
        super();
    }
    async signIn(options) {
        const phoneProvider = new firebase.auth.PhoneAuthProvider().providerId;
        switch (options.providerId) {
            case phoneProvider:
                return phoneSignInWeb(options);
        }
        return Promise.reject(`The '${options.providerId}' provider was not supported`);
    }
    async signOut(options) {
        console.log(options);
        return firebase.auth().signOut();
    }
}
//# sourceMappingURL=web.js.map