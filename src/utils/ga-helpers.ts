/**
 * Extracts the user ID from the Google Analytics device ID.
 * @example `GA1.1.xxxxxxxxxx.xxxxxxxxxx => xxxxxxxxxx.xxxxxxxxxx`
 * @link https://support.google.com/analytics/answer/11397207
 */
function extractGoogleAnalyticsUserIdFromCookie(gaCookie: string) {
  if (gaCookie) {
    // Remove the Google Analytics tracker from the device ID.
    const userIdParts = gaCookie.split(".").slice(-2);
    if (userIdParts.length === 2) {
      return userIdParts.join("-");
    }
  }
  return undefined;
}

function getBrowserCookie(cookieName: string) {
  // In React Native environments, `document.cookie` doesn't exist.
  if (typeof document !== "object" || typeof document.cookie !== "string") {
    return undefined;
  }
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return undefined;
}

/**
 * Returns the Google Analytics User ID from a browser cookie name.
 * @example `getGoogleAnalyticsUserIdFromBrowserCookie('_ga')`
 */
export function getGoogleAnalyticsUserIdFromBrowserCookie(cookieName: string) {
  const browserCookie = getBrowserCookie(cookieName);

  if (!browserCookie) {
    return undefined;
  }

  return extractGoogleAnalyticsUserIdFromCookie(browserCookie);
}
