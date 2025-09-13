import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: "prepwise-cf4f9",
        clientEmail:
          "firebase-adminsdk-fbsvc@prepwise-cf4f9.iam.gserviceaccount.com",
        privateKey:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCo7WabroHBapke\nMmeW3oKDQ0Na5q1TpvjkLvXd82mpjnSKHUWdtQ4Y/mlLHkMA2EtSbwHa6YSSi9Rt\nk8jjupWpWYro5yoa/axhMu9QQf8ozJAjpjzHRCJW0StulQ3ePpIgqWhIB3QHn4f/\n01WgRxzi6h/41udnC/+UTgTnayWp9tJZmqyOCim3JdZrCGLFFpyWBlx9ZKjl8WPI\nPdP1wwJ6IzzHJzSrw0mtqkwFo7pvG2lPcD4djCfGJLtZDeGKJWLQVd5n+68cQA9q\n2Vqgtb6K+IhLZ68brYlerX/iUAqnta/D1Wg0kiUYOYUJJdhZQUAPu03pMGGHeMth\n7xfVF8TpAgMBAAECggEABDV5CGE4Uqo+IyhYmCPWXuCgx52mfSZ0flP0tIldbTfz\nS6Mn0kJ59dG17CUWgImDE+xX4J1PnCqfefT0DQd/tdrZKQ0kaYx/PGM9XvOsALdb\nEoZQbpsSG3Vl9oEAedR3hdiOtHe6EnwNMoiwkhgffkBc2FF7bb/459grS1xKMZI+\nO9HJSEMBgmoqRplsuLr3CnOLxT1QQqfdOiNkjY3XS8LEEc+pNh6vFAAuR6hPNG6u\nV1P2IYUPZVULf/hDRTg6h8bFfXJqWedGkctprujYfyrisZyT8gLrtDBx/THFaMaD\nGtepDoBeSPMGhvgWDmGwP6i/ChNG4ktJChQgGFHa4QKBgQDi2R/bG8SNa5zBPxgu\nnvWTl0BGCgZe6Wi/o30fmGX8U40YpJaMN+k1uddlZjBWaPv654gDr+NYDlHqj/8D\nY7WLWJ4BsIRMVd7s3A1802Y5jCbycGGH189fmyJzfqArq8XDiswDjSpmTpYzruM2\n2P75ZBj9jgew6ZNEDHBELP8LIQKBgQC+osqkSV3FTh1ThzD2N3aI9ZavqDWL0ZiX\nmdP6WukmHhxZx8sS+pSTCCUWWR8axTb2yEdSKeasf7nB3pfz4ueU1f4swdQc5k2e\nyzzAI88I0xiMqjQjrzQuaSgNzFDJwL73v84ghx7gbPjnLNDdRycxFBaw4aAfWabX\n4XkTv58IyQKBgQCKHaR1pVxwtlqElkPE7ueaavapLiVe2EH8nC/scr91d/FqVZuL\n1+bX3US16hf4JId25k074XVMAbwCUpXznFvGcbgSU0TZrVbDY9+aZqPQ2fJEngPj\nz5PlI/E/3JLsw/Lu8azxZJuyGpr88LhKhqgHc9h7WGR6ZFxTjDc2aycFwQKBgHgG\n6U2c/9RNhXtk4Df13cUH09NPNj+NPOUerm+vs6ITTUhd2gdeDBOzCh7TCBmD2EJz\nASzDQwCS/rMI4mVlFOgKABnQBCwZ+P8k+WAEa8Mjng5az680Dce238goPyl4GQTG\nGBM04ATvt5teBTd9KDjnbA38USPL/5dm2CPN/2S5AoGBAJRy37zfbdJHw+xCK1yz\nYln1gCLaPionroFjrdIuXbFx5cAqEtTD6suvfcGKLeVUwuTQvAY7kM7dknzHI4Lb\nNdbrQwL50+EaLh683AkE+H636Xh70y+XZOMVja/vR4aO3X1GxmItXG4aUdtHMUL1\nX5jubelXyZg1R565XFIQTPCt\n-----END PRIVATE KEY-----\n",
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
