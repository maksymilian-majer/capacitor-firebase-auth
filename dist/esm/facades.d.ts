import 'firebase/auth';
import { CapacitorFirebaseAuthPlugin, SignInOptions } from './definitions';
export declare const CapacitorFirebaseAuth: CapacitorFirebaseAuthPlugin;
/**
 * Call the sign in method on native layer and sign in on web layer with retrieved credentials.
 * @param providerId The provider identification.
 * @param data The provider additional information (optional).
 */
export declare const cfaSignIn: (providerId: string, data?: SignInOptions) => any;
/**
 * Call the Google sign in method on native layer and sign in on web layer with retrieved credentials.
 */
export declare const cfaSignInGoogle: () => any;
/**
 * Call the Twitter sign in method on native and sign in on web layer with retrieved credentials.
 */
export declare const cfaSignInTwitter: () => any;
/**
 * Call the Facebook sign in method on native and sign in on web layer with retrieved credentials.
 */
export declare const cfaSignInFacebook: () => any;
export declare const cfaSignInAppleProvider = "apple.com";
/**
 * Call the Apple sign in method on native and sign in on web layer with retrieved credentials.
 */
export declare const cfaSignInApple: () => any;
/**
 * Call the Phone verification sign in, handling send and retrieve to code on native, but only sign in on web with retrieved credentials.
 * @param phone The user phone number.
 * @param verificationCode The verification code sent by SMS (optional).
 */
export declare const cfaSignInPhone: (phone: string, verificationCode?: string) => any;
/**
 * Observable of one notification of <code>On Code Sent</code>event from Phone Verification process.
 */
export declare const cfaSignInPhoneOnCodeSent: () => any;
/**
 * Observable of one notification of <code>On Code Received</code> event from Phone Verification process.
 */
export declare const cfaSignInPhoneOnCodeReceived: () => any;
/**
 * Call Google sign out method on native and web layers.
 */
export declare const cfaSignOut: () => any;
